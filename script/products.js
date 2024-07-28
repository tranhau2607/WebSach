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
import { getDatabase, ref, child, get, set } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const db = getDatabase();



// Tạo một mảng chứa danh sách sản phẩm
const products = [
    {
        id: 1,
        name: "Làm chủ tuổi 20",
        img: './image/lam-chu-tuoi-20.png',
        price_new: 100000,
        price_old: 180000,
        percent: 20,
        da_ban: '5'
    },
    {
        id: 2,
        name: "Người tập lớn",
        img: './image/nguoi-tap-lon.jpg',
        price_new: 160000,
        price_old: 128000,
        percent: 20,
        da_ban: '2,4'
    },
    {
        id: 3,
        name: "Đời ngắn đừng ngủ dài",
        img: './image/doi-ngan-dung-ngu-dai.jpg',
        price_new: 60000,
        percent: 20,
        price_old: 75000,
        da_ban: "1",
    },
    {
        id: 4,
        name: "Đi tìm lẽ sống",
        img: './image/di-tim-le-song.jpg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",

    },
    {
        id: 5,
        name: "Đừng lựa chọn an nhàn khi còn trẻ",
        img: './image/dung-lua-chon-an-nhan-khi-con-tre.jpg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    },
    {
        id: 6,
        name: "Trốn lên mái nhà để khóc",
        img: './image/tron-len-mai-nha-de-khoc.jpg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    },
    {
        id: 7,
        name: "Không nỗ lực, đừng tham vọng",
        img: './image/khong-no-luc-dung-tham-vong.jpg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    },
    {
        id: 8,
        name: "Khéo ăn nói sẽ có được thiên hạ",
        img: './image/kheo-an-noi-se-co-duoc-thien-ha.png',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    },
    {
        id: 9,
        name: "Tư duy ngược",
        img: './image/tu-duy-nguoc.jpg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    },
    {
        id: 10,
        name: "Kỷ luật bản thân",
        img: './image/ky-luat-ban-than.jpg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    },
    {
        id: 11,
        name: "Thay thái độ, đổi cuộc đời",
        img: './image/thay-thai-do-doi-cuoc-doi.jpg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    },
    {
        id: 12,
        name: "Nuôi dưỡng đứa trẻ bên trong bạn",
        img: './image/nuoi-duong-dua-tre-ben-trong-ban.jpg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    },
    {
        id: 13,
        name: "Đứa trẻ hiểu chuyện thường không có kẹo",
        img: './image/dua-tre-hieu-chuyen-thuong-khong-co-keo-an.jpg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    },
    {
        id: 14,
        name: "Trở thành phiên bản tốt hơn của chính mình",
        img: './image/tro-thanh-phien-ban-tot-hon-cua-chinh-minh.jpg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    },
    {
        id: 15,
        name: "Khi bạn đang mơ thì người khác đang nỗ lực",
        img: './image/khi-ban-dang-mo-thi-nguoi-khac-dang-no-luc.jpg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    },
    {
        id: 16,
        name: "Mỗi lần vấp ngã là một lần trưởng thành",
        img: './image/moi-lan-vap-nga-la-1-lan-truong-thanh.jpg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    },
    {
        id: 17,
        name: "Không phải là sói nhưng cũng đừng là cừu",
        img: './image/khong-phai-soi-nhung-cung-dung-la-cuu.jpg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    },
    {
        id: 18,
        name: "Thay đổi một suy nghĩ, thay đổi cả cuộc đời",
        img: './image/thay-doi-1-suy-nghi-thay-doi-ca-cuoc-doi.jpeg',
        price_new: 74000,
        price_old: 100000,
        percent: 20,
        da_ban: "2",
    }
];

//---------------------------------------------dùng để lưu sản phẩm vào DB----------------
// Lấy tham chiếu đến nút lưu từ DOM
let saveButton = document.getElementById('saveButton');

// Định nghĩa hàm xử lý sự kiện khi người dùng nhấn vào nút lưu
function saveProductsToDatabase() {
    // Lưu danh sách sản phẩm vào Firebase Realtime Database
    set(ref(db, 'products'), products)
        .then(() => {
            alert("Danh sách sản phẩm đã được lưu thành công vào Firebase Realtime Database.");
        })
        .catch((error) => {
            alert("Đã xảy ra lỗi khi lưu danh sách sản phẩm vào Firebase Realtime Database.");
        });
}

// Gắn sự kiện click vào nút lưu để gọi hàm xử lý sự kiện
saveButton.addEventListener('click', saveProductsToDatabase);
//---------------------------------------------------------------
// Hàm để lấy sản phẩm từ Firebase và cập nhật giao diện
function loadProductsFromDatabase() {
    const dbRef = ref(getDatabase());
    
    get(child(dbRef, 'products')).then((snapshot) => {
        if (snapshot.exists()) {
            products = snapshot.val(); // Lấy dữ liệu từ Firebase và gán cho biến products
            displayProducts(); // Hiển thị sản phẩm
        } else {
            console.log("Không có dữ liệu sản phẩm.");
        }
    }).catch((error) => {
        console.error("Lỗi khi lấy dữ liệu từ Firebase:", error);
    });
}

// Gọi hàm để tải dữ liệu từ Firebase khi trang được tải
window.addEventListener('DOMContentLoaded', loadProductsFromDatabase);

//--------------------------danh sách sản phẩm trang 1------------------------------

function displayProducts() {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = '';
    const first10Products = products.slice(0, 9);

    // Lặp qua từng sản phẩm và tạo phần tử HTML tương ứng
    first10Products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('store-product', 'box'); // Thêm các class để định dạng sản phẩm
        productElement.innerHTML = `
            <span class="discount-tag"> - 44%</span>
            <span class="new-tag">NEW</span>
            <div class="product-image" id="product-image">
                <img src="${product.img}" alt="Hình ảnh sản phẩm">
            </div>
            <div class="product-info">
                <h3 class="product-name" id="product-name">${product.name}</h3>

                <div class="product-price">
                    <span class="new-price">${product.price_new.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                    <span class="old-price">${product.price_old.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                </div>
                <div class="product-rating">
                    <div class="rating-stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="luot-ban">
                    Đã bán: ${product.percent}
                </div>
            </div>
            <div class="product-buttons">
                <button class="btn buy-now-btn" id="buyButton${product.id}">Xem chi tiết</button>
            </div>
                 
        `;
        productListElement.appendChild(productElement);

        // Gắn sự kiện click vào nút "MUA NGAY" của từng sản phẩm
        const buyButton = productElement.querySelector(`#buyButton${product.id}`);
        buyButton.addEventListener('click', function () {
            detailProduct(product.id);
        });
    });
}
// Gọi hàm để hiển thị danh sách sản phẩm khi trang được tải
window.addEventListener('DOMContentLoaded', displayProducts);

//--------------------------------------------------------------------------

//--------------------------danh sách sản phẩm trang 2------------------------------
function displayProducts2() {
    const productListElement = document.getElementById('productList2');
    const first10Products = products.slice(-9);

    // Lặp qua từng sản phẩm và tạo phần tử HTML tương ứng
    first10Products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('store-product', 'box'); // Thêm các class để định dạng sản phẩm
        productElement.innerHTML = `
            <div class="product-image" id="product-image">
                <img src="${product.img}" alt="Hình ảnh sản phẩm">
            </div>
            <div class="product-info">
                <h3 class="product-name" id="product-name">${product.name}</h3>

                <div class="product-price">
                    <span class="new-price">${product.price_new.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                    <span class="old-price">${product.price_old.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                </div>
                <div class="product-rating">
                    <div class="rating-stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="luot-ban">
                    Đã bán: ${product.percent}
                </div>
            </div>
            <div class="product-buttons">
                <button class="btn buy-now-btn" id="buyButton${product.id}">Xem chi tiết</button>
            </div>
        `;
        productListElement.appendChild(productElement);

        // Gắn sự kiện click vào nút "MUA NGAY" của từng sản phẩm
        const buyButton = productElement.querySelector(`#buyButton${product.id}`);
        buyButton.addEventListener('click', function () {
            detailProduct(product.id);
        });
    });
}
// Gọi hàm để hiển thị danh sách sản phẩm khi trang được tải
window.addEventListener('DOMContentLoaded', displayProducts2);
//----------------------------------------------------------------------------

//-----------------------Flash Sale------------------------------------
function displayProducts3() {
    const productListElement = document.getElementById('productList3');
    const first10Products = products.slice(0, 4);

    // Lặp qua từng sản phẩm và tạo phần tử HTML tương ứng
    first10Products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('store-product', 'box'); // Thêm các class để định dạng sản phẩm
        productElement.innerHTML = `
            <span class="discount-tag"> - 44%</span>
            <span class="new-tag">NEW</span>
            <div class="product-image" id="product-image">
                <img src="${product.img}" alt="Hình ảnh sản phẩm">
            </div>
            <div class="product-info">
                <h3 class="product-name" id="product-name">${product.name}</h3>

                <div class="product-price">
                    <span class="new-price">${product.price_new.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                    <span class="old-price">${product.price_old.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                </div>
                <div class="product-rating">
                    <div class="rating-stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="luot-ban">
                    Đã bán: ${product.percent}
                </div>
            </div>
            
            <div class="product-buttons">
                <button class="btn buy-now-btn" id="buyButton${product.id}">Xem chi tiết</button>
            </div>
            
        `;
        productListElement.appendChild(productElement);

        // Gắn sự kiện click vào nút "MUA NGAY" của từng sản phẩm
        const buyButton = productElement.querySelector(`#buyButton${product.id}`);
        buyButton.addEventListener('click', function () {
            detailProduct(product.id);
        });
    });
}
// Gọi hàm để hiển thị danh sách sản phẩm khi trang được tải
window.addEventListener('DOMContentLoaded', displayProducts3);
//----------------------------------------------------------------------------


//-----------------------Sản phẩm nổi bật------------------------------------
function displayProducts4() {
    const productListElement = document.getElementById('productList4');
    const first10Products = products.slice(5, 9);

    // Lặp qua từng sản phẩm và tạo phần tử HTML tương ứng
    first10Products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('store-product', 'box'); // Thêm các class để định dạng sản phẩm
        productElement.innerHTML = `
            <span class="discount-tag"> - 44%</span>
            <span class="new-tag">NEW</span>
            <div class="product-image" id="product-image">
                <img src="${product.img}" alt="Hình ảnh sản phẩm">
            </div>
            <div class="product-info">
                <h3 class="product-name" id="product-name">${product.name}</h3>

                <div class="product-price">
                    <span class="new-price">${product.price_new.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                    <span class="old-price">${product.price_old.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                </div>
                <div class="product-rating">
                    <div class="rating-stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="luot-ban">
                    Đã bán: ${product.percent}
                </div>
            </div>
            
            <div class="product-buttons">
                <button class="btn buy-now-btn" id="buyButton${product.id}">Xem chi tiết</button>
            </div>
            
        `;
        productListElement.appendChild(productElement);

        // Gắn sự kiện click vào nút "MUA NGAY" của từng sản phẩm
        const buyButton = productElement.querySelector(`#buyButton${product.id}`);
        buyButton.addEventListener('click', function () {
            detailProduct(product.id);
        });
    });
}
// Gọi hàm để hiển thị danh sách sản phẩm khi trang được tải
window.addEventListener('DOMContentLoaded', displayProducts4);
//----------------------------------------------------------------------------

//------------------------------chi tiet san pham-----------------------------

function detailProduct(productId) {
    // Chuyển sang trang chi tiết sản phẩm và truyền mã sản phẩm
    window.location.href = `chitietsp.html?id=${productId}`;
}

//Xem chi tiet san pham

function showDetail() {
    // Lấy mã sản phẩm từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Tìm sản phẩm trong mảng products dựa trên id
    const product = products.find(item => item.id === parseInt(productId));

    // Kiểm tra xem sản phẩm có tồn tại không
    if (product) {
        // Hiển thị thông tin chi tiết của sản phẩm
        const productDetailElement = document.getElementById('showDetail');

        productDetailElement.innerHTML = `
        <div class="row">
            <div class="col-2">
            <img src="${product.img}" alt="Hình ảnh sản phẩm">
                <div class="small-img-row">
                    <div class="small-img-col">
                        <img src="${product.img}" alt="Hình ảnh sản phẩm" >
                    </div>
                    <div class="small-img-col">
                        <img src="${product.img}" alt="Hình ảnh sản phẩm">
                    </div>
                    <div class="small-img-col">
                        <img src="${product.img}" alt="Hình ảnh sản phẩm">
                    </div>
                    <div class="small-img-col">
                        <img src="${product.img}" alt="Hình ảnh sản phẩm">
                    </div>
                </div>
            </div>
            <div class="col-2">
                <p>Home/ ${product.name}</p>
                <h1>${product.name}</h1>
                <h4>Giá: ${product.price_new} VNĐ</h4>
                <div class="art-s">
                   <h3>Số lượng:</h3> 
                   <input type="number" min="1" value="1" max="5" id="quantity">
                </div>
                <div class="art">
                    <div class="art-button">
                        <button id="addToCartBtn" class="btn">Thêm vào <i class="fa fa-cart-arrow-down"></i> </button>
                    </div>
                    <div class="art-button">
                        <a href="giohang.html" class="btn">Mua ngay <i class="fa fa-credit-card"></i></a>
                    </div>
                 </div>
                <div class="thongtin">
                    <h3>Thông tin <i class="fa fa-indent"></i></h3>
                    <br>
                    <p><i class="fa fa-indent"></i> Mỗi sáng bạn chỉ cần cho mình một khoảnh khắc để ngồi yên lặng, với chính mình, 
                    và đọc đoạn văn. 
                    .</p>
                    <p><i class="fa fa-indent"></i> Cuốn sách vô giá này,dù tách biệt hay đi cùng nhau, 
                     có thể tạo ra khác biệt thực sự trong cách bạn tiếp cận mỗi ngày,
                      cũng như cuộc sống của mình.</p>
                </div>
            </div>
        </div>
        `;

        // Lấy thẻ button "Thêm vào giỏ hàng"
        const addToCartButton = document.getElementById('addToCartBtn');

        // Thêm sự kiện click cho nút "Thêm vào giỏ hàng"
        addToCartButton.addEventListener('click', () => {
            // Kiểm tra đăng nhập trước khi thêm sản phẩm vào giỏ hàng
            if (checkLogin()) {
                // Lấy số lượng từ input
                const quantity = parseInt(document.getElementById('quantity').value);

                // Thêm sản phẩm vào giỏ hàng 
                addToCart(product, quantity);

                // Thông báo cho người dùng
                alert(`Đã thêm ${quantity} ${product.name} vào giỏ hàng.`);
            } else {
                // Nếu chưa đăng nhập, hiển thị thông báo và chuyển hướng đến trang đăng nhập
                alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.");
                // Chuyển hướng đến trang đăng nhập
                window.location.href = 'login.html';
            }
        });
    }
    updateCartQuantityDisplay();

}

// Hàm kiểm tra đăng nhập
function checkLogin() {
    const userData = sessionStorage.getItem('userData');
    return userData ? true : false;
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product, quantity) {
    if (checkLogin()) {
        // Người dùng đã đăng nhập, tiếp tục thêm sản phẩm vào giỏ hàng

        // Lấy danh sách sản phẩm đã có trong giỏ hàng từ sessionStorage
        let cartItems = sessionStorage.getItem('cartItems');

        // Nếu giỏ hàng chưa có sản phẩm nào, tạo một mảng mới
        if (!cartItems) {
            cartItems = [];
        } else {
            // Nếu giỏ hàng đã có sản phẩm, chuyển đổi từ JSON string sang mảng JavaScript
            cartItems = JSON.parse(cartItems);
        }

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
        const existingItemIndex = cartItems.findIndex(item => item.product.id === product.id);

        if (existingItemIndex !== -1) {
            // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào
            cartItems.push({ product: product, quantity: quantity });
        }

        // Lưu danh sách sản phẩm vào sessionStorage
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
        // Người dùng chưa đăng nhập, có thể hiển thị thông báo hoặc thực hiện hành động khác tùy thuộc vào yêu cầu của bạn
        alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.");
        // Nếu muốn chuyển hướng đến trang đăng nhập, bạn có thể sử dụng dòng sau:
        window.location.href = 'login.html';
    }
    updateCartQuantityDisplay();
}


window.addEventListener('DOMContentLoaded', showDetail);
//----------------------------------------------------------------------------



//------------------------------------SEARCH-----------------------------------------
function searchProductsByName(keyword) {
    keyword = keyword.toLowerCase(); // Chuyển đổi từ khóa tìm kiếm về chữ thường
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(keyword);
    });
    return filteredProducts;
}

// Lấy phần tử input tìm kiếm
const searchInput = document.getElementById('searchInput');

// Thêm sự kiện "input" cho input tìm kiếm
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value;
    const searchResults = searchProductsByName(searchTerm);
    displaySearchResults(searchResults);
});

// Hàm để hiển thị kết quả tìm kiếm
function displaySearchResults(searchResults) {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = ''; // Xóa danh sách sản phẩm hiện tại

    searchResults.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('store-product', 'box');
        productElement.innerHTML = `
            <span class="discount-tag"> - 44%</span>
            <span class="new-tag">NEW</span>
            <div class="product-image" id="product-image">
                <img src="${product.img}" alt="Hình ảnh sản phẩm">
            </div>
            <div class="product-info">
                <h3 class="product-name" id="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="new-price">${product.price_new.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                    <span class="old-price">${product.price_old.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                </div>
                <div class="product-rating">
                    <div class="rating-stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="luot-ban">
                    Đã bán: ${product.percent}
                </div>
            </div>
            <div class="product-buttons">
                <button class="btn buy-now-btn" id="buyButton${product.id}">Xem chi tiết</button>
            </div>
            
        `;
        productListElement.appendChild(productElement);

        const buyButton = productElement.querySelector(`#buyButton${product.id}`);
        buyButton.addEventListener('click', function () {
            detailProduct(product.id);
        });
    });
}
