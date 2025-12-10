// 1. Dữ liệu sản phẩm (Giả lập JSON)
// Bạn sửa đường dẫn ảnh (image) và link tiếp thị (link) tại đây
const productsData = [
    {
        id: 1,
        title: "Củ sạc Cao Cấp",
        price: 590000,
        image: "static/anker-cu-sac.jpg", 
        link: "https://shopee.vn/link-tiep-thi-cua-ban-1"
    },
    {
        id: 2,
        title: "Đồng Hồ Thông Minh Theo Dõi Sức Khỏe",
        price: 850000,
        image: "static/anker-cu-sac.jpg",
        link: "https://tiki.vn/link-tiep-thi-cua-ban-2"
    },
    {
        id: 3,
        title: "Bàn Phím Cơ Gaming LED RGB",
        price: 1200000,
        image: "static/anker-cu-sac.jpg",
        link: "https://lazada.vn/link-tiep-thi-cua-ban-3"
    },
    {
        id: 4,
        title: "Sạc Dự Phòng 20.000mAh",
        price: 350000,
        image: "static/anker-cu-sac.jpg",
        link: "https://shopee.vn/link-tiep-thi-cua-ban-4"
    },
    {
        id: 5,
        title: "Kệ Sách Gỗ Để Bàn Lắp Ghép",
        price: 150000,
        image: "static/anker-cu-sac.jpg", // Ví dụ nếu chưa có ảnh
        link: "#"
    }
];

// 2. Hàm định dạng tiền tệ (VND)
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// 3. Hàm hiển thị sản phẩm ra HTML
function renderProducts() {
    const productContainer = document.getElementById('product-list');
    
    // Xóa nội dung cũ nếu có
    productContainer.innerHTML = '';

    // Duyệt qua từng sản phẩm và tạo HTML
    productsData.forEach(product => {
        // Kiểm tra xem ảnh có tồn tại không, nếu không dùng ảnh placeholder online
        // Lưu ý: Logic này chỉ mang tính hiển thị demo, bạn nên chuẩn bị ảnh thật trong thư mục static
        const imageUrl = product.image; 

        const productHTML = `
            <div class="product-card">
                <img src="${imageUrl}" alt="${product.title}" class="product-image" onerror="this.src='https://placehold.co/600x400?text=No+Image'">
                <div class="product-info">
                    <div>
                        <h3 class="product-title">${product.title}</h3>
                        <div class="product-price">${formatCurrency(product.price)}</div>
                    </div>
                    <a href="${product.link}" target="_blank" class="btn-buy">
                        Xem Ngay
                    </a>
                </div>
            </div>
        `;

        // Chèn vào container
        productContainer.innerHTML += productHTML;
    });
}

// 4. Chạy hàm khi trang web tải xong
document.addEventListener('DOMContentLoaded', renderProducts);
