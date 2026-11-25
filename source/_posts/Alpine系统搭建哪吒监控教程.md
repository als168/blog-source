---
title: Alpine系统搭建哪吒监控教程
top: 1
cover: https://xiaa.dpdns.org/file/vlog/1745066448863_image-7-1024x752.png
swiper_index: 10
background: '#fff'
date: 2025-04-19 20:24:02
updated:
tags:
categories:
keywords:
description:
top_img:
comments:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
ai:
---


<div style="text-align: center;">
  <img src="https://xiaa.dpdns.org/file/vlog/1745066448863_image-7-1024x752.png" alt="哪吒监控" style="max-width: 100%; border: 1px solid #eee; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <p style="color: #999; font-size: 1.5em;">哪吒监控</p>
</div>






<p>1、更新系统：apk update && apk upgrade</p>



<p>2、cloudflare解析域名 开启小黄云</p>



<p>3、先安装工具，安装wget,sudo等   apk add curl wget sudo unzip</p>



<p>4、哪吒面板安装 </p>
```bash
curl -L https://raw.githubusercontent.com/nezhahq/scripts/refs/heads/main/install.sh -o nezha.sh && chmod +x nezha.sh && sudo ./nezha.sh
```







<p>5、安装nginx     apk add nginx</p>



<p>在文件路径etc/nginx 中找到nginx.config文件，全部替换，替换以下代码，只修改自己哪吒监控网站域名（刚刚解析域名）</p>



<p>进入文件目录：cd /etc/nginx       创建并编辑文件：nano nginx.conf     删除里面内容ctrl+k</p>



<p>nginx配置文件：</p>

{% folding '点击查看ngixn配置文件' %}


<pre class="wp-block-code"><code>#user  nobody;
worker_processes  1;



#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user &#91;$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server
{
    listen &#91;::]:80;   #监听端口 IPv6
    listen &#91;::]:443 ssl;    #监听端口 带SSL iPv6
    #listen 80; #ipv4
    #listen 443 ssl;  #ipv4
    server_name nezha.apepine.top; #填写监控网站域名
    index index.php index.html index.htm default.php default.htm default.html;
    root /home/web/nezha;
    #index root部分随便写 没用的
    
    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
    #error_page 404/404.html;
    ssl_certificate    /etc/ssl/private/fullchain.cer;   #SSL证书文件
    ssl_certificate_key    /etc/ssl/private/private.key;  #SSL密钥文件
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000";
    error_page 497  https://$host$request_uri;
 
#以下是反代内容 如果有特别设置端口记得修改 
   
location / {
    proxy_pass http://127.0.0.1:8008;
    proxy_set_header Host $host;
    proxy_set_header Origin https://$host;
    proxy_set_header nz-realip $http_CF_Connecting_IP;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
}
location ~ ^/(ws|terminal/.+|file/.+)$ {
    proxy_pass http://127.0.0.1:8008;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $http_host;
}
}
}</code></pre>
{% endfolding %}




<p>6、打开cloudflaer，在解析域名设置那里，打开网络，WebSockets打开   gRPC打开</p>



<p>打开ssl设置，选择源服务器，创建证书</p>



<p>打开概述 配置ssl为完全严格      边缘证书 始终使用 HTTPS</p>



<p>进入文件管理，路径/etc/ssl/private     命令：cd /etc/ssl/private</p>



<p>创建证书文件名fullchain.cer，粘贴刚刚申请证书      命令：nano fullchain.cer<br>创建私钥文件名private.key 粘贴刚刚申请密钥         命令：nano private.key</p>



<p>重启nginx       rc-service nginx restart && rc-service nginx status</p>



<p>Nginx 开机自启     rc-update add nginx</p>



<p>7、现在，可以成功访问域名，登录哪吒后台   改密码</p>



<p>Agent对接地址【域名/IP:端口】：需要用IP:端口，且下面Agent使用TLS连接，不能勾选，只有这样才能解决服务器装上探针之后后台不显示服务器的问题</p>



<pre class="wp-block-code"><code> &#91;2a01:4f9:6b:47e9::2050]:8008</code></pre>



<p>8、复制对应系统命令，到被监控端粘贴回车</p>



<p>如果监控端服务器为纯ipv6，那么被监控端也需要ipv6，可以添加wrap，添加ipv6出口<br>安装wrap</p>


```bash
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/menu.sh && bash menu.sh [option] [lisence/url/token]
```

<p></p>



<p>9、安装哪吒监控遇到问题</p>



<p>错误<br>Node.removeChild: The node to be removed is not a child of this node<br>解决<br>关闭浏览器自带的翻译，刷新网页关闭了翻译后，就恢复正常了</p>



<p>502错误的网关</p>



<p>检查一下哪吒面板服务有没有正确启动，Alpine系统的检查输入命令：rc-service nezha-dashboard status，查看一下面板有没有启动，如果没有启动就输入命令：rc-service nezha-dashboard start 启动服务就可以</p>



<p>10、卸载</p>



<p>卸载 Agent<br>卸载 Agent 包括停止服务、卸载服务，以及删除相关文件。以下是 Ubuntu 系统的卸载步骤：</p>



<p>停止并卸载服务：<br>cd /opt/nezha/agent/<br>./nezha-agent service uninstall</p>



<p>删除 Agent 文件夹：<br>rm -rf /opt/nezha/agent/</p>



<p>如果安装了多个服务并想要全部卸载，可以使用 Agent 安装脚本的卸载功能：<br>./agent.sh uninstall</p>



<p>卸载Nginx</p>



<ol class="wp-block-list">
<li>停止 Nginx 服务 sudo rc-service nginx stop</li>



<li>删除 Nginx 软件包 sudo apk del nginx</li>



<li>清理配置文件（可选）</li>
</ol>



<p>     sudo rm -rf /etc/nginx # 删除配置目录<br>     sudo rm -rf /var/log/nginx # 删除日志文件<br>     sudo rm -rf /var/lib/nginx # 删除缓存文件</p>



<ol start="4" class="wp-block-list">
<li>移除开机自启（如果之前设置过） sudo rc-update del nginx</li>
</ol>



<p>11.美化代码</p>

{% folding '点击查看美化代码配置' %}


<pre class="wp-block-code"><code>&lt;script&gt;
window.CustomBackgroundImage = "";
window.CustomMobileBackgroundImage = "";
window.CustomLogo = "";
window.CustomDesc = "";
window.ShowNetTransfer = true;
window.DisableAnimatedMan = false;
window.FixedTopServerName = true;
window.ForceUseSvgFlag = true;
var observer = new MutationObserver(function(mutationsList, observer) {
var xpath = "/html/body/div/div/main/div&#91;2]/section&#91;1]/div&#91;4]/div";
var container = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (container) {
observer.disconnect();
var existingImg = container.querySelector("img");
if (existingImg) {
container.removeChild(existingImg);
}
var imgElement = document.createElement("img");
imgElement.src = "";
imgElement.style.position = "absolute";
imgElement.style.zIndex = "10";
container.appendChild(imgElement);
}
});
var config = { childList: true, subtree: true };
observer.observe(document.body, config);
&lt;/script&gt;
&lt;script src="https://cdn.jsdelivr.net/gh/mocchen/cssmeihua/js/aixin.js"&gt;&lt;/script&gt;
&lt;script src="https://cdn.jsdelivr.net/gh/mocchen/cssmeihua/js/yinghua.js"&gt;&lt;/script&gt;
&lt;span class="js-cursor-container"&gt;&lt;/span&gt;
&lt;script src="https://cdn.jsdelivr.net/gh/mocchen/cssmeihua/js/xiaoxingxing.js"&gt;&lt;/script&gt;
&lt;div id="ip-iframe" style="position: fixed; bottom: -20px; left: 50%; transform: translateX(-50%) translateY(20px); width: 90%; max-width: 650px; height: 125px; z-index: 9988; opacity: 0; transition: opacity 0.5s ease, transform 0.5s ease; pointer-events: none;"&gt;
    &lt;iframe src="https://ip.skk.moe/simple-dark" style="width: 100%; height: 100%; border: none; background: white; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);"&gt;&lt;/iframe&gt;
&lt;/div&gt;

&lt;script&gt;
function isDesktop() {
    return !/Mobi|Android/i.test(navigator.userAgent);
}

// 如果是移动端，隐藏 iframe
if (!isDesktop()) {
    document.getElementById('ip-iframe').style.display = 'none';
}

let timeoutId = null;
let lastScrollY = window.scrollY;



// 显示 iframe
function showIframe() {
    let iframe = document.getElementById('ip-iframe');
    if (!iframe) return;
    iframe.style.opacity = '1';
    iframe.style.transform = 'translateX(-50%) translateY(0)';
    iframe.style.pointerEvents = 'auto';
}

// 隐藏 iframe
function hideIframe() {
    let iframe = document.getElementById('ip-iframe');
    if (!iframe) return;
    iframe.style.opacity = '0';
    iframe.style.transform = 'translateX(-50%) translateY(20px)';
    iframe.style.pointerEvents = 'none';
}
&lt;/script&gt;
&lt;iframe src="https://ping0.cc/img1" style="width: 100%; border: 0; background: transparent; position: relative; z-index: 900;" class="mobile-iframe"&gt;&lt;/iframe&gt;

&lt;style&gt;
/* 默认情况下隐藏 iframe */
.mobile-iframe {
    display: none;
}

/* 屏幕宽度小于或等于 768px 时，显示 iframe */
@media (max-width: 768px) {
    .mobile-iframe {
        display: block;
    }
}
&lt;/style&gt;

&lt;script&gt;
    /* 这部分这几个挂在 window 下的变量是哪吒内置的, 详见 https://nezha.wiki/guide/settings.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%A3%E7%A0%81 */
    window.CustomBackgroundImage = 'https://r2.369069.xyz/blog/20250414_8d62ff03.jpg'; /* PC 端背景图 */
    window.CustomMobileBackgroundImage = 'https://r2.369069.xyz/blog/20250415_40e0cad4.jpg'; /* 移动端背景图 */
    window.CustomLogo = 'https://xiny.cc/xiny/favicon.ico'; /* 页面左上角和标题栏展示的 Logo */
    window.CustomDesc = 'XINY'; /* 页面左上角副标题 */
    window.ShowNetTransfer = true; /* 服务器卡片是否显示上下行流量, 默认不显示 */
    window.DisableAnimatedMan = true; 
    window.FixedTopServerName = true; /* 是否固定顶部显示服务器名称, 默认不固定 */
    window.CustomLinks = '&#91;{\"link\":\"https://cqjd.3217778.xyz/\",\"name\":\"首页\"},{\"link\":\"https://apepine.com/\",\"name\":\"博客\"}]'; /* 自定义导航栏链接 */

    /* 自定义字体, 注意需要同步修改下方 CSS 中的 font-family */
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://font.sec.miui.com/font/css?family=MiSans:400,700:MiSans'; // MiSans
    // link.href = 'https://npm.elemecdn.com/<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="214d5946560c56444f4a40480c52425344444f0c564443474e4f5561100f160f11">[email&#160;protected]</a>/style.css'; // 霞鹜文楷, font-family: 'LXGW WenKai Screen'
    document.head.appendChild(link);
&lt;/script&gt;
&lt;style&gt;
    /* 自定义字体 */
    * {
        font-family: 'MiSans';
    }
    h1, h2, h3, h4, h5 {
        font-family: 'MiSans', sans-serif;
    }

    /* 背景压暗和模糊, 开了背景图建议开启 */
    .dark .bg-cover::after {
        content: '';
        position: absolute;
        inset: 0;
        backdrop-filter: blur(4px);
        background-color: rgba(0, 0, 0, 0.1);
    }
    .light .bg-cover::after {
        content: '';
        position: absolute;
        inset: 0;
        backdrop-filter: blur(4px);
        background-color: rgba(255, 255, 255, 0.1);
    }

    footer {
        display: none;
    }
&lt;/style&gt;

</code></pre>
{% endfolding %}




