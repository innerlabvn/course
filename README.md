# Innerlab Courses

Website chính thức giới thiệu các chương trình học của **Innerlab**.

- **Website:** https://innerlabvn.github.io/course/
- **GitHub:** https://github.com/innerlabvn/course
- **Khảo sát Innerlab:** https://innerlabvn.github.io/you-ai-survey/

## Trạng thái

Giai đoạn giới thiệu khóa học: giao diện hoàn chỉnh, có tìm kiếm/lọc khóa học, xem chi tiết và biểu mẫu đăng ký quan tâm. Sáu chương trình hiện là nội dung dự kiến, chưa công bố học phí, giảng viên, lịch khai giảng hoặc cổng thanh toán.

**Lưu ý:** `COURSE_API_URL` trong `app.js` vẫn để trống. Biểu mẫu chỉ giúp sao chép thông tin do người dùng tự nhập, không gửi lưu tự động lên máy chủ. Khi có Google Sheets riêng, xem `Code.gs` và thiết lập Web App để thu đăng ký.

## Triển khai GitHub Pages

Repo có workflow `.github/workflows/publish.yml`, tự triển khai từ nhánh `main` qua GitHub Actions. Nếu chưa xuất bản, vào **Settings → Pages → Build and deployment → Source: GitHub Actions**. Sau đó vào tab **Actions** và kiểm tra workflow.

## Cập nhật khóa học

Chỉnh mảng `COURSES` trong `app.js`; sửa bố cục trong `index.html`, phong cách trong `styles.css`, logo tại `assets/innerlab-mark.svg`.

## Kết nối Google Sheets

1. Tạo bảng Google Sheets riêng cho chương trình khóa học (không dùng nhầm bảng khảo sát).
2. Extensions → Apps Script → dán `Code.gs`.
3. Thay `COURSE_SPREADSHEET_ID` bằng ID của bảng mới.
4. Chạy `testConnection`, xác nhận quyền rồi Deploy as Web App (Execute as: Me; Access: Anyone).
5. Điền URL `/exec` vào `const COURSE_API_URL` trong `app.js`.
6. Gửi đăng ký thử và đối chiếu dữ liệu trong Sheet trước khi sử dụng công khai.

Chế độ gửi `no-cors` không thể xác nhận phản hồi lưu thành công từ Sheets. Xem xét hệ thống có phản hồi xác thực khi mở bán quy mô lớn.
