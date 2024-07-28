/* ẩn hiện header */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").classList.remove("hidden");
  } else {
    document.getElementById("header").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}

/* tim kiem */
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
}

/* slide */
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
}
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + 'px';
  // 
  let last_active_dot = document.querySelector('.slider .dots li.active');
  last_active_dot.classList.remove('active');
  dots[active].classList.add('active');

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => { next.click() }, 3000);


}

dots.forEach((li, key) => {
  li.addEventListener('click', () => {
    active = key;
    reloadSlider();
  })
})
window.onresize = function (event) {
  reloadSlider();
};

/* flash sale */
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`April 30 2024 ${currentYear + 1} 00:00:00`)
// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);
//Hiệu ứng reset
const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 350,
  reser: true
});

sr.reveal('.home-text', { delay: 50, origin: 'top' });
sr.reveal('.home-img', { delay: 50, origin: 'top' });
sr.reveal('.t-icon', { delay: 70, origin: 'left' });
sr.reveal('.heading', { delay: 10, origin: 'bottom' });
sr.reveal('.search-sp', { delay: 10, origin: 'bottom' });
sr.reveal('.search_tt', { delay: 10, origin: 'left' });
sr.reveal('.product-container-small', { delay: 10, origin: 'right' });
sr.reveal('.page-btn', { delay: 10, origin: 'bottom' });

sr.reveal('.single-product', { delay: 10, origin: 'bottom' });


sr.reveal('.docquyen-text', { delay: 10, origin: 'bottom' });
sr.reveal('.docquyen-img', { delay: 10, origin: 'bottom' });

sr.reveal('.about-text', { delay: 10, origin: 'bottom' });
sr.reveal('.about-img', { delay: 10, origin: 'bottom' });

sr.reveal('.product-container', { delay: 10, origin: 'bottom' });

sr.reveal('.danhgia-container', { delay: 10, origin: 'bottom' });

sr.reveal('.account-page', { delay: 10, origin: 'bottom' });

sr.reveal('.cart-page', { delay: 10, origin: 'bottom' });

/* them vao gio hàng hoặc mua ngay  */
// Add event listeners to buttons for any desired functionality
const buyNowBtn = document.querySelector('.buy-now-btn');
const addToCartBtn = document.querySelector('.add-to-cart-btn');

buyNowBtn.addEventListener('click', () => {
  // Handle "Mua Ngay" button click
  console.log('Mua Ngay button clicked!');
});

addToCartBtn.addEventListener('click', () => {
  // Handle "Thêm Vào Giỏ Hàng" button click
  console.log('Thêm Vào Giỏ Hàng button clicked!');
});

/* slide đánh giá */

$(document).ready(function () {
  var slideWidth = $(".box").width();
  var slidesNumber = $(".box").length;
  var currentIndex = 0;

  $(".sau").click(function () {
    if (currentIndex < slidesNumber - 1) {
      currentIndex++;
      $(".box").css("transform", "translateX(" + (-slideWidth * currentIndex) + "px)");
    }
  });

  $(".truoc").click(function () {
    if (currentIndex > 0) {
      currentIndex--;
      $(".box").css("transform", "translateX(" + (-slideWidth * currentIndex) + "px)");
    }
  });
});


