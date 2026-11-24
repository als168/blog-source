// 访客信息卡：显示访客自己的 IP、归属地与当前时间，插入侧边栏顶部。
// IP 走本站 Cloudflare 的 /cdn-cgi/trace（同源，不经第三方）；失败时退到 ipapi.co。
(function () {
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

  function buildLoadingLine() {
    // 加载屏里、头像正下方加一行访客信息（深色胶囊底，浅色/深色加载屏都看得见），与侧边栏卡共用数据
    if (document.getElementById("viLoadingLine")) return;
    var host = document.querySelector("#loading-box .loading-bg") ||
      document.getElementById("loading-box");
    if (!host) return;
    var line = document.createElement("div");
    line.id = "viLoadingLine";
    line.style.cssText =
      "position:absolute;left:50%;top:calc(50% + 88px);transform:translateX(-50%);" +
      "text-align:center;z-index:3;max-width:94vw;";
    line.innerHTML =
      '<span style="display:inline-block;background:linear-gradient(90deg,#2563eb,#06b6d4 55%,#a855f7);color:#fff;' +
      'border-radius:999px;padding:6px 16px;font-size:13.5px;font-weight:600;letter-spacing:.5px;' +
      'box-shadow:0 4px 18px rgba(37,99,235,.45);">' +
      '你的 IP：<span class="vi-ip">获取中…</span> · 归属地：<span class="vi-loc">—</span> · ' +
      '<span class="vi-time">—</span></span>';
    host.appendChild(line);
  }

  function init() {
    buildSidebarCard();
    buildLoadingLine();
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
