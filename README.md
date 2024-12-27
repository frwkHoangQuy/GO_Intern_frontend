# GO_Intern Frontend

## Hướng dẫn cài đặt và khởi chạy

### 1. Cài Đặt Các Gói Cần Thiết
Sử dụng lệnh sau để cài đặt các gói cần thiết:

```bash
npm install
```
### 2. Cấu Hình URL Cơ Sở
Bước 1: Tạo Thư Mục config/baseUrl.jsx
Trong thư mục src, tạo một thư mục con là config và sau đó tạo tệp baseUrl.jsx với nội dung như sau:
```js
export const baseURL = 'http://127.0.0.1:8000/';
```
- baseURL là URL của server backend Django vừa chạy, thông thường là http://127.0.0.1:8000/.

### 3. Khởi Động Ứng Dụng
Sử dụng lệnh sau để khởi động ứng dụng:
```bash
npm run dev
```