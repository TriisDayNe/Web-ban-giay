document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navCenter = document.getElementById('nav-center');
    const searchInput = document.getElementById('main-search');
    const products = document.querySelectorAll('.product-card');

    // Toggle Mobile Menu
    if (mobileMenuBtn && navCenter) {
        mobileMenuBtn.addEventListener('click', () => {
            navCenter.classList.toggle('active');
            mobileMenuBtn.innerHTML = navCenter.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Simple Search Filter
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();

            // Tự động cuộn xuống khi bắt đầu gõ tìm kiếm bất kỳ từ nào
            if (term.length > 0) {
                const shopSection = document.getElementById('shop');
                if (shopSection) {
                    shopSection.scrollIntoView({ behavior: 'smooth' });
                }
            }

            products.forEach(product => {
                const name = product.querySelector('.product-name').textContent.toLowerCase();
                if (name.includes(term)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
});