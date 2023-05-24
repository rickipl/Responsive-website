import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

new Vue({

    data() {
        return {

        };
      },
      mounted() {
        this.initSwiper();
      },
      methods: {
        initSwiper() {
          this.swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
        },
        goToNextSlide() {
          this.swiper.slideNext();
        },
        goToPrevSlide() {
          this.swiper.slidePrev();
        }
      }
}).$mount('#app');