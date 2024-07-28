


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


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});





import { getDatabase, ref, child, get, set } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const db = getDatabase();

// Đặt tên khác cho biến và hàm đăng ký
let signupSignname = document.getElementById('signname');
let signupUsername = document.getElementById('username');
let signupEmail = document.getElementById('email');
let signupPassword = document.getElementById('password');

let signupButton = document.getElementById('Signup');

function SignUp() {
  set(ref(db, 'User/' + signupSignname.value), {
    Signname: signupSignname.value,
    Name: signupUsername.value,
    Email: signupEmail.value,
    Password: signupPassword.value
  }).then(() => {
    alert("Đăng ký thành công!");

    // Xóa nội dung trong các ô input sau khi đăng ký thành công
    signupSignname.value = '';
    signupUsername.value = '';
    signupEmail.value = '';
    signupPassword.value = '';
  }).catch(error => {
    alert('Đăng ký thất bại: ');
  });
}

signupButton.addEventListener('click', SignUp);


// Đặt tên khác cho biến và hàm đăng nhập
let loginName = document.getElementById('loginName');
let loginPassword = document.getElementById('loginPassword');
let signInButton = document.getElementById('SignIn');

function SignIn() {
  const Signname = loginName.value;
  const Password = loginPassword.value;

  // Truy vấn vào Firebase Realtime Database để lấy thông tin người dùng
  get(child(ref(db), `User/${Signname}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const userData = snapshot.val();
      if (userData.Password === Password) {
        alert("Đăng nhập thành công!");

        // Lưu toàn bộ thông tin người dùng vào sessionStorage
        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = 'sanpham.html';
      } else {
        alert("Mật khẩu không đúng!");
      }
    } else {
      // Nếu tên đăng nhập không tồn tại trong Firebase, hiển thị thông báo yêu cầu đăng ký
      alert("Tên đăng nhập không tồn tại! Vui lòng đăng ký tài khoản.");

    }
  }).catch((error) => {
    console.error("Error getting user data: ", error);
  });
}

signInButton.addEventListener('click', SignIn);


