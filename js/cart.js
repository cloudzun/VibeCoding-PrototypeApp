/**
 * cart.js — Shopping cart state management and logic
 * VibeCoding Fruit Store Prototype
 */

// ============================================
// Cart State
// ============================================

/** @type {Array<{productId: number, quantity: number}>} */
let cartItems = [];

// Load cart from localStorage on init (persistence across refreshes)
(function loadCart() {
    try {
        const saved = localStorage.getItem('fruitStoreCart');
        if (saved) {
            cartItems = JSON.parse(saved);
        }
    } catch (e) {
        cartItems = [];
    }
})();

/**
 * Save cart state to localStorage
 */
function saveCart() {
    try {
        localStorage.setItem('fruitStoreCart', JSON.stringify(cartItems));
    } catch (e) {
        // Silently fail if localStorage is unavailable
    }
    updateCartBadge();
}

// ============================================
// Cart Operations
// ============================================

/**
 * Add a product to the cart.
 * If the product already exists, quantities are accumulated.
 * @param {number} productId - Product ID
 * @param {number} quantity - Quantity to add (default 1)
 */
function addToCart(productId, quantity = 1) {
    const existing = cartItems.find(item => item.productId === productId);

    if (existing) {
        existing.quantity = Math.min(existing.quantity + quantity, 99);
    } else {
        cartItems.push({ productId, quantity });
    }

    saveCart();
}

/**
 * Update the quantity of a cart item
 * @param {number} productId - Product ID
 * @param {number} newQuantity - New quantity (removed if <= 0)
 */
function updateCartItemQty(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cartItems.find(i => i.productId === productId);
    if (item) {
        item.quantity = Math.min(newQuantity, 99);
        saveCart();
    }
}

/**
 * Remove a product from the cart
 * @param {number} productId - Product ID
 */
function removeFromCart(productId) {
    cartItems = cartItems.filter(i => i.productId !== productId);
    saveCart();
}

/**
 * Clear all items from the cart
 */
function clearCart() {
    cartItems = [];
    saveCart();
}

/**
 * Get the current cart items with product data
 * @returns {Array<{product: Object, quantity: number}>}
 */
function getCartItemsWithProducts() {
    return cartItems
        .map(item => {
            const product = getProductById(item.productId);
            return product ? { product, quantity: item.quantity } : null;
        })
        .filter(Boolean);
}

/**
 * Get the total number of items in the cart
 * @returns {number}
 */
function getCartItemCount() {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
}

/**
 * Calculate the total price of all cart items
 * @returns {number}
 */
function getCartTotal() {
    return getCartItemsWithProducts().reduce((sum, { product, quantity }) => {
        return sum + product.price * quantity;
    }, 0);
}

// ============================================
// Cart Page Rendering
// ============================================

/**
 * Render the shopping cart page content
 */
function renderCartPage() {
    const container = document.getElementById('cart-content');
    if (!container) return;

    const items = getCartItemsWithProducts();

    // Empty state
    if (items.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <div class="empty-icon">🛒</div>
                <p>Your cart is empty.</p>
                <button class="btn btn-primary" onclick="navigateTo('products')" aria-label="Start Shopping">
                    Start Shopping
                </button>
            </div>
        `;
        return;
    }

    // Cart table
    const itemsHtml = items.map(({ product, quantity }) => `
        <div class="cart-item" data-product-id="${product.id}">
            <div class="cart-item-name">
                <span class="item-emoji">${product.emoji}</span>
                ${product.name}
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" 
                        onclick="handleCartQtyChange(${product.id}, -1)" 
                        aria-label="Decrease quantity of ${product.name}">−</button>
                <span class="qty-value">${quantity}</span>
                <button class="qty-btn" 
                        onclick="handleCartQtyChange(${product.id}, 1)" 
                        aria-label="Increase quantity of ${product.name}">+</button>
            </div>
            <div class="cart-item-total">${formatPrice(product.price * quantity)}</div>
            <button class="cart-remove-btn" 
                    onclick="handleCartRemove(${product.id})" 
                    aria-label="Remove ${product.name} from cart">✕</button>
        </div>
    `).join('');

    const total = getCartTotal();

    container.innerHTML = `
        <div class="cart-table">
            <div class="cart-table-header">
                <span>Product</span>
                <span>Qty</span>
                <span>Total</span>
                <span></span>
            </div>
            ${itemsHtml}
            <div class="cart-footer">
                <div class="cart-total">
                    Total: <span class="total-amount">${formatPrice(total)}</span>
                </div>
                <div class="cart-actions">
                    <button class="btn btn-secondary" onclick="navigateTo('products')" aria-label="Continue Shopping">
                        Continue Shopping
                    </button>
                    <button class="btn btn-primary" onclick="navigateTo('checkout')" aria-label="Proceed to Checkout">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Handle quantity change in the cart view
 * @param {number} productId - Product ID
 * @param {number} delta - Change amount (+1 or -1)
 */
function handleCartQtyChange(productId, delta) {
    const item = cartItems.find(i => i.productId === productId);
    if (!item) return;

    const newQty = item.quantity + delta;
    updateCartItemQty(productId, newQty);
    renderCartPage();
}

/**
 * Handle removing an item from the cart view
 * @param {number} productId - Product ID
 */
function handleCartRemove(productId) {
    removeFromCart(productId);
    renderCartPage();
}

// ============================================
// Cart Badge
// ============================================

/**
 * Update the cart item count badge in the sidebar navigation
 */
function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;

    const count = getCartItemCount();
    if (count > 0) {
        badge.textContent = count > 99 ? '99+' : count;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

// ============================================
// Toast Notifications
// ============================================

/**
 * Show a brief toast notification
 * @param {string} message - Message to display
 * @param {string} [emoji='✓'] - Emoji icon prefix
 */
function showToast(message, emoji = '✓') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${emoji}</span> ${message}`;
    container.appendChild(toast);

    // Auto-remove after animation
    setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 2500);
}

// Initialize badge on load
document.addEventListener('DOMContentLoaded', updateCartBadge);
