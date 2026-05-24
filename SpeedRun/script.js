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

    // AI Chat Widget Logic (AIEO/GEO Implementation)
    const chatToggle = document.getElementById('chat-toggle');
    const chatWidget = document.getElementById('chat-widget');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
    const sendChat = document.getElementById('send-chat');
    const chatMessages = document.getElementById('chat-messages');

    if (chatToggle && chatWidget) {
        chatToggle.addEventListener('click', () => chatWidget.classList.toggle('active'));
        closeChat.addEventListener('click', () => chatWidget.classList.remove('active'));

        const addMessage = (text, isAi = false) => {
            const msg = document.createElement('div');
            msg.className = `message ${isAi ? 'ai-message' : 'user-message'}`;
            msg.textContent = text;
            chatMessages.appendChild(msg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        };

        const handleChat = () => {
            const text = chatInput.value.trim().toLowerCase();
            if (!text) return;

            addMessage(chatInput.value);
            chatInput.value = '';

            // AI Simulation Logic (GEO/AIEO Response nâng cấp)
            setTimeout(() => {
                let response = "Ní ơi, câu này hơi khó với tôi. Ní thử hỏi về 'giày chạy bộ', 'khuyến mãi', 'chính sách đổi trả' hoặc 'giá rẻ' xem sao!";
                
                if (text.includes('5km') || text.includes('chạy bộ') || text.includes('marathon')) {
                    response = "Dựa trên dữ liệu AIEO của SpeedRun: Để chạy bộ (5km - 42km), ní nên chọn Nike Pegasus hoặc Nike React Infinity. Những đôi này có hỗ trợ phản hồi lực cực tốt!";
                    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
                } 
                else if (text.includes('thể thao') || text.includes('gym') || text.includes('tập luyện')) {
                    response = "Dòng giày tập luyện (training) như Nike Metcon 7 rất hợp cho ní đó. Hoặc ní xem qua các mẫu Air Max đa năng nhé!";
                    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
                }
                else if (text.includes('giá') || text.includes('bao nhiêu') || text.includes('rẻ nhất')) {
                    response = "Hiện tại mẫu Nike Zoom Pegasus đang có giá tốt nhất chỉ 1.990.000₫ (giảm 30%). Ní xem ở mục Sản phẩm nổi bật nha!";
                    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
                }
                else if (text.includes('khuyến mãi') || text.includes('sale') || text.includes('giảm giá')) {
                    response = "Tin vui cho ní cực! SpeedRun đang có chương trình 'ƯU ĐÃI ĐẶC BIỆT' giảm đến 40% cho toàn bộ cửa hàng đó ạ.";
                    document.querySelector('.promo-banner').scrollIntoView({ behavior: 'smooth' });
                }
                else if (text.includes('đổi trả') || text.includes('trả hàng') || text.includes('đổi hàng')) {
                    response = "Ní yên tâm, SpeedRun hỗ trợ đổi trả trong vòng 7 ngày nếu còn nguyên tem mác và chưa qua sử dụng ạ!";
                    document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
                }
                else if (text.includes('giao hàng') || text.includes('bao lâu') || text.includes('ship')) {
                    response = "Ship nội thành TP.HCM chỉ trong 24h thôi ní. Các tỉnh khác thì từ 2-4 ngày là ní nhận được giày rồi!";
                    document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
                }
                else if (text.includes('chính hãng') || text.includes('fake') || text.includes('thật')) {
                    response = "SpeedRun cam kết 100% hàng chính hãng nhập khẩu, phát hiện hàng giả chúng tôi đền gấp 10 lần giá trị luôn ạ!";
                }
                else if (text.includes('aeo') || text.includes('aieo') || text.includes('geo')) {
                    response = "AEO/GEO là kỹ thuật tối ưu để các AI như tôi hiểu được website này. Nhờ vậy tôi mới tư vấn cho ní mượt như thế này nè!";
                }

                addMessage(response, true);
            }, 600);
        };

        sendChat.addEventListener('click', handleChat);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleChat();
        });
    }
});