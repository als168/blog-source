// 访客信息：侧边栏卡片 + 首页开屏（标题区）头像与 IP 信息条。
// IP 走本站 Cloudflare 的 /cdn-cgi/trace（同源，不经第三方）；失败时退到 ipapi.co。
(function () {
  var AVATAR_URL = "https://xiaa.dpdns.org/file/1795508496057_media-generation-blog-avatar-anime-0-18dce433-8d1d-4ea6-8d1e-7b0e6114594b.webp";
  var LOC_NAMES = {
    CN: "中国", HK: "中国香港", TW: "中国台湾", MO: "中国澳门",
    SG: "新加坡", JP: "日本", KR: "韩国", US: "美国", GB: "英国",
    DE: "德国", FR: "法国", AU: "澳大利亚", CA: "加拿大", IN: "印度",
    RU: "俄罗斯", NL: "荷兰", MY: "马来西亚", TH: "泰国", VN: "越南",
    ID: "印度尼西亚", PH: "菲律宾"
  };
  var WEEK = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  var clockStarted = false;

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function setAll(cls, text) {
    var els = document.querySelectorAll("." + cls);
    for (var i = 0; i < els.length; i++) els[i].textContent = text;
  }

  function tick() {
    var d = new Date();
    setAll("vi-time",
      d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) +
      " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) +
      " " + WEEK[d.getDay()]);
  }

  function loadIp() {
    fetch("/cdn-cgi/trace")
      .then(function (r) { return r.text(); })
      .then(function (t) {
        var ip = (t.match(/^ip=(.+)$/m) || [])[1];
        var loc = (t.match(/^loc=(.+)$/m) || [])[1];
        if (!ip) throw new Error("no ip");
        setAll("vi-ip", ip.trim());
        if (loc) setAll("vi-loc", LOC_NAMES[loc.trim()] || loc.trim());
      })
      .catch(function () {
        fetch("https://ipapi.co/json/")
          .then(function (r) { return r.json(); })
          .then(function (j) {
            if (j && j.ip) setAll("vi-ip", j.ip);
            if (j && (j.country_name || j.city)) {
              setAll("vi-loc", [j.country_name, j.city].filter(Boolean).join(" "));
            }
          })
          .catch(function () { setAll("vi-ip", "未能获取"); });
      });
  }

  function buildSidebarCard() {
    if (document.getElementById("visitorInfoCard")) return;
    var aside = document.getElementById("aside-content");
    if (!aside) return;
    var card = document.createElement("div");
    card.className = "card-widget";
    card.id = "visitorInfoCard";
    card.innerHTML =
      '<div class="item-headline"><i class="anzhiyufont anzhiyu-icon-location-dot"></i><span>访客信息</span></div>' +
      '<div style="font-size:14px;line-height:2;padding:2px 2px 0;">' +
      '<div>你的 IP：<span class="vi-ip">获取中…</span></div>' +
      '<div>归属地：<span class="vi-loc">—</span></div>' +
      '<div>当前时间：<span class="vi-time">—</span></div>' +
      "</div>";
    aside.insertBefore(card, aside.firstChild);
  }

  function buildHeaderBlock() {
    // 仅首页开屏的标题区（#site-info）里加：头像 + IP 信息条
    if (document.getElementById("viHeaderBlock")) return;
    var info = document.getElementById("site-info");
    if (!info) return;
    var wrap = document.createElement("div");
    wrap.id = "viHeaderBlock";
    wrap.innerHTML =
      '<img src="' + AVATAR_URL + '" alt="头像" ' +
      'style="width:88px;height:88px;border-radius:50%;object-fit:cover;display:block;margin:0 auto 16px;' +
      'border:3px solid rgba(255,255,255,.9);box-shadow:0 6px 24px rgba(0,0,0,.45);">' +
      '<div style="margin-top:18px;">' +
      '<span style="display:inline-block;padding:7px 16px;border-radius:999px;background:rgba(0,0,0,.42);' +
      'color:#fff;font-size:13.5px;line-height:1.5;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);">' +
      '你的 IP：<span class="vi-ip">获取中…</span> · 归属地：<span class="vi-loc">—</span> · ' +
      '<span class="vi-time">—</span></span></div>';
    // 头像放在标题上方，信息条整体追加到标题区末尾：拆成两步插入
    var avatarImg = wrap.querySelector("img");
    var pill = wrap.querySelector("div");
    info.insertBefore(avatarImg, info.firstChild);
    info.appendChild(pill);
    wrap.id = "";
    avatarImg.id = "viHeaderBlock";
  }

  function init() {
    buildSidebarCard();
    buildHeaderBlock();
    tick();
    if (!clockStarted) {
      clockStarted = true;
      setInterval(tick, 1000);
    }
    loadIp();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  document.addEventListener("pjax:complete", init);
})();
