const bannerScroll = document.querySelector(".banner-scroll");
const intro = document.querySelector(".intro");
bannerScroll.addEventListener("click", () => {
  console.log("it wordks!!");
  window.scrollTo({
    top: intro.offsetTop - 60,
    behavior: "smooth",
  });
});

let menu = document.querySelector(".menu-btn");
let hidemenu = document.querySelector(".hide-menu");
let closemenu = document.querySelector(".menu-close");
let upbtn = document.querySelector(".upbtn");
let loca2 = document.querySelector(".banner-header").offsetTop;

//  메뉴 열기
function menuOpen(e) {
  e.stopPropagation();
  hidemenu.style.transform = "translate(" + 0 + "%)";
}

// 메뉴 닫기
function menuClose() {
  hidemenu.style.transform = "translate(" + 100 + "%)";
}

// 화면 위로 올리는 버튼

function up() {
  console.log("클릭");
  window.scrollTo({ top: loca2, behavior: "smooth" });
}

upbtn.addEventListener("click", up);
upbtn.addEventListener("touchstart", up);

menu.addEventListener("click", menuOpen);
menu.addEventListener("touchstart", menuOpen);

closemenu.addEventListener("click", menuClose);
closemenu.addEventListener("touchstart", menuClose);

function scrollHeader() {
  const header = document.querySelector("banner-header");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
