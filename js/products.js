/**
 * products.js — Product data (sample dataset) and product-related rendering logic
 * VibeCoding Fruit Store Prototype
 */

// ============================================
// Sample Dataset: 10 Fruit Products
// ============================================
const sampleProducts = [
    {
        id: 1,
        name: "Apple",
        emoji: "🍎",
        price: 1.29,
        unit: "/lb",
        description: "Crisp and sweet red apples, perfect for snacking or baking. Grown locally with care."
    },
    {
        id: 2,
        name: "Banana",
        emoji: "🍌",
        price: 0.59,
        unit: "/lb",
        description: "Ripe yellow bananas, great source of potassium and energy."
    },
    {
        id: 3,
        name: "Orange",
        emoji: "🍊",
        price: 0.89,
        unit: "/each",
        description: "Juicy navel oranges, packed with vitamin C."
    },
    {
        id: 4,
        name: "Grapes",
        emoji: "🍇",
        price: 2.49,
        unit: "/lb",
        description: "Sweet seedless grapes, perfect for snacking or adding to salads."
    },
    {
        id: 5,
        name: "Strawberry",
        emoji: "🍓",
        price: 3.99,
        unit: "/lb",
        description: "Fresh, juicy strawberries picked at peak ripeness."
    },
    {
        id: 6,
        name: "Blueberry",
        emoji: "🫐",
        price: 4.49,
        unit: "/6oz",
        description: "Plump, antioxidant-rich blueberries, great for smoothies and baking."
    },
    {
        id: 7,
        name: "Lemon",
        emoji: "🍋",
        price: 0.69,
        unit: "/each",
        description: "Bright and tangy lemons, ideal for cooking, drinks, and garnishes."
    },
    {
        id: 8,
        name: "Peach",
        emoji: "🍑",
        price: 1.99,
        unit: "/lb",
        description: "Soft, fragrant peaches with a sweet and juicy flavor."
    },
    {
        id: 9,
        name: "Watermelon",
        emoji: "🍉",
        price: 5.99,
        unit: "/each",
        description: "Refreshing seedless watermelon, perfect for hot summer days."
    },
    {
        id: 10,
        name: "Kiwi",
        emoji: "🥝",
        price: 0.79,
        unit: "/each",
        description: "Tangy and sweet kiwi fruit with vibrant green flesh."
    }
];

// ============================================
// Product Helper Functions
// ============================================

/**
 * Get all products
 * @returns {Array} Array of product objects
 */
function getProducts() {
    return sampleProducts;
}

/**
 * Find a product by its ID
 * @param {number} id - Product ID
 * @returns {Object|undefined} Product object or undefined
 */
function getProductById(id) {
    return sampleProducts.find(p => p.id === Number(id));
}

/**
 * Format price with dollar sign and 2 decimal places
 * @param {number} price - Price value
 * @returns {string} Formatted price string
 */
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// ============================================
// Products Page Rendering
// ============================================

/**
 * Render the products grid with all product cards
 */
function renderProductsPage() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const products = getProducts();

    grid.innerHTML = products.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-emoji" 
                 onclick="navigateTo('product-detail/${product.id}')"
                 role="img" 
                 aria-label="${product.name}">
                ${product.emoji}
            </div>
            <div class="product-name" 
                 onclick="navigateTo('product-detail/${product.id}')">
                ${product.name}
            </div>
            <div class="product-price">
                ${formatPrice(product.price)} ${product.unit}
            </div>
            <div class="qty-selector">
                <label>Qty:</label>
                <button class="qty-btn" 
                        onclick="changeCardQty(${product.id}, -1)" 
                        aria-label="Decrease quantity">−</button>
                <span class="qty-value" id="qty-${product.id}">1</span>
                <button class="qty-btn" 
                        onclick="changeCardQty(${product.id}, 1)" 
                        aria-label="Increase quantity">+</button>
            </div>
            <button class="btn btn-primary" 
                    onclick="addToCartFromCard(${product.id})"
                    aria-label="Add ${product.name} to cart">
                Add to Cart 🛒
            </button>
        </div>
    `).join('');
}

/**
 * Change the quantity displayed on a product card
 * @param {number} productId - Product ID
 * @param {number} delta - Change amount (+1 or -1)
 */
function changeCardQty(productId, delta) {
    const qtyEl = document.getElementById(`qty-${productId}`);
    if (!qtyEl) return;

    let qty = parseInt(qtyEl.textContent, 10) + delta;
    qty = Math.max(1, Math.min(10, qty)); // Clamp between 1 and 10
    qtyEl.textContent = qty;
}

/**
 * Add a product to the cart from its card (using the card's qty selector)
 * @param {number} productId - Product ID
 */
function addToCartFromCard(productId) {
    const qtyEl = document.getElementById(`qty-${productId}`);
    const qty = qtyEl ? parseInt(qtyEl.textContent, 10) : 1;
    addToCart(productId, qty);

    // Reset the card quantity back to 1
    if (qtyEl) qtyEl.textContent = '1';

    // Brief visual feedback
    const card = document.querySelector(`.product-card[data-product-id="${productId}"] .btn-primary`);
    if (card) {
        const originalText = card.textContent;
        card.textContent = '✓ Added!';
        card.classList.remove('btn-primary');
        card.classList.add('btn-success');
        setTimeout(() => {
            card.textContent = originalText;
            card.classList.remove('btn-success');
            card.classList.add('btn-primary');
        }, 800);
    }
}

// ============================================
// Product Detail Page Rendering
// ============================================

/**
 * Render the product detail view for a specific product
 * @param {number} productId - Product ID
 */
function renderProductDetail(productId) {
    const container = document.getElementById('product-detail-content');
    if (!container) return;

    const product = getProductById(productId);

    if (!product) {
        container.innerHTML = `
            <div style="text-align:center; padding:40px;">
                <p>Product not found.</p>
                <a href="#products" class="back-link">← Back to Products</a>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="product-detail-emoji" role="img" aria-label="${product.name}">
            ${product.emoji}
        </div>
        <div class="product-detail-info">
            <h2>${product.name}</h2>
            <div class="detail-price">${formatPrice(product.price)} ${product.unit}</div>
            <p class="detail-description">${product.description}</p>
        </div>
    `;
}
