<script type="module">
  import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

  const swiper = new Swiper(...)
</script>

const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

})