---
title: "谷歌给 AI 智能体立了新规矩：2027 年 2 月起，碰 Gmail 和云端硬盘得走 MCP"
date: 2026-11-28
updated: 2026-11-28
tags:
  - 谷歌
  - Workspace
  - MCP
  - AI智能体
categories:
  - AI资讯
cover: https://xiaa.dpdns.org/file/1795827847365_media-generation-cover-google-workspace-mcp-202-0-a4c42a7d-0944-463c-811c-e36f37086ea7.webp
description: "谷歌 Workspace 的 MCP 服务器和 CLI 正式可用，2027 年 2 月 1 日起 AI 智能体须走官方通道访问 Gmail、云端硬盘等数据，免费档每天 5000 次请求。"
---
最近用 AI 工具连过 Gmail 或者 Google 云端硬盘的人，可能都收到过类似的提示：某某助手想读你的邮件、翻你的文档。谷歌 11 月 25 日在 Workspace 官方博客上发了一篇公告，把这件事的规矩重新写了一遍：Workspace 的 MCP 服务器和命令行工具正式可用了，而且从 2027 年 2 月 1 日起，AI 智能体再想碰 Workspace 里的数据，就得走这两条官方通道，直接调 REST 接口的老路会被限流。

先说清楚这事跟谁有关。如果你只是个人用户，平时在 Gmail 里收收邮件、用用云端硬盘，这次变化基本碰不到你。公告面向的是 Workspace 的组织客户和开发者——也就是那些给公司搭 AI 助手、写自动化脚本的人。不过，市面上不少第三方 AI 工具就是靠调 Workspace 的接口给你读邮件、整理日程的，它们的接法要改，最终还是会落到普通用户头上。

## 改了什么

这次谷歌一次推了两样东西，都是正式版（GA）。

一个是 Workspace MCP 服务器，建在开放的 MCP 标准上，云端和网页端的智能体可以直接连，覆盖 Gmail、Google 云端硬盘、Docs、Sheets、Slides、日历、Chat 和 Tasks，Keep 还在路上。另一个是 Workspace CLI，给本地智能体、终端工作流和容器沙箱用的，输出结构化 JSON，走有作用域限制的 OAuth 登录。

配套的还有一份新的《Workspace AI Tools Addendum》（AI 工具附录），等于一份使用守则。核心就一条：AI 智能体必须通过 MCP 服务器或 CLI 访问 Workspace 数据，不再直接调用 REST API。技术强制从 2027 年 2 月 1 日开始。注意一个细节：2 月 1 日不是把 REST 的门直接关上，而是从那天起，还走 REST 的智能体会被压到 Standard 档的配额，不管你原来选了哪个档。想拿更高的智能体用量，就得切到 MCP，再开 Scaled 档。

## 免费档和收费档怎么分

用量分两档。Standard 档免费，MCP 服务器每个项目、每个产品每天 5000 次请求，另有每分钟的速率限制。谷歌的说法是，超过 99% 的活跃开发者现在都在 Standard 档以内，继续用不用多花钱。

Scaled 档从 2027 年 4 月 1 日起计费。按操作类型分 Light、Medium、Plus、Premium 四档，每 1000 次请求 0.10 到 0.50 美元。Gmail、日历、云端硬盘这三项在 Scaled 档上没有每日免费额度，从第一次成功请求就开始计费。

另外还有几条配套管控：外部智能体必须用专用的 OAuth 客户端 ID，配最小权限的作用域；限时审批功能即将上线；用量配额按项目算。这些都是冲着一件事去的——让管理员能看清、能管住哪些智能体在动公司的数据。

## 谷歌为什么要这么改

官方博客的说法很直白：REST 接口是为确定性的应用调用设计的，调用什么、返回什么都固定；而智能体的工作方式是动态的，会自己发现工具、自己决定下一步。MCP 和 CLI 是给这种动态工作流准备的，而且返回的是在 Workspace 边界内合成好的摘要，附带用户确认、审计日志和管理控制。

翻译成人话：以前智能体是自己拿着钥匙到处开门，现在谷歌在门口设了两个统一的接待处，进出都要登记。智能体能少拿原始数据，管理员能多一双眼睛。对企业来说，这是好事；对开发者来说，意味着 2027 年 2 月 1 日之前得把接法改掉，不然用量会被压到免费档的水平。

## 普通用户现在要做什么

其实不多。如果你公司在用第三方 AI 工具连 Workspace，可以去问一句供应商：你们切到 MCP 了吗，2 月 1 日之前能切完吗。如果你在用的是谷歌自家的 Gemini，它本来就在 Workspace 里面，这次变化不影响。

还有一个时间点值得记一下：2027 年 4 月 1 日 Scaled 档开始计费。之前免费试着玩的团队，到时候要看一眼账单规则，别让某个跑起来的智能体在不知不觉中开始按次收费。

这件事还有一层意思。MCP 是 Anthropic 去年底推出的开放标准，谷歌这次把它扶正成 Workspace 的官方通道，等于给这个标准又加了一个大厂背书。智能体怎么安全地碰企业数据，正在从各家自己摸索，变成有统一规矩可循。这对用智能体的人是好事：规矩清楚了，敢用的场景才多得起来。

来源：Google Workspace 官方博客《Built for trust and control: New AI agent protections and developer tools in Google Workspace》（2026-11-25）；Google Cloud 官方博客《Deploying agents safely in your enterprise》（2026-11-25）；Google Workspace Updates 博客周报（2026-11-27）。配额与计费细节以谷歌开发者文档实时页面为准。