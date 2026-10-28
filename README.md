# Em Học Viết Văn

Web giúp học sinh lớp 4 học viết văn theo 5 bước: chọn đề, quan sát và tìm ý, lập dàn ý, viết bài, chữa bài. AI nhận xét dùng **Gemini API** của Google.

Kiểu bài đã có: **Tả con vật**, **Tả cây cối**.

## Cách dùng

1. Mở web, bấm **Cài đặt AI**.
2. Dán API key lấy ở [aistudio.google.com](https://aistudio.google.com) (Get API key → Create API key), rồi bấm **Kiểm tra và lưu**.
3. Key chỉ lưu trên trình duyệt của máy đó và dùng chung cho mọi kiểu bài. Mỗi máy dán key một lần.

Không có key thì học sinh vẫn dùng được mọi phần, kể cả Kiểm tra nhanh. Chỉ phần "Cô AI nhận xét" cần key.

Link thẳng tới từng kiểu bài: thêm `#ta-con-vat` hoặc `#ta-cay-coi` vào cuối đường link.

## Cấu trúc

- `index.html`: khung dùng chung (các bước, trang vở, kiểm tra nhanh, gọi Gemini).
- `kieubai/*.js`: nội dung từng kiểu bài (danh sách đề, câu hỏi, từ gợi ý, câu mở đầu, đoạn mẫu, tiêu chí).

Thêm kiểu bài mới: tạo một file trong `kieubai/` rồi thêm một dòng `<script src="kieubai/....js">` trong `index.html`.
