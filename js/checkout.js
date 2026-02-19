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
        container.innerHTML = `
            <div class="cart-empty">
                <div class="empty-icon">📋</div>
                <p>Nothing to check out — your cart is empty.</p>
                <button class="btn btn-primary" onclick="navigateTo('products')" aria-label="Go Shopping">
                    Go Shopping
                </button>
            </div>
        `;
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
 * Process the order — clears the cart and shows success message
 */
function processOrder() {
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
