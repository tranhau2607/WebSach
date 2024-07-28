// Hàm kiểm tra đăng nhập
function checkLogin() {
    const userData = sessionStorage.getItem('userData');
    return userData ? true : false;
}


function displayCartItems() {
    // Lấy danh sách sản phẩm từ sessionStorage
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));

    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    const isLoggedIn = checkLogin();

    // Kiểm tra xem giỏ hàng có sản phẩm không
    if (cartItems && cartItems.length > 0) {
        const cartItemsElement = document.getElementById('cartItems');

        let totalPrice = 0;
        let totalPriceAll = 0;
        // Tạo HTML để hiển thị danh sách sản phẩm trong giỏ hàng
        let cartHTML = '';
        cartItems.forEach(item => {

            totalPrice += item.product.price_new * item.quantity;
            totalPriceAll = totalPrice + 5000;
            cartHTML += `
            <tr class="proucts_cart">
                <td>
                    <div class="cart-info">
                        <div class="checksp">
                            <input type="checkbox" checked="checked">
                        </div>
                            <a hef="chitiet.html" >
                                <img src="${item.product.img}" alt="${item.product.name}">
                            </a>
                        <div>
                            <p>${item.product.name}</p>
                        </div>
                    </div>
                </td>
                <td class="soluong"><input type="number" value="${item.quantity}" min="1" max="5"></td>
                <td class="price">${item.product.price_new} VNĐ</td>
                <td class="delete"><button class="removeItemBtn" data-id="${item.product.id}"><i class="fa-solid fa-trash-can"></i></button></td>
            </tr>
            `;
        });

        // Hiển thị danh sách sản phẩm trong giỏ hàng trên trang HTML
        cartItemsElement.innerHTML = cartHTML;
        // Hiển thị tổng số lượng và tổng tiền

        document.getElementById('totalPrice').textContent = totalPrice.toFixed(1) + ' VNĐ';
        document.getElementById('totalPriceAll').textContent = totalPriceAll.toFixed(1) + ' VNĐ';

        // Nếu người dùng đã đăng nhập, hiển thị form thanh toán
        if (isLoggedIn) {
            document.getElementById('checkoutForm').style.display = 'block';
            document.getElementById('cart').style.display = 'block';
        } else {
            // Hiện thông báo khi giỏ hàng trống
            document.getElementById('emptyCartLoginMessage').style.display = 'block';

            document.getElementById('emptyCartMessage').style.display = 'none';
            // Nếu người dùng chưa đăng nhập, ẩn form thanh toán
            document.getElementById('checkoutForm').style.display = 'none';
            document.getElementById('totalQuantity').style.display = 'none';
            // Ẩn bảng hiển thị giỏ hàng
            document.getElementById('cart').style.display = 'none';
        }

        // Ẩn thông báo
        document.getElementById('emptyCartMessage').style.display = 'none';

    } else {
        // Hiện thông báo khi giỏ hàng trống
        document.getElementById('emptyCartMessage').style.display = 'block';
        // Ẩn form
        document.getElementById('checkoutForm').style.display = 'none';
        // Ẩn bảng hiển thị giỏ hàng
        document.getElementById('cart').style.display = 'none';

    }
    // Xử lý sự kiện khi người dùng xóa sản phẩm khỏi giỏ hàng
    const removeItemButtons = document.querySelectorAll('.removeItemBtn');
    removeItemButtons.forEach(removeItemBtn => {
        removeItemBtn.addEventListener('click', () => {
            const productId = parseInt(removeItemBtn.dataset.id);
            if (isLoggedIn) {
                removeItemFromCart(productId);

            } else {
                // Hiển thị thông báo nếu người dùng chưa đăng nhập
                alert("Bạn cần đăng nhập để xóa sản phẩm khỏi giỏ hàng.");
                window.location.href = 'login.html';
            }
        });
    });

    // Gọi hàm hiển thị tổng số lượng sản phẩm trong giỏ hàng
    updateCartQuantityDisplay();
}

window.addEventListener('DOMContentLoaded', displayCartItems);



// Hàm xóa sản phẩm khỏi giỏ hàng
function removeItemFromCart(productId) {
    if (checkLogin()) {
        // Lấy danh sách sản phẩm từ sessionStorage
        let cartItems = JSON.parse(sessionStorage.getItem('cartItems'));

        // Kiểm tra xem sản phẩm có tồn tại trong giỏ hàng không
        const index = cartItems.findIndex(item => item.product.id === productId);

        if (index !== -1) {
            // Nếu sản phẩm tồn tại, xóa sản phẩm khỏi giỏ hàng
            cartItems.splice(index, 1);

            // Lưu danh sách sản phẩm mới vào sessionStorage
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Hiển thị thông báo cho người dùng
            alert('Sản phẩm đã được xóa khỏi giỏ hàng.');

            // Cập nhật lại hiển thị giỏ hàng
            displayCartItems();

            // Nếu không còn sản phẩm trong giỏ hàng, ẩn form
            if (cartItems.length === 0) {
                document.getElementById('checkoutForm').style.display = 'none';
                document.getElementById('emptyCartMessage').style.display = 'block';
                document.getElementById('cart').style.display = 'none';
            }
        } else {
            // Nếu sản phẩm không tồn tại trong giỏ hàng, hiển thị thông báo
            alert('Sản phẩm không tồn tại trong giỏ hàng.');
        }
    } else {
        // Hiển thị thông báo nếu người dùng chưa đăng nhập
        alert("Bạn cần đăng nhập để thực hiện thao tác này.");
    }
    updateCartQuantityDisplay();
}


//Xóa tất cả
function clearCart() {
    if (checkLogin()) {// Xóa danh sách sản phẩm khỏi sessionStorage
        sessionStorage.removeItem('cartItems');
        updateCartQuantityDisplay();
        // Hiển thị thông báo hoặc thực hiện hành động khác tùy thuộc vào yêu cầu của bạn
        alert("Bạn cần xóa tất cả sản phẩm khỏi giỏ hàng.");
        // Hiện thông báo khi giỏ hàng trống
        document.getElementById('emptyCartLoginMessage').style.display = 'none';
        // Ẩn bảng hiển thị giỏ hàng
        document.getElementById('cart').style.display = 'none';
        document.getElementById('emptyCartMessage').style.display = 'block';
        // Nếu người dùng chưa đăng nhập, ẩn form thanh toán
        document.getElementById('checkoutForm').style.display = 'none';
        document.getElementById('totalQuantity').style.display = 'none';
    } else {
        // Hiển thị thông báo nếu người dùng chưa đăng nhập
        alert("Bạn cần đăng nhập để thực hiện thao tác này.");
    }
}

// Gắn sự kiện click cho nút "Xóa tất cả sản phẩm"
const clearCartButton = document.getElementById('clearCartBtn');
clearCartButton.addEventListener('click', () => {
    // Gọi hàm để xóa tất cả sản phẩm
    clearCart();
});


function updateCartQuantityDisplay() {
    const isLoggedIn = checkLogin();
    const totalQuantityElement = document.querySelector('.totalQuantity');

    if (!isLoggedIn) {
        // Nếu người dùng không đăng nhập, ẩn số lượng sản phẩm
        totalQuantityElement.style.display = 'none';
    } else {
        // Nếu người dùng đăng nhập, hiển thị số lượng sản phẩm (hoặc thực hiện logic hiển thị số lượng sản phẩm tại đây)
        totalQuantityElement.style.display = 'inline'; // hoặc 'block' tùy thuộc vào loại phần tử bạn đang sử dụng
    }
    // Lấy danh sách sản phẩm từ sessionStorage
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));

    // Tính tổng số lượng trong giỏ hàng
    let totalQuantity = 0;
    if (cartItems && cartItems.length > 0) {
        cartItems.forEach(item => {
            totalQuantity += item.quantity;
        });
    }

    // Hiển thị tổng số lượng trên các trang
    const cartQuantityElements = document.querySelectorAll('.totalQuantity');
    cartQuantityElements.forEach(element => {
        element.textContent = totalQuantity;
    });
}
