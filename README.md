# 🍊 VibeCoding 水果商城原型应用

一个轻量级的纯客户端水果商城原型 Web 应用，采用 **氛围编程（Vibe Coding）** 工作流构建 —— 由 GitHub Copilot Agent 根据 PRD（产品需求文档）和线框图自动生成代码。

---

## 📋 项目概述

本项目演示了水果商城的基本在线购物流程（浏览商品、查看详情、管理购物车、结算下单）。这是一个 **静态原型**，完全使用原生 HTML、CSS 和 JavaScript 构建 —— 无框架、无构建工具、无后端。

本应用按照 [Microsoft Learn GitHub Copilot 开发实验室](https://github.com/MicrosoftLearning/mslearn-github-copilot-dev/blob/main/Instructions/Labs/LAB_AK_06_vibe_coding_prototype_ecommerce_app.md) 中提出的 **氛围编程** 方法进行开发。

---

## 🚀 快速开始

### 前置条件

- 现代浏览器（Chrome、Firefox 或 Edge 最新版）
- 无需服务器、构建工具或包管理器

### 运行应用

1. 克隆或下载本仓库：
   ```bash
   git clone https://github.com/<你的用户名>/VibeCoding-PrototypeApp.git
   ```
2. 直接在浏览器中打开 `index.html` 文件：
   ```bash
   # Windows
   start index.html

   # macOS
   open index.html

   # Linux
   xdg-open index.html
   ```
3. 应用加载后默认显示 **商品列表（Products）** 页面。

---

## 📁 项目结构

```
VibeCoding-PrototypeApp/
├── index.html          # 主入口文件（SPA 外壳）
├── css/
│   └── styles.css      # 全局样式
├── js/
│   ├── app.js          # 应用入口、路由与导航逻辑
│   ├── products.js     # 商品数据（含示例数据集）与商品相关逻辑
│   ├── cart.js         # 购物车状态管理与逻辑
│   └── checkout.js     # 结算页逻辑
├── PRD.md              # 产品需求文档
├── wireframes.md       # 低保真线框图
└── README.md           # 本文件
```

---

## 🛒 功能说明

### 页面

| 页面 | 路由 | 描述 |
|------|------|------|
| **商品列表** | `#products` | 以网格形式展示 10 种水果商品卡片，包含 Emoji 图片、价格、数量选择器和"加入购物车"按钮 |
| **商品详情** | `#product-detail/{id}` | 展示单个商品的完整信息：大尺寸 Emoji、名称、描述、单价 |
| **购物车** | `#cart` | 已选商品列表，支持修改数量、移除商品、实时总价计算，以及空购物车状态提示 |
| **结算** | `#checkout` | 订单摘要，包含"Process Order"按钮；下单成功后显示确认信息并清空购物车 |

### 导航系统

- **左侧固定导航菜单**，垂直排列所有页面链接
- 基于 Hash 路由（`window.location.hash`），支持浏览器前进/后退
- **自适应折叠**：当浏览器宽度 < 300px 时，导航菜单自动折叠为 1–2 个字母缩写（如："Pr"、"PD"、"SC"、"Co"）
- 当前活动页面在导航中高亮显示

### 购物车功能

- 支持选择数量（1–10）添加商品
- 重复添加同一商品时数量累加，而非新增条目
- 可修改已购商品数量或移除单件商品
- 实时计算购物车总价
- 可选：通过 `localStorage` 实现刷新页面后数据持久化

---

## 🍎 示例数据

应用内置 **10 种水果商品**，使用 Emoji 作为商品图片：

| Emoji | 名称 | 单价 | 计量单位 |
|-------|------|------|----------|
| 🍎 | Apple（苹果） | $1.29 | /lb（磅） |
| 🍌 | Banana（香蕉） | $0.59 | /lb（磅） |
| 🍊 | Orange（橙子） | $0.89 | /each（个） |
| 🍇 | Grapes（葡萄） | $2.49 | /lb（磅） |
| 🍓 | Strawberry（草莓） | $3.99 | /lb（磅） |
| 🫐 | Blueberry（蓝莓） | $4.49 | /6oz（6盎司） |
| 🍋 | Lemon（柠檬） | $0.69 | /each（个） |
| 🍑 | Peach（桃子） | $1.99 | /lb（磅） |
| 🍉 | Watermelon（西瓜） | $5.99 | /each（个） |
| 🥝 | Kiwi（猕猴桃） | $0.79 | /each（个） |

---

## 🎨 设计规范

### 配色方案

| 用途 | 颜色 |
|------|------|
| 主色调 | `#2563EB`（蓝色） |
| 辅助色 | `#F59E0B`（琥珀色/橙黄色） |
| 背景色 | `#F9FAFB`（浅灰白） |
| 卡片背景 | `#FFFFFF`（白色） |
| 主文字色 | `#111827`（深色） |
| 次文字色 | `#6B7280`（灰色） |

### 排版

- 系统字体栈：`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- 商品卡片 Emoji 字号：`3rem`
- 详情页 Emoji 字号：`5rem`

---

## 🔄 氛围编程工作流

本项目采用 **氛围编程（Vibe Coding）** 方法论构建：

### 第一阶段：创建初始原型

1. **定义需求** —— 编写完整的产品需求文档（[PRD.md](PRD.md)），涵盖所有功能性和非功能性需求。
2. **设计线框图** —— 创建低保真线框图（[wireframes.md](wireframes.md)），描绘所有页面和导航状态。
3. **用 Copilot 生成代码** —— 在 VS Code 中使用 GitHub Copilot Agent 模式，根据 PRD 和线框图生成初始代码：
   - 将 PRD 和线框图作为上下文提供给 Copilot
   - 让 Copilot 搭建项目结构、HTML、CSS 和 JavaScript
   - 审查并接受生成的代码

### 第二阶段：细化完善原型

4. **测试与迭代** —— 在浏览器中打开应用，测试所有用户流程，发现问题。
5. **用 Copilot 优化** —— 通过后续提示修复缺陷、改进样式、增强功能：
   - 修复导航问题
   - 改善自适应布局行为
   - 打磨视觉设计和交互
   - 补充缺失功能或边界场景处理
6. **验证验收标准** —— 确认验收清单中的所有项目均通过。

---

## ✅ 验收标准

- [ ] 应用可直接打开 `index.html` 在浏览器中运行，无需任何构建或服务器
- [ ] Products 页正确展示所有 10 种水果商品，包含 Emoji、名称、单价和数量选择器
- [ ] 点击商品可导航至 ProductDetails 页，详情页信息完整（Emoji、名称、描述、单价）
- [ ] 购物车功能完整：添加（带数量）、修改数量、移除商品、总价计算
- [ ] Checkout 页展示订单摘要；点击"Process Order"后显示成功提示并清空购物车
- [ ] 左侧导航菜单正常工作，可在所有页面间导航，支持 Hash 路由和浏览器前后退
- [ ] 导航菜单在浏览器宽度低于 300px 时自动折叠为 1–2 个字母缩写
- [ ] 用户界面可自动缩放适应桌面端和手机端屏幕
- [ ] 商品图片均使用 Emoji 表情符号，无外部图片依赖
- [ ] 所有代码使用原生 HTML、CSS、JavaScript，无外部依赖
- [ ] 不包含任何后端功能（无用户认证、支付处理、数据库集成）

---

## 📚 参考资料

- [实验：氛围编程原型电商应用 — 创建初始原型](https://github.com/MicrosoftLearning/mslearn-github-copilot-dev/blob/main/Instructions/Labs/LAB_AK_06_vibe_coding_prototype_ecommerce_app.md#create-an-initial-prototype-app)
- [实验：氛围编程原型电商应用 — 细化完善原型](https://github.com/MicrosoftLearning/mslearn-github-copilot-dev/blob/main/Instructions/Labs/LAB_AK_06_vibe_coding_prototype_ecommerce_app.md#refine-your-prototype-app)

---

## 📄 许可证

本项目仅用于教育和演示目的。

---

*版本：1.0 | 创建日期：2026-02-19*
