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

![Chat demo](/img/2025/lumi/pd-3.gif)  # 带 "!" 才是图片 ✔︎



  



