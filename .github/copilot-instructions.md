# Copilot Instructions — VibeCoding Fruit Store Prototype

> **This file provides GitHub Copilot with the full project context.**
> It concatenates the Product Requirements Document (PRD) and wireframes
> so Copilot can generate accurate, consistent code for this project.

---

# 产品需求文档（PRD）
# 水果商城原型应用 — VibeCoding Fruit Store Prototype

---

## 1. 概述（Overview）

### 1.1 项目名称
VibeCoding 水果商城原型应用（VibeCoding Fruit Store Prototype）

### 1.2 项目目的
构建一个轻量级的客户端水果商城原型Web应用，面向有兴趣在线订购水果产品的消费者。该原型用于演示基本的购物流程概念（商品浏览、详情查看、购物车管理、结算），采用氛围编程（Vibe Coding）流程，由 GitHub Copilot Agent 根据本 PRD 自动生成代码。

### 1.3 项目范围
- **包含**：水果商品浏览、商品详情查看、购物车管理、结算流程的前端原型实现，使用静态示例数据。
- **不包含**：后端服务、用户认证、支付处理、数据库集成。本应用为静态原型，仅用于演示基本概念。

---

## 2. 目标用户（Target Users）

| 用户角色 | 描述 |
|---------|------|
| 在线购物者 | 对订购水果产品感兴趣的消费者，希望浏览水果、查看详情、加入购物车并完成下单 |
| 产品评审人员 | 通过原型评估购物流程的交互设计和用户体验 |
| 开发团队 | 以原型为基础进行后续迭代开发 |

---

## 3. 技术要求（Technical Requirements）

### 3.1 技术栈
| 层级 | 技术 |
|------|------|
| 结构 | HTML5 |
| 样式 | CSS3 |
| 逻辑 | 原生 JavaScript（ES6+） |

### 3.2 技术约束
- **纯客户端应用**：所有逻辑在浏览器端运行，不依赖任何后端服务或构建工具。
- **无后端功能**：不包含用户认证、支付处理、数据库集成等后端功能。本应用为静态原型。
- **无外部框架**：不使用 React、Vue、Angular 等前端框架，也不使用 jQuery。
- **无包管理器**：不使用 npm、yarn 等包管理工具。
- **单页应用（SPA）模式**：通过 JavaScript 实现页面视图切换，所有页面内容在 `index.html` 中通过显示/隐藏或动态渲染实现导航，无需多个 HTML 文件。
- **自适应缩放**：用户界面应能自动缩放以在大屏幕（桌面端）和小屏幕（手机端）上正确显示，但不需要完全精细或精心打磨的响应式设计。
- **浏览器兼容性**：支持最新版 Chrome、Firefox、Edge。
- **商品图片**：使用 Emoji 表情符号代表商品，无需外部图片资源。

### 3.3 项目结构
```
VibeCoding-PrototypeApp/
├── index.html          # 主入口文件
├── css/
│   └── styles.css      # 全局样式
└── js/
    ├── app.js          # 应用入口、路由与导航逻辑
    ├── products.js     # 商品数据（含示例数据集）与商品相关逻辑
    ├── cart.js         # 购物车状态管理与逻辑
    └── checkout.js     # 结算页逻辑
```

---

## 4. 功能需求（Functional Requirements）

### 4.1 页面定义

#### 4.1.1 商品列表页（Products Page）
- **视图标识**：`#products`
- **功能**：
  - 以卡片网格形式展示所有水果商品，每张卡片显示：商品 Emoji 图片、商品名称、单价（含计量单位，如 "/lb"、"/each"、"/oz" 等）。
  - 每张商品卡片包含 **数量选择器**（默认为 1，最小 1，最大 10），用户可直接在列表页选择所需数量。
  - 每张商品卡片包含"加入购物车"按钮（Add to Cart），点击后将商品按所选数量添加到购物车。
  - 每张商品卡片可点击商品名称或图片导航至该商品的详情页。
- **布局**：网格布局，自动缩放适应不同屏幕宽度。

#### 4.1.2 商品详情页（ProductDetails Page）
- **视图标识**：`#product-detail/{id}`
- **功能**：
  - 显示选中商品的完整信息：Emoji 图片（大尺寸显示）、商品名称、详细描述、单价（含计量单位）。
  - 包含"返回商品列表"导航链接。
- **布局**：左侧 Emoji 大图 + 右侧信息区，小屏幕时上下排列。

#### 4.1.3 购物车页（ShoppingCart Page）
- **视图标识**：`#cart`
- **功能**：
  - 列表展示购物车中所有商品，每行显示：商品名称、数量、该商品的总价（单价 × 数量）。
  - 支持修改每件商品的数量（更新按钮或增减按钮）。
  - 支持从购物车中移除单件商品。
  - 实时显示购物车总价。
  - 购物车为空时显示空状态提示及"去购物"按钮。
  - 包含"去结算"按钮（Proceed to Checkout），导航至结算页。
- **布局**：列表式布局，底部显示总价和操作按钮。

#### 4.1.4 结算页（Checkout Page）
- **视图标识**：`#checkout`
- **功能**：
  - 展示订单摘要：商品名称、数量、单价。
  - 清晰显示订单总价。
  - 提供 **"Process Order" 按钮**：
    - 点击后显示订单成功确认提示（弹窗或内嵌成功消息）。
    - 成功提交后清空购物车。
  - 包含"返回购物车"链接。
  - **注意**：本原型不包含收货地址表单或支付方式选择，仅展示订单摘要并提供模拟下单功能。
- **布局**：订单摘要列表 + 底部总价和 Process Order 按钮。

### 4.2 导航系统（Navigation System）

- **左侧导航菜单**（所有视图通用，固定在屏幕左侧）：
  - 应用名称/Logo 位于导航菜单顶部。
  - 导航链接（上下垂直排列）：Products、ProductDetails、ShoppingCart、Checkout。
  - 每个导航项包含图标和文字标签。
  - **折叠行为**：当浏览器显示宽度低于 **300px** 时，导航菜单自动折叠，仅显示每个导航项的 **1-2 个字母缩写**（如：Products → "Pr"、ShoppingCart → "SC"、Checkout → "Co"）。宽度恢复时自动展开显示完整文字。
- **导航方式**：基于 Hash 路由（`window.location.hash`），支持以下路由：
  | 路由 | 视图 |
  |------|------|
  | `#products` | 商品列表页 |
  | `#product-detail/{id}` | 商品详情页 |
  | `#cart` | 购物车页 |
  | `#checkout` | 结算页 |
- **默认路由**：应用启动时默认显示 `#products`。
- **浏览器前进/后退**：监听 `hashchange` 事件，支持浏览器前进后退按钮。
- **页面布局**：左侧导航菜单固定宽度，右侧为主内容区域（占据剩余宽度）。

### 4.3 购物车状态管理

- 购物车数据存储在 JavaScript 内存变量中（数组对象）。
- 可选：使用 `localStorage` 实现刷新页面后购物车数据持久化。
- 购物车操作：添加商品、修改数量、删除商品、清空购物车、计算总价。

---

## 5. 示例数据集（Sample Data）

提供 **10 种水果商品**，使用 Emoji 作为商品图片。数据结构如下：

```json
{
  "id": 1,
  "name": "Apple",
  "emoji": "🍎",
  "price": 1.29,
  "unit": "/lb",
  "description": "Crisp and sweet red apples, perfect for snacking or baking. Grown locally with care."
}
```

### 商品清单：

| ID | Emoji | 名称 | 单价 | 单位 | 描述 |
|----|-------|------|------|------|------|
| 1 | 🍎 | Apple | $1.29 | /lb | Crisp and sweet red apples, perfect for snacking or baking. |
| 2 | 🍌 | Banana | $0.59 | /lb | Ripe yellow bananas, great source of potassium and energy. |
| 3 | 🍊 | Orange | $0.89 | /each | Juicy navel oranges, packed with vitamin C. |
| 4 | 🍇 | Grapes | $2.49 | /lb | Sweet seedless grapes, perfect for snacking or adding to salads. |
| 5 | 🍓 | Strawberry | $3.99 | /lb | Fresh, juicy strawberries picked at peak ripeness. |
| 6 | 🫐 | Blueberry | $4.49 | /6oz | Plump, antioxidant-rich blueberries, great for smoothies and baking. |
| 7 | 🍋 | Lemon | $0.69 | /each | Bright and tangy lemons, ideal for cooking, drinks, and garnishes. |
| 8 | 🍑 | Peach | $1.99 | /lb | Soft, fragrant peaches with a sweet and juicy flavor. |
| 9 | 🍉 | Watermelon | $5.99 | /each | Refreshing seedless watermelon, perfect for hot summer days. |
| 10 | 🥝 | Kiwi | $0.79 | /each | Tangy and sweet kiwi fruit with vibrant green flesh. |

---

## 6. 基础样式设计（Styling Guidelines）

### 6.1 设计原则
- 简洁、现代、干净的视觉风格。
- 以功能可用为优先，界面应视觉美观，但不需要完全响应式或精心打磨。
- 商品 Emoji 图片应以较大字号显示（如 3rem - 5rem），确保视觉突出。

### 6.2 配色方案
| 用途 | 颜色 |
|------|------|
| 主色调 | `#2563EB`（蓝色） |
| 辅助色 | `#F59E0B`（橙黄色，用于高亮和角标） |
| 背景色 | `#F9FAFB`（浅灰白） |
| 卡片背景 | `#FFFFFF` |
| 文字主色 | `#111827` |
| 文字次色 | `#6B7280` |
| 按钮悬停 | 主色调加深 10% |

### 6.3 排版
- 主字体：系统默认无衬线字体（`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`）
- 商品标题：`1.1rem`，加粗
- 商品价格：`1rem`，主色调颜色，加粗
- 正文：`0.95rem`

### 6.4 组件样式
- **卡片**：白色背景、圆角 `8px`、轻微阴影 `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`
- **按钮**：圆角 `6px`、主色调背景、白色文字、hover 时加深
- **左侧导航菜单**：固定在屏幕左侧、白色背景、右侧细线分隔、导航项垂直排列、当前活动项高亮显示
- **Emoji 图片**：商品卡片中 Emoji 字号 `3rem`，详情页 Emoji 字号 `5rem`

---

## 7. 用例（Use Cases）

### UC-01：浏览商品列表
1. 用户打开应用，默认进入 Products 页。
2. 用户看到所有 10 种水果商品以卡片网格展示，每张卡片显示 Emoji、名称、单价。
3. 用户在卡片上选择所需数量。
4. 用户点击"加入购物车"将商品按所选数量添加到购物车。

### UC-02：查看商品详情
1. 用户在 Products 页点击某种水果的名称或 Emoji 图片。
2. 页面导航到 ProductDetails 页，展示该水果的大尺寸 Emoji、名称、详细描述、单价。
3. 用户点击"返回商品列表"链接返回 Products 页。

### UC-03：添加商品到购物车
1. 用户在 Products 页选择数量并点击"Add to Cart"按钮。
2. 商品按所选数量加入购物车。
3. 若购物车中已有该商品，数量累加而非重复添加。

### UC-04：管理购物车
1. 用户通过左侧导航菜单进入 ShoppingCart 页面。
2. 用户查看已添加的所有商品（名称、数量、商品总价）。
3. 用户修改某件商品数量，总价实时更新。
4. 用户移除某件商品。
5. 购物车清空后显示空状态及"去购物"引导。

### UC-05：完成结算
1. 用户在 ShoppingCart 页点击"Proceed to Checkout"进入 Checkout 页。
2. 用户查看订单摘要：商品名称、数量、价格、总价。
3. 用户点击"Process Order"按钮。
4. 系统显示订单成功提示并清空购物车。

### UC-06：使用左侧导航在页面间切换
1. 用户通过左侧导航菜单在 Products、ProductDetails、ShoppingCart、Checkout 页面之间自由切换。
2. 用户使用浏览器前进/后退按钮进行页面导航。
3. 当浏览器宽度低于 300px 时，导航菜单自动折叠为缩写字母显示。

---

## 8. 非功能性需求（Non-Functional Requirements）

| 类别 | 要求 |
|------|------|
| 性能 | 页面切换应即时完成（< 100ms 感知延迟） |
| 可访问性 | 按钮和链接应有清晰的 `aria-label`；图片应有 `alt` 属性 |
| 代码质量 | 代码结构清晰、有适当注释、变量命名具有语义性 |
| 可维护性 | 模块化组织（HTML/CSS/JS 分离，JS 按功能模块拆分） |

---

## 9. 验收标准（Acceptance Criteria）

- [ ] 应用可通过直接打开 `index.html` 在浏览器中运行，无需任何构建或服务器。
- [ ] Products 页正确展示所有 10 种水果商品，包含 Emoji、名称、单价和数量选择器。
- [ ] 点击商品可导航至 ProductDetails 页，详情页信息完整（Emoji、名称、描述、单价）。
- [ ] 购物车功能完整：添加（带数量）、修改数量、移除商品、总价计算。
- [ ] Checkout 页展示订单摘要（商品名称、数量、价格、总价），点击"Process Order"后显示成功提示并清空购物车。
- [ ] 左侧导航菜单正常工作，可在所有页面间导航，支持 Hash 路由和浏览器前后退。
- [ ] 导航菜单在浏览器宽度低于 300px 时自动折叠为 1-2 个字母缩写。
- [ ] 用户界面可自动缩放适应桌面端和手机端屏幕。
- [ ] 商品图片均使用 Emoji 表情符号，无外部图片依赖。
- [ ] 所有代码使用原生 HTML、CSS、JavaScript，无外部依赖。
- [ ] 不包含任何后端功能（无用户认证、支付处理、数据库集成）。

---

## 10. 术语表（Glossary）

| 术语 | 定义 |
|------|------|
| SPA | Single Page Application，单页应用 |
| Hash 路由 | 基于 URL 中 `#` 后的部分实现页面视图切换 |
| Emoji 图片 | 使用 Unicode Emoji 表情符号作为商品的视觉表示，无需外部图片文件 |
| 单位计价 | 每种商品按不同计量单位定价，如 /lb（磅）、/each（个）、/oz（盎司） |
| 折叠导航 | 导航菜单在窄屏下自动缩短为字母缩写的行为 |

---

*本 PRD 版本：2.0 | 创建日期：2026-02-19 | 更新日期：2026-02-19*

---
---

# Low-Fidelity Wireframes
# VibeCoding Fruit Store Prototype

---

## 1. Overall Page Layout (Desktop — Expanded Nav)

```
┌──────────────────────────────────────────────────────────────────────┐
│ Browser Window                                                       │
├────────────┬─────────────────────────────────────────────────────────┤
│            │                                                         │
│  Left-Side │              Main Content Area                          │
│  Navigation│          (changes per active view)                      │
│  Menu      │                                                         │
│  (fixed)   │                                                         │
│            │                                                         │
│  ~200px    │              remaining width                            │
│            │                                                         │
├────────────┴─────────────────────────────────────────────────────────┤
└──────────────────────────────────────────────────────────────────────┘
```

---

## 2. Left-Side Navigation — Expanded (width ≥ 300px)

```
┌─────────────────────┐
│  🍊 Fruit Store     │  ← App logo/name (clickable → #products)
│                     │
├─────────────────────┤
│                     │
│  🛒  Products       │  ← #products        (active = highlighted)
│                     │
│  📄  ProductDetails │  ← #product-detail
│                     │
│  🧺  ShoppingCart   │  ← #cart
│                     │
│  💳  Checkout       │  ← #checkout
│                     │
├─────────────────────┤
│                     │
│                     │  ← empty space / footer
│                     │
└─────────────────────┘
       ~200px
```

**Active state**: The current page's nav item has a highlighted background color (primary blue) with white text.

---

## 3. Left-Side Navigation — Collapsed (width < 300px)

```
┌──────┐
│  🍊  │  ← App logo only (no text)
│      │
├──────┤
│      │
│  Pr  │  ← Products (abbreviated)
│      │
│  PD  │  ← ProductDetails (abbreviated)
│      │
│  SC  │  ← ShoppingCart (abbreviated)
│      │
│  Co  │  ← Checkout (abbreviated)
│      │
├──────┤
│      │
└──────┘
 ~50px
```

**Behavior**: Icons are hidden; only 1–2 letter abbreviations are shown. The nav width shrinks from ~200px to ~50px. The main content area expands to fill remaining space.

---

## 4. Products Page (#products)

```
┌────────────┬─────────────────────────────────────────────────────────┐
│            │                                                         │
│  🍊 Fruit  │   Products                                             │
│   Store    │   ─────────────────────────────────────────────         │
│            │                                                         │
│  🛒 Products│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  📄 Product.│  │     🍎      │  │     🍌      │  │     🍊      │   │
│  🧺 Shopping│  │   Apple     │  │   Banana    │  │   Orange    │   │
│  💳 Checkout│  │  $1.29/lb   │  │  $0.59/lb   │  │  $0.89/each │   │
│            │  │             │  │             │  │             │   │
│            │  │  Qty: [1 ▼] │  │  Qty: [1 ▼] │  │  Qty: [1 ▼] │   │
│            │  │             │  │             │  │             │   │
│            │  │[Add to Cart]│  │[Add to Cart]│  │[Add to Cart]│   │
│            │  └─────────────┘  └─────────────┘  └─────────────┘   │
│            │                                                         │
│            │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│            │  │     🍇      │  │     🍓      │  │     🫐      │   │
│            │  │   Grapes    │  │  Strawberry  │  │  Blueberry  │   │
│            │  │  $2.49/lb   │  │  $3.99/lb   │  │  $4.49/6oz  │   │
│            │  │             │  │             │  │             │   │
│            │  │  Qty: [1 ▼] │  │  Qty: [1 ▼] │  │  Qty: [1 ▼] │   │
│            │  │             │  │             │  │             │   │
│            │  │[Add to Cart]│  │[Add to Cart]│  │[Add to Cart]│   │
│            │  └─────────────┘  └─────────────┘  └─────────────┘   │
│            │                                                         │
│            │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│            │  │     🍋      │  │     🍑      │  │     🍉      │   │
│            │  │   Lemon     │  │   Peach     │  │ Watermelon  │   │
│            │  │  $0.69/each │  │  $1.99/lb   │  │  $5.99/each │   │
│            │  │             │  │             │  │             │   │
│            │  │  Qty: [1 ▼] │  │  Qty: [1 ▼] │  │  Qty: [1 ▼] │   │
│            │  │             │  │             │  │             │   │
│            │  │[Add to Cart]│  │[Add to Cart]│  │[Add to Cart]│   │
│            │  └─────────────┘  └─────────────┘  └─────────────┘   │
│            │                                                         │
│            │  ┌─────────────┐                                       │
│            │  │     🥝      │                                       │
│            │  │    Kiwi     │                                       │
│            │  │  $0.79/each │                                       │
│            │  │             │                                       │
│            │  │  Qty: [1 ▼] │                                       │
│            │  │             │                                       │
│            │  │[Add to Cart]│                                       │
│            │  └─────────────┘                                       │
│            │                                                         │
└────────────┴─────────────────────────────────────────────────────────┘
```

### Product Card Detail:
```
┌───────────────────────┐
│                       │
│         🍎            │  ← Emoji (3rem), clickable → ProductDetails
│                       │
│      Apple            │  ← Product name (bold), clickable → ProductDetails
│    $1.29 /lb          │  ← Price + unit
│                       │
│    Qty:  [ - ] 1 [ + ]│  ← Quantity selector (min 1, max 10)
│                       │
│   [ Add to Cart  🛒 ] │  ← Primary action button
│                       │
└───────────────────────┘
```

---

## 5. ProductDetails Page (#product-detail/{id})

```
┌────────────┬─────────────────────────────────────────────────────────┐
│            │                                                         │
│  🍊 Fruit  │   ← Back to Products                                   │
│   Store    │   ──────────────────────────────────────────            │
│            │                                                         │
│  🛒 Products│  ┌──────────────────────────────────────────────┐      │
│  📄 Product.│  │                                              │      │
│  🧺 Shopping│  │   ┌──────────┐   Product Name                │      │
│  💳 Checkout│  │   │          │   ──────────────              │      │
│            │  │   │    🍎    │                                │      │
│            │  │   │  (5rem)  │   Price: $1.29 /lb            │      │
│            │  │   │          │                                │      │
│            │  │   └──────────┘   Description:                │      │
│            │  │                   Crisp and sweet red apples, │      │
│            │  │                   perfect for snacking or     │      │
│            │  │                   baking. Grown locally       │      │
│            │  │                   with care.                  │      │
│            │  │                                              │      │
│            │  └──────────────────────────────────────────────┘      │
│            │                                                         │
└────────────┴─────────────────────────────────────────────────────────┘
```

---

## 6. ShoppingCart Page (#cart)

### With Items:
```
┌────────────┬─────────────────────────────────────────────────────────┐
│            │                                                         │
│  🍊 Fruit  │   Shopping Cart                                        │
│   Store    │   ─────────────────────────────────────────────         │
│            │                                                         │
│  🛒 Products│  ┌─────────────────────────────────────────────┐       │
│  📄 Product.│  │  Product        Qty          Total          │       │
│  🧺 Shopping│  │  ─────────────────────────────────────────  │       │
│  💳 Checkout│  │                                             │       │
│            │  │  🍎 Apple      [ - ] 3 [ + ]    $3.87  [✕]  │       │
│            │  │                                             │       │
│            │  │  🍌 Banana     [ - ] 2 [ + ]    $1.18  [✕]  │       │
│            │  │                                             │       │
│            │  │  🍉 Watermelon [ - ] 1 [ + ]    $5.99  [✕]  │       │
│            │  │                                             │       │
│            │  │  ─────────────────────────────────────────  │       │
│            │  │                                             │       │
│            │  │                    Total:       $11.04       │       │
│            │  │                                             │       │
│            │  │  [Continue Shopping]   [Proceed to Checkout] │       │
│            │  │                                             │       │
│            │  └─────────────────────────────────────────────┘       │
│            │                                                         │
└────────────┴─────────────────────────────────────────────────────────┘
```

### Empty State:
```
┌────────────┬─────────────────────────────────────────────────────────┐
│            │                                                         │
│  🍊 Fruit  │   Shopping Cart                                        │
│   Store    │   ─────────────────────────────────────────────         │
│            │                                                         │
│  🛒 Products│                                                        │
│  📄 Product.│           🛒                                           │
│  🧺 Shopping│                                                        │
│  💳 Checkout│     Your cart is empty.                                │
│            │                                                         │
│            │     [ Start Shopping ]                                  │
│            │                                                         │
└────────────┴─────────────────────────────────────────────────────────┘
```

---

## 7. Checkout Page (#checkout)

### Order Summary:
```
┌────────────┬─────────────────────────────────────────────────────────┐
│            │                                                         │
│  🍊 Fruit  │   Checkout                                             │
│   Store    │   ─────────────────────────────────────────────         │
│            │                                                         │
│  🛒 Products│  ┌─────────────────────────────────────────────┐       │
│  📄 Product.│  │            Order Summary                    │       │
│  🧺 Shopping│  │  ─────────────────────────────────────────  │       │
│  💳 Checkout│  │                                             │       │
│            │  │  Product        Qty    Price    Subtotal    │       │
│            │  │  ─────────────────────────────────────────  │       │
│            │  │  🍎 Apple        3    $1.29/lb    $3.87     │       │
│            │  │  🍌 Banana       2    $0.59/lb    $1.18     │       │
│            │  │  🍉 Watermelon   1    $5.99/ea    $5.99     │       │
│            │  │                                             │       │
│            │  │  ─────────────────────────────────────────  │       │
│            │  │                                             │       │
│            │  │              Order Total:     $11.04        │       │
│            │  │                                             │       │
│            │  │  ─────────────────────────────────────────  │       │
│            │  │                                             │       │
│            │  │  [← Back to Cart]     [ Process Order  ✓ ]  │       │
│            │  │                                             │       │
│            │  └─────────────────────────────────────────────┘       │
│            │                                                         │
└────────────┴─────────────────────────────────────────────────────────┘
```

### After "Process Order" — Success State:
```
┌────────────┬─────────────────────────────────────────────────────────┐
│            │                                                         │
│  🍊 Fruit  │   Checkout                                             │
│   Store    │   ─────────────────────────────────────────────         │
│            │                                                         │
│  🛒 Products│                                                        │
│  📄 Product.│         ┌─────────────────────────────┐                │
│  🧺 Shopping│         │                             │                │
│  💳 Checkout│         │      ✅ Order Placed!       │                │
│            │         │                             │                │
│            │         │  Thank you for your order.  │                │
│            │         │  Your fruits are on the way!│                │
│            │         │                             │                │
│            │         │   [ Continue Shopping ]     │                │
│            │         │                             │                │
│            │         └─────────────────────────────┘                │
│            │                                                         │
└────────────┴─────────────────────────────────────────────────────────┘
```

---

## 8. Navigation State Comparison

```
  EXPANDED (≥ 300px)              COLLAPSED (< 300px)

┌─────────────────────┐         ┌──────┐
│  🍊 Fruit Store     │         │  🍊  │
├─────────────────────┤         ├──────┤
│  🛒  Products       │ ──────► │  Pr  │
│  📄  ProductDetails │ ──────► │  PD  │
│  🧺  ShoppingCart   │ ──────► │  SC  │
│  💳  Checkout       │ ──────► │  Co  │
├─────────────────────┤         ├──────┤
│                     │         │      │
└─────────────────────┘         └──────┘
       ~200px                    ~50px
```

---

## 9. Interaction Flow Summary

```
                    ┌──────────────┐
                    │   Products   │ ◄── Default view on app load
                    │  (#products) │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────────┐
              │ click name │ select qty     │
              │ or emoji   │ + Add to Cart  │
              ▼            │                ▼
    ┌─────────────────┐    │     ┌─────────────────┐
    │ ProductDetails  │    │     │  ShoppingCart    │
    │(#product-detail)│    │     │    (#cart)       │
    └────────┬────────┘    │     └────────┬────────┘
             │             │              │
             │ ← Back to   │              │ Proceed to
             │   Products  │              │ Checkout
             └─────────────┘              ▼
                               ┌─────────────────┐
                               │    Checkout      │
                               │   (#checkout)    │
                               └────────┬─────────┘
                                        │
                                        │ Process Order
                                        ▼
                               ┌─────────────────┐
                               │  ✅ Order        │
                               │    Placed!       │
                               │                  │
                               │[Continue Shopping]│──► back to #products
                               └─────────────────┘

    ◄──── Left-side nav allows jumping between any page at any time ────►
```

---

*Wireframes version: 1.0 | Created: 2026-02-19*
