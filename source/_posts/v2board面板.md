---
title: 【移花接木】实战演示机场搭建运作原理，开机场有多赚钱？机场主能看到你的哪些隐私信息？一台VPS就能开机场，寄生到其他机场大幅降低成本开机场的方法allowfullscreen></iframe>
cover: https://img.090227.xyz/file/ae62475a131f3734a201c.png
swiper_index: 10
top_group_index: 10
background: '#fff'
date: 2024-10-31 21:05:50
updated:
tags:
categories:
keywords:
description:
top:
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

<div class="video-container">
<iframe width="1280" height="738" src="https://www.youtube.com/embed/45xphdg8PjE" title="落魄小伙子受人欺辱，卻意外覺醒成為王道天醫，一身醫術走天下！不料遭遇未婚妻上門退婚，這下該你後悔了！" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


<style>
.video-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 aspect ratio (height/width = 9/16 * 100%) */
}
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>

相关网址
v2board面板(已停更)：https://github.com/v2board/v2board
Xboard面板(基于v2board二次开发)：https://github.com/cedar2025/Xboard
SSPanel面板：https://github.com/Anankke/SSPanel-UIM/
XrayR：https://github.com/XrayR-project/XrayR

自用专线机场推荐： https://b.880805.xyz
GIA线路VPS推荐： https://bwg.880805.xyz

相关教程回顾
v2board机场面板高危漏洞：https://youtu.be/yfneS2R-Pn8
节点是怎么钓鱼的：https://youtu.be/vuF6rDLp3pg
节点搭建系列教程：https://www.youtube.com/playlist?list=PL5TbbtexT8T3d_7UX2aSFhoMYk-cl4kf4

相关指令



```
{
  "domainStrategy": "IPOnDemand",
  "rules": [
    {
      "type": "field",
      "inboundTag": ["Shadowsocks_0.0.0.0_30000"],
      "outboundTag": "hk1"
    },
    {
      "type": "field",
      "inboundTag": ["Shadowsocks_0.0.0.0_30001"],
      "outboundTag": "tw1"
    },
    {
      "type": "field",
      "inboundTag": ["Shadowsocks_0.0.0.0_30002"],
      "outboundTag": "jp1"
    },
    {
      "type": "field",
      "inboundTag": ["Shadowsocks_0.0.0.0_30003"],
      "outboundTag": "sg1"
    },
    {
      "type": "field",
      "inboundTag": ["Shadowsocks_0.0.0.0_30004"],
      "outboundTag": "kr1"
    },
    {
      "type": "field",
      "inboundTag": ["Shadowsocks_0.0.0.0_30005"],
      "outboundTag": "us1"
    },
    {
      "type": "field",
      "inboundTag": ["Shadowsocks_0.0.0.0_30006"],
      "outboundTag": "my1"
    },
    {
      "type": "field",
      "inboundTag": ["Shadowsocks_0.0.0.0_30007"],
      "outboundTag": "ua1"
    }
  ]
}

```

```
[
    {
    "tag": "IPv4_out",
    "protocol": "freedom",
    "settings": {}
    },
    {
    "protocol": "blackhole",
    "tag": "block"
    },
    {
      "tag": "hk1",
      "protocol": "shadowsocks",
      "settings": {
        "servers": [
          {
            "address": "141.91.75.233",
            "method": "aes-128-gcm",
            "password": "e7c42a89-8153-4cb4-bf7c-0a113d2ac6d7",
            "port": 10001
          }
        ]
      }
    },
    {
      "tag": "tw1",
      "protocol": "shadowsocks",
      "settings": {
        "servers": [
          {
            "address": "61.124.127.25",
            "method": "aes-128-gcm",
            "password": "e7c42a89-8153-4cb4-bf7c-0a113d2ac6d7",
            "port": 10003
          }
        ]
      }
    },
    {
      "tag": "jp1",
      "protocol": "shadowsocks",
      "settings": {
        "servers": [
          {
            "address": "212.17.195.238",
            "method": "aes-128-gcm",
            "password": "e7c42a89-8153-4cb4-bf7c-0a113d2ac6d7",
            "port": 10003
          }
        ]
      }
    },
    {
      "tag": "sg1",
      "protocol": "shadowsocks",
      "settings": {
        "servers": [
          {
            "address": "154.11.47.139",
            "method": "aes-128-gcm",
            "password": "e7c42a89-8153-4cb4-bf7c-0a113d2ac6d7",
            "port": 10003
          }
        ]
      }
    },
    {
      "tag": "kr1",
      "protocol": "shadowsocks",
      "settings": {
        "servers": [
          {
            "address": "141.56.96.109",
            "method": "aes-128-gcm",
            "password": "e7c42a89-8153-4cb4-bf7c-0a113d2ac6d7",
            "port": 50053
          }
        ]
      }
    },
    {
      "tag": "us1",
      "protocol": "shadowsocks",
      "settings": {
        "servers": [
          {
            "address": "23.241.137.34",
            "method": "aes-128-gcm",
            "password": "e7c42a89-8153-4cb4-bf7c-0a113d2ac6d7",
            "port": 10001
          }
        ]
      }
    },
    {
      "tag": "my1",
      "protocol": "shadowsocks",
      "settings": {
        "servers": [
          {
            "address": "103.121.239.214",
            "method": "aes-128-gcm",
            "password": "e7c42a89-8153-4cb4-bf7c-0a113d2ac6d7",
            "port": 10001
          }
        ]
      }
    },
    {
      "tag": "ua1",
      "protocol": "shadowsocks",
      "settings": {
        "servers": [
          {
            "address": "92.111.231.47",
            "method": "aes-128-gcm",
            "password": "e7c42a89-8153-4cb4-bf7c-0a113d2ac6d7",
            "port": 10001
          }
        ]
      }
    }
]
```

