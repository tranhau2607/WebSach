//----------------------------THAY ĐOẠN NÀY ĐỂ CHẠY DB-------------------------------------------///
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH8pIfJiOHW92DlT92FB76U85-LgoO_vQ",
  authDomain: "webbansach-2afdd.firebaseapp.com",
  databaseURL: "https://webbansach-2afdd-default-rtdb.firebaseio.com",
  projectId: "webbansach-2afdd",
  storageBucket: "webbansach-2afdd.appspot.com",
  messagingSenderId: "620161721923",
  appId: "1:620161721923:web:12de6dfd4473a0247156f6",
  measurementId: "G-15S0DZ52HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//_______________________________________________________________________________//

//------------------KHÔNG THAY ĐỔI----------------------

import { getDatabase, ref, push, get, set } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const db = getDatabase();

// Hàm kiểm tra đăng nhập
function checkLogin() {
    const userData = sessionStorage.getItem('userData');
    return userData ? true : false;
}

// Lắng nghe sự kiện submit của form
const checkoutForm = document.getElementById('checkoutForm2');
checkoutForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form
    const isLoggedIn = checkLogin();
    if (!isLoggedIn) {
        alert(`Bạn chưa đăng nhập, vui lòng đăng nhập trước!`);
        // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
        window.location.href = 'login.html';
        return; // Dừng xử lý tiếp theo
    }
    try {
        // Lấy số lượng đơn hàng hiện tại từ cơ sở dữ liệu Firebase
        const orderCountRef = ref(db, 'orderCount');
        let currentOrderCount = 0;

        const snapshot = await get(orderCountRef);
        if (snapshot.exists()) {
            currentOrderCount = snapshot.val();
        }

        // Tăng số lượng đơn hàng lên một
        const newOrderCount = currentOrderCount + 1;

        // Lưu số lượng đơn hàng mới vào cơ sở dữ liệu
        await set(orderCountRef, newOrderCount);

        // Lấy thông tin từ các trường nhập liệu trong form
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const paymentMethodElement  = document.getElementById('paymentMethod');
        const paymentMethod = paymentMethodElement.options[paymentMethodElement.selectedIndex].innerText;
        // Lấy danh sách sản phẩm từ sessionStorage
        const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));

        // Khởi tạo biến orderData và thêm thông tin đơn hàng vào
        let orderData = {
            orderId: newOrderCount, // Mã đơn hàng
            fullName: fullName,
            email: email,
            address: address,
            phoneNumber: phoneNumber,
            paymentMethod: paymentMethod
        };

        // Kiểm tra xem giỏ hàng có sản phẩm không
        if (cartItems && cartItems.length > 0) {
            // Tạo một mảng chứa thông tin sản phẩm trong giỏ hàng
            const products = cartItems.map(item => ({
                productId: item.product.id,
                productName: item.product.name,
                quantity: item.quantity,
                price: item.product.price_new
            }));

            // Thêm mảng sản phẩm vào đối tượng orderData
            orderData.products = products;
        }
        
        // Thực hiện gửi dữ liệu đơn hàng lên Firebase
        const ordersRef = ref(db, 'orders');
        push(ordersRef, orderData)
            .then(() => {
                // Thanh toán thành công, bạn có thể thực hiện các hành động sau đây:
                // - Hiển thị thông báo thành công với mã đơn hàng
                alert(`Đơn hàng của bạn có mã: ${orderData.orderId}`);
                sessionStorage.removeItem('cartItems'); // Xóa dữ liệu giỏ hàng
                window.location.href = 'sanpham.html';
            })
            .catch(error => {
                // Xử lý lỗi nếu có
                console.error('Error sending order:', error);
                // Hiển thị thông báo lỗi cho người dùng
                alert('Đã có lỗi xảy ra khi gửi đơn hàng. Vui lòng thử lại sau.');
            });
    } catch (error) {
        console.error('Error getting order count:', error);
    }
});