let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menulinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

    function () {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        document.body.classList.toggle('stop-scroll');

    })

menulinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll')
    })
})

let tabsBtn = document.querySelectorAll('.steps__btn');
let tabsItem = document.querySelectorAll('.steps__box-left');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('steps__btn--active') });
        e.currentTarget.classList.add('steps__btn--active');

        tabsItem.forEach(function (element) { element.classList.remove('steps__box-left--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('steps__box-left--active');
    });
});



const container = document.querySelector(".hero__container");
const swiper = new Swiper('.hero__swiper', {
  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

})

document.querySelector(".form-btn__open").addEventListener("click", function() {
    document.querySelector(".form").classList.add("form__active");
    this.classList.add("active");
  })
  document.querySelector(".form-close").addEventListener("click", function() {
     let form = document.querySelector(".form");
    form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".form-btn__open").classList.remove("active")
  });
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".form");
    if (!target.closest(".form-container")) {
    form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".form-btn__open").classList.remove("active")
    }
  })



new Accordion('.accordion-container');
