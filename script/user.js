//-------------thay icon sau khi đăng nhập thành công
    // Kiểm tra xem có thông tin người dùng trong Session Storage không
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    // Nếu có thông tin người dùng, thực hiện thay đổi
    if (userData) {
        // Lấy phần tử chứa icon đăng nhập
        const loginButton = document.getElementById('login-btn');
        // Lấy phần tử chứa tên người dùng
        const userDisplay = document.getElementById('User');

        // Ẩn phần tử chứa icon đăng nhập
        loginButton.style.display = 'none';

        // Hiển thị tên người dùng
        userDisplay.style.display = 'inline'; // Hiển thị phần tử chứa tên người dùng
        //Đăng xuất
        const logoutBtn = document.getElementById('logoutBtn');
        logoutBtn.addEventListener('click', function () {
            // Xóa dữ liệu người dùng khỏi sessionStorage
            sessionStorage.removeItem('userData');
            alert("Bạn đã đăng xuất thành công!");
            updateCartQuantityDisplay();
        });
    }