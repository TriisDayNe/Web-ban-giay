# Bài tập 04: Tìm hiểu về AEO, AIEO và Kỹ thuật triển khai

## 1. AEO (Answer Engine Optimization) là gì?
AEO - Tối ưu hóa công cụ trả lời - là quá trình tối ưu hóa nội dung để các công cụ trả lời trực tiếp (như Google Featured Snippets, Siri, Alexa) có thể dễ dàng trích xuất thông tin và trả lời câu hỏi của người dùng ngay lập tức mà không cần họ phải click vào website.

### Kỹ thuật triển khai AEO trên website SpeedRun:
- **Cấu trúc lại thanh tìm kiếm:** Thay đổi placeholder từ "Tìm kiếm..." thành các câu hỏi tự nhiên như "Bạn đang tìm mẫu giày nào?" để khuyến khích ngôn ngữ hội thoại.
- **Sử dụng Dữ liệu cấu trúc (Schema Markup):** Đã thêm đoạn mã JSON-LD (LD+JSON) vào phần `<head>` để khai báo thông tin cửa hàng, địa chỉ, số điện thoại, giúp AI hiểu website là một thực thể kinh doanh thực tế.
- **Tạo phần Câu hỏi thường gặp (FAQ):** Sử dụng các thẻ `itemscope`, `itemprop` trong nội dung FAQ để AI engine dễ dàng lấy câu trả lời cho các câu hỏi phổ biến như "Giày có chính hãng không?", "Chính sách đổi trả?".

## 2. AIEO (AI Engine Optimization) là gì?
AIEO - Tối ưu hóa công cụ trí tuệ nhân tạo - là bước tiến xa hơn của SEO/AEO, tập trung vào việc làm thế nào để thông tin của bạn xuất hiện trong các câu trả lời của LLMs (Large Language Models) như ChatGPT, Google Gemini hay Microsoft Copilot.

### Kỹ thuật triển khai AIEO:
- **Tính xác thực (Authority):** Cung cấp thông tin nhất quán về thương hiệu SpeedRun trên toàn bộ website và các nền tảng social liên kết.
- **Định dạng dữ liệu thân thiện với AI:** Sử dụng các thẻ HTML5 ngữ nghĩa và đảm bảo tốc độ tải trang nhanh, giúp các bot crawl dữ liệu hiệu quả hơn.
- **Nội dung tập trung vào ý định người dùng (User Intent):** Thay vì chỉ nhắm vào từ khóa "giày đẹp", nội dung tập trung giải quyết vấn đề "làm thế nào để chọn giày chạy cho người mới".

## 3. GEO (Generative Engine Optimization) - Thực thi qua Chat Widget
GEO là quá trình tối ưu hóa để các công cụ tạo sinh (Generative AI) trích xuất và đề xuất thương hiệu.

### Kỹ thuật triển khai trên SpeedRun:
- **Tích hợp AI Chat Assistant:** Website đã thêm một widget chat mô phỏng AI. Khi người dùng hỏi các câu mang tính tư vấn (GEO intent) như "Giày nào phù hợp chạy 5km?", hệ thống không chỉ trả lời mà còn kết nối trực tiếp đến dữ liệu sản phẩm thực tế.
- **Contextual Response:** AI được huấn luyện để hiểu ngữ cảnh (ví dụ: gõ "thể thao" sẽ hiểu là người dùng đang tìm giày thể thao) và đưa ra gợi ý kèm theo hành động (tự động cuộn đến khu vực sản phẩm).
- **Trải nghiệm hội thoại:** Thay đổi cách tiếp cận từ "Tìm kiếm bằng thanh công cụ" sang "Trò chuyện với AI", giúp tăng tính cá nhân hóa và sự tin cậy - hai yếu tố cốt lõi của GEO.

## 4. Kỹ thuật đưa website lên "Mắt xanh" của Google và AI (Deployment & Discovery)
Để đạt được kết quả như trong ảnh minh chứng (Google nhận diện được 1 mục FAQ hợp lệ), website cần thực hiện các bước sau:
- **Tệp robots.txt:** Khai báo cho các con Bot (Googlebot, GPTBot) biết chúng được phép truy cập và cào dữ liệu toàn bộ website.
- **Sitemap.xml:** Bản đồ website giúp AI không bỏ sót bất kỳ trang nào, đặc biệt là các trang chứa FAQ và dữ liệu cấu trúc.
- **Hosting công khai (GitHub Pages):** Khi trang web được đưa lên một địa chỉ internet (URL) thực tế, các công cụ kiểm tra của Google mới có thể truy cập và xác nhận dữ liệu.
- **Rich Results Test:** Sử dụng công cụ của Google để kiểm tra và ép buộc các con AI cập nhật dữ liệu mới nhất từ website.

---
*Ghi chú: Bài tập này đã được áp dụng trực tiếp vào mã nguồn của website SpeedRun trong các file index.html và style.css.*
