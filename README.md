# [Bài tập] Trang Web Tĩnh Giới Thiệu Về Sách (Book Showcase Landing Page)

> **Khóa học:** CodeGym Web Development  
> **Học viên:** HueAn14  
> **Tham khảo mẫu:** [https://github.com/hoanv7169/bootstrap-demo](https://github.com/hoanv7169/bootstrap-demo)  
> **Repository GitHub bài làm:** [https://github.com/HueAn14/bootstrap-book-website](https://github.com/HueAn14/bootstrap-book-website)

---

## 🎯 Mục tiêu dự án
Xây dựng một website tĩnh giới thiệu sách (Book Landing Page) chuyên nghiệp, đáp ứng đầy đủ 7 thành phần cấu trúc theo đúng yêu cầu đề bài:
1. **Header, Book Overview:** Thanh điều hướng cố định (Sticky Navbar) với logo, các liên kết điều hướng và khối tổng quan cuốn sách (Hero Overview) kèm hiệu ứng bìa sách 3D.
2. **Author:** Phần giới thiệu tác giả (ảnh chân dung, tiểu sử chuyên môn, số năm kinh nghiệm, học viên và các giải thưởng).
3. **Features:** Các tính năng và giá trị nổi bật cuốn sách mang lại (Grid 6 thẻ card với icon hiện đại, hiệu ứng hover đổi màu).
4. **Prices:** Bảng giá các phiên bản sách (Ebook Kỹ thuật số, Bìa mềm in màu - Gói phổ biến nhất, Bìa cứng mạ vàng sưu tầm).
5. **Download:** Khu vực tải về bản đọc thử 3 chương đầu tiên (hỗ trợ định dạng Desktop PDF, Mobile EPUB và form nhận sách qua email).
6. **Reader’s Say:** Cảm nhận và đánh giá chân thực của độc giả (3 thẻ đánh giá với sao 5/5, thông tin người đánh giá từ các công ty công nghệ lớn).
7. **Footer:** Thông tin bản quyền, liên kết nhanh, điều khoản bảo mật, mạng xã hội và form đăng ký nhận bản tin (Newsletter).

---

## 📱 Khả năng Responsive
Giao diện được tối ưu hóa hiển thị chuẩn xác trên mọi thiết bị:
- **Desktop & Màn hình lớn (> 1200px):** Bố cục rộng rãi, hiệu ứng bìa sách 3D xoay góc tương tác.
- **Laptop & Máy tính bảng (768px - 1199px):** Tự động chuyển đổi các lưới 3-4 cột sang 2 cột đều đặn.
- **Điện thoại di động (< 768px):** Menu Navbar thu gọn thành dạng Hamburger Button, các thẻ xếp chồng dọc (stack) 100% chiều rộng, tối ưu kích thước chữ và khoảng cách bấm cho ngón tay.

---

## 🛠️ Công nghệ sử dụng
- **HTML5:** Cấu trúc ngữ nghĩa chuẩn (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- **CSS3:** Custom Variables, Gradient dải màu rực rỡ, Glassmorphism, Hiệu ứng 3D Transform, Box Shadow mềm.
- **Bootstrap 5 (CDN):** Hệ thống Grid 12 cột, Breakpoints, Responsive utilities, Components.
- **Bootstrap Icons & Font Awesome 6:** Hệ thống biểu tượng phong phú.
- **JavaScript (Vanilla JS):** Tương tác cuộn mượt (Smooth scroll), đổi màu Navbar khi cuộn, xử lý tương tác tải bản đọc thử và đăng ký email.

---

## 📁 Cấu trúc thư mục

```
bootstrap-book-website/
├── index.html              # Trang chính chứa đầy đủ 7 phần
├── css/
│   ├── style.css           # Định kiểu giao diện chính, typography, màu sắc, bóng đổ
│   └── mobile.css          # Tinh chỉnh responsive chuyên biệt cho mobile & tablet
├── js/
│   └── main.js             # Xử lý tương tác thanh cuộn, sự kiện download, form submit
├── package.json            # Thông tin dự án
└── README.md               # Báo cáo và tài liệu hướng dẫn
```

---

## 🚀 Trải nghiệm trực tiếp
Mở file `index.html` trực tiếp trên trình duyệt hoặc sử dụng Live Server trong VS Code để xem giao diện và thử nghiệm tính năng responsive.
