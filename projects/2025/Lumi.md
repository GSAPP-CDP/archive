---
layout: project
title: Lumi – AI Group Travel Assistant
author: "Yuchao Ma"
year: 2025
image: /img/2025/lumi/cover.jpg
links:
  - text: Live Demo
    url: https://lumi-demo.netlify.app/
  - text: GitHub Repo
    url: https://github.com/mychmly/lumi
---

![Cover](/img/2025/lumi/cover.jpg)

## TODO – content coming

## Background

![Early Concept](/img/2025/lumi/bg-1.jpg)

### Inspiration
一次与四位好友共赴日本的七日自由行，让我深刻体会到多人旅行的沟通摩擦：聊天群里关于拉面名店、打卡圣地和交通票券的信息瞬间被新消息淹没；行程中，有人流连拍照，有人催促赶路，“临时领队”疲于协调地图、时间与情绪。于是我萌生了 Lumi 的构想——让一位懂位置、懂偏好、懂节奏的 AI 助手来主动推送集合提醒、导航与情绪缓冲，把繁琐协调交给机器，让同伴们专注享受旅程本身。

### User Research
通过 93 份调查问卷与 5 组深度访谈，我们将多人出行的核心痛点归结为五点：行程规划意见常有分歧，前期就难以迅速统一；多成员实时沟通成本高，信息在各聊天工具中反复淹没；途中临时调整行程流程复杂，需要频繁重新查票、导航与时间表；协调不同偏好与限制困难（步行距离、饮食禁忌、预算等），易导致情绪摩擦；以及 团队关键信息在成员间对齐滞后，常出现有人未及时收到最新集合或路线更改。Lumi 的功能设计正是针对这五大痛点，旨在让 AI 实时撮合决策、同步信息，并降低沟通负担。

![Pain Points Map](/img/2025/lumi/bg-2.jpg)

- Different backgrounds
- Different habits
- Conflicts and disagreements

![Opportunity Gap](/img/2025/lumi/bg-3.jpg)

### Anachronistic Brainstorming

旅行的本质是「放松与自我表达」——每位成员都希望按照自己的节奏与兴趣体验目的地。当强烈的自我意识在同一行程中碰撞，却缺乏达成共识的机制，差异的影响就会被无限放大，最终消耗了本应用于享受旅程的精力。

因此，优秀的导游（或协调者）在专业讲解之外，最重要的价值是**促成一段“临时共识”，并在旅途中持续扮演协调者**：既引入所有人都能接受的决策基线，又在分歧出现时快速收敛意见，让团队始终保持顺畅而愉悦的节奏。

## Product Design

### Core Functions

- Communication Management
  Lumi 通过快速投票 + AI 推荐，在成员意见分歧时即时生成折中方案，并自动推送集合、迟到催促与路线再规划，让团队无需吵闹即可用最低沟通成本达成共识。

- Proactive Service
  基于实时位置、天气与排队时长，Lumi 主动调整行程顺序、推送备选路线，并把酒店入住、门票验证等操作串成一键式工作流，把繁琐决策和跨 App 操作交给 AI。

- Information Sharing
  集合时间、交通变更与个性化路线通过统一信息广播和多用户同步地图同时送达每位成员，所有行程修改都会版本化记录，确保团队始终看到同一份“最新且唯一”的旅程信息。

![UI](/img/2025/lumi/pd-1.jpg)

### Communication Management

![Chat Modes](/img/2025/lumi/pd-2.jpg)

- 当成员想单独询问路线、换乘或用餐建议时，可直接私聊 Lumi。用户发出的信息先进入 Prompt Manager，与系统默认导游指令合并后交给大语言模型生成答复，再由 Lumi 以导游身份返回。当事人得到即时、个性化的行程指导，其他队友不会被打扰，确保私密需求与全队节奏两不耽误。
- 如果某成员需要把想法或提醒同步给队友，只需在群聊中“@Lumi 转达”。Prompt Manager 会把原话与指令模板一并发送给模型，生成一条以 Lumi 导游口吻撰写、已翻译并格式化的通知。最终消息由 Lumi 广播给目标成员或全队；在接收者视角，内容完全来自导游 Lumi，而非原发送者，从而保持语言一致、语气统一，避免误解并降低沟通成本。

![Chat demo](/img/2025/lumi/pd-3.gif)

### Information Sharing

![Travel Page](/img/2025/lumi/pd-4.jpg)

在 Travel Page 界面，Lumi 将团队位置与行程信息整合进一张共享地图，并通过三大核心卡片实时服务整个队伍：① Information Broadcast——在早餐、集合等关键节点自动弹出提示卡，推送全员位置、剩余步行时间和表情状态，让所有成员一目了然 「队伍在哪里、还差谁未到」。② Traffic Information——结合实时路况与步行/交通模式，动态更新路线、距离和预计到达时间；当突发堵塞或延误时，会立即给出替代方案并提醒领队调整节奏。③ Navigation & Schedule——在地图底部生成当日行程概要，语义化描述下一站活动并询问团队意向，成员可直接在卡片内反馈；Lumi 收集意见后自动优化路线并同步至每个人的 Travel Page。通过这三个层次的信息流，Travel Page 让团队始终共享同一份、实时更新的“行动剧本”，显著降低沟通成本并提升行程效率与体验。

### Proactive Service: LLM + Geographic Information Service

![LLM Map](/img/2025/lumi/pd-5.jpg)

在 Lumi 的地理信息服务中，GPT-4o LLM、Apple MapKit 和 iOS 快捷指令被组织成一条自洽的「理解 → 规划 → 执行 → 反馈」链路：当用户在 HomeView 聊天界面输入“从哥大步行去 MoMA 要多久？”之类的自然语言请求时，前端会把文本、实时坐标与环境元数据封装进四段式 Prompt（系统规则-场景上下文-工具声明-用户消息），其中工具声明区公开一份统一的 JSON-Schema，例如 findRoute(destination, mode)。GPTService 将该 Prompt 发送到 OpenAI 并启用 Function-Calling，使 GPT-4o 能在需要地理计算时直接输出结构化调用，如 {"name":"findRoute","arguments":{"destination":"MoMA","mode":"walking"}}。收到此 JSON 后，Router 会把任务交给 MapManager；MapManager 再调 MapKit 的 MKDirections 与 MKMapSnapshotter 计算路径、预计时间与静态地图快照，并将结果压缩回 eta、polyline、snapshotURL 等字段返回给 GPT-4o，让模型把这些数据润色成易读的文本或富卡片 UI。

当用户点选卡片上的「一键导航」按钮时，同一组坐标与交通方式会被写入 iOS 快捷指令（App Intent），系统随即跳转到原生地图或 CarPlay，实现零延迟导航；若用户下次通过 Siri 直接说“导航去 MoMA”，缓存过的 Intent Suggestion 还能绕过 LLM，快速复用最近一次路径。整个闭环依赖 Combine 事件流解耦，各层只通过 JSON-Schema 交互：LLM 负责语义理解与语言生成，MapKit 提供权威地理算法，快捷指令承担系统级动作入口；再配合高频路线缓存、多线程预抓取快照与 MapKit 故障兜底文本指令，构成了 Lumi 轻量、可扩展又用户友好的 GIS 服务。

![LLM Map](/img/2025/lumi/pd-6.gif)

![LLM Map](/img/2025/lumi/pd-7.gif)

![LLM Map](/img/2025/lumi/pd-8.gif)





  



