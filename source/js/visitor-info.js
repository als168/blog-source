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

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function tick() {
    var el = document.getElementById("vi-time");
    if (!el) return;
    var d = new Date();
    el.textContent =
      d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) +
      " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) +
      " " + WEEK[d.getDay()];
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function loadIp() {
    fetch("/cdn-cgi/trace")
      .then(function (r) { return r.text(); })
      .then(function (t) {
        var ip = (t.match(/^ip=(.+)$/m) || [])[1];
        var loc = (t.match(/^loc=(.+)$/m) || [])[1];
        if (!ip) throw new Error("no ip");
        setText("vi-ip", ip.trim());
        if (loc) setText("vi-loc", LOC_NAMES[loc.trim()] || loc.trim());
      })
      .catch(function () {
        fetch("https://ipapi.co/json/")
          .then(function (r) { return r.json(); })
          .then(function (j) {
            if (j && j.ip) setText("vi-ip", j.ip);
            if (j && (j.country_name || j.city)) {
              setText("vi-loc", [j.country_name, j.city].filter(Boolean).join(" "));
            }
          })
          .catch(function () { setText("vi-ip", "未能获取"); });
      });
  }

  function init() {
    if (document.getElementById("visitorInfoCard")) return;
    var aside = document.getElementById("aside-content");
    if (!aside) return;
    var card = document.createElement("div");
    card.className = "card-widget";
    card.id = "visitorInfoCard";
    card.innerHTML =
      '<div class="item-headline"><i class="anzhiyufont anzhiyu-icon-location-dot"></i><span>访客信息</span></div>' +
      '<div style="font-size:14px;line-height:2;padding:2px 2px 0;">' +
      '<div>你的 IP：<span id="vi-ip">获取中…</span></div>' +
      '<div>归属地：<span id="vi-loc">—</span></div>' +
      '<div>当前时间：<span id="vi-time">—</span></div>' +
      "</div>";
    aside.insertBefore(card, aside.firstChild);
    tick();
    setInterval(tick, 1000);
    loadIp();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  document.addEventListener("pjax:complete", init);
})();
