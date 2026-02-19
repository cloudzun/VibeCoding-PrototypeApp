/**
 * app.js — Application entry point, router, and navigation logic
 * VibeCoding Fruit Store Prototype
 */

// ============================================
// Router
// ============================================

/**
 * Parse the current hash and return route info
 * @returns {{ page: string, param: string|null }}
 */
function parseRoute() {
    const hash = window.location.hash.slice(1) || 'products'; // Remove '#', default to 'products'
    const parts = hash.split('/');
    return {
        page: parts[0],
        param: parts[1] || null
    };
}

/**
 * Navigate to a given page by updating the hash
 * @param {string} route - Route string (e.g. 'products', 'product-detail/3', 'cart', 'checkout')
 */
function navigateTo(route) {
    window.location.hash = '#' + route;
}

// ============================================
// Page Display
// ============================================

/** All page section IDs */
const PAGE_IDS = ['products', 'product-detail', 'cart', 'checkout'];

/**
 * Show the specified page and hide all others.
 * Also triggers page-specific rendering.
 * @param {string} page - Page identifier
 * @param {string|null} param - Optional route parameter (e.g. product ID)
 */
function showPage(page, param) {
    // Hide all pages
    PAGE_IDS.forEach(id => {
        const section = document.getElementById('page-' + id);
        if (section) {
            section.classList.add('hidden');
        }
    });

    // Show the target page
    const target = document.getElementById('page-' + page);
    if (target) {
        target.classList.remove('hidden');
    } else {
        // Fallback to products page if route is invalid
        const fallback = document.getElementById('page-products');
        if (fallback) fallback.classList.remove('hidden');
        page = 'products';
    }

    // Update active nav item
    updateActiveNav(page);

    // Render page-specific content
    switch (page) {
        case 'products':
            renderProductsPage();
            break;
        case 'product-detail':
            renderProductDetail(param);
            break;
        case 'cart':
            renderCartPage();
            break;
        case 'checkout':
            renderCheckoutPage();
            break;
    }

    // Scroll main content to top on page change
    const main = document.getElementById('main-content');
    if (main) main.scrollTop = 0;
}

// ============================================
// Active Navigation Highlight
// ============================================

/**
 * Update the active state on sidebar nav items
 * @param {string} activePage - Current page identifier
 */
function updateActiveNav(activePage) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const itemPage = item.getAttribute('data-page');
        if (itemPage === activePage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// ============================================
// Hash Change Listener
// ============================================

/**
 * Handle hash change events (browser back/forward, programmatic navigation)
 */
function onHashChange() {
    const { page, param } = parseRoute();
    showPage(page, param);
}

// Listen for hash changes
window.addEventListener('hashchange', onHashChange);

// ============================================
// Initialization
// ============================================

/**
 * Initialize the application on DOM ready
 */
document.addEventListener('DOMContentLoaded', function () {
    // Set initial route
    if (!window.location.hash) {
        window.location.hash = '#products';
    } else {
        // Trigger routing for the current hash
        onHashChange();
    }
});
