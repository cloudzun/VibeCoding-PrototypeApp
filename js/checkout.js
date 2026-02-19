/**
 * checkout.js — Checkout page rendering and order processing
 * VibeCoding Fruit Store Prototype
 */

// ============================================
// Checkout Page Rendering
// ============================================

/**
 * Render the checkout page content
 * Shows order summary with items, totals, and Process Order button
 */
function renderCheckoutPage() {
    const container = document.getElementById('checkout-content');
    if (!container) return;

    const items = getCartItemsWithProducts();

    // If cart is empty, redirect to cart page
    if (items.length === 0) {
        navigateTo('cart');
        return;
    }

    const total = getCartTotal();

    // Order summary table
    const itemsHtml = items.map(({ product, quantity }) => `
        <div class="checkout-item">
            <span class="item-name">
                <span class="item-emoji">${product.emoji}</span>
                ${product.name}
            </span>
            <span>× ${quantity}</span>
            <span>${formatPrice(product.price)} ${product.unit}</span>
            <span class="item-subtotal">${formatPrice(product.price * quantity)}</span>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="checkout-summary">
            <h2>Order Summary</h2>
            <div class="checkout-table">
                <div class="checkout-table-header">
                    <span>Product</span>
                    <span>Qty</span>
                    <span>Price</span>
                    <span>Subtotal</span>
                </div>
                ${itemsHtml}
            </div>
            <div class="checkout-footer">
                <div class="checkout-total">
                    <span>Order Total:</span>
                    <span class="total-amount">${formatPrice(total)}</span>
                </div>
                <div class="checkout-actions">
                    <a href="#cart" class="back-link" aria-label="Back to Cart">← Back to Cart</a>
                    <button class="btn btn-primary btn-lg" 
                            onclick="processOrder()" 
                            aria-label="Process Order">
                        Process Order
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// Order Processing
// ============================================

/**
 * Process the order — shows confirmation dialog first
 */
function processOrder() {
    showConfirmDialog(
        'Confirm Order',
        'Are you sure you want to place this order?',
        function () {
            clearCart();

            const container = document.getElementById('checkout-content');
            if (!container) return;

            container.innerHTML = `
                <div class="order-success">
                    <div class="success-icon">✅</div>
                    <h2>Order Placed Successfully!</h2>
                    <p>Thank you for your purchase. Your fresh fruits are on the way!</p>
                    <button class="btn btn-primary" 
                            onclick="navigateTo('products')" 
                            aria-label="Continue Shopping">
                        Continue Shopping
                    </button>
                </div>
            `;
        }
    );
}

/**
 * Show a confirmation dialog overlay
 * @param {string} title - Dialog title
 * @param {string} message - Dialog message
 * @param {Function} onConfirm - Callback when confirmed
 */
function showConfirmDialog(title, message, onConfirm) {
    // Remove any existing overlay
    const existing = document.querySelector('.confirm-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'confirm-overlay';
    overlay.innerHTML = `
        <div class="confirm-dialog">
            <h3>${title}</h3>
            <p>${message}</p>
            <div class="confirm-actions">
                <button class="btn btn-secondary" id="confirm-cancel" aria-label="Cancel">Cancel</button>
                <button class="btn btn-primary" id="confirm-ok" aria-label="Confirm">Confirm</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    // Handle cancel
    overlay.querySelector('#confirm-cancel').addEventListener('click', function () {
        overlay.remove();
    });

    // Handle click outside dialog
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) overlay.remove();
    });

    // Handle confirm
    overlay.querySelector('#confirm-ok').addEventListener('click', function () {
        overlay.remove();
        onConfirm();
    });
}
