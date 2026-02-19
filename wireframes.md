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

### Small Screen Layout (stacked):
```
┌──────┬───────────────────────────┐
│  🍊  │                           │
│  Pr  │   ← Back to Products      │
│  PD  │   ────────────────────    │
│  SC  │                           │
│  Co  │        🍎                 │
│      │      (5rem)               │
│      │                           │
│      │   Apple                   │
│      │   $1.29 /lb               │
│      │                           │
│      │   Crisp and sweet red     │
│      │   apples, perfect for     │
│      │   snacking or baking.     │
│      │   Grown locally with care.│
│      │                           │
└──────┴───────────────────────────┘
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
