<template lang="pug">
  .index
    h1 {{msg}}
    swiper(:option="swiperOption" ref="mySwiper")
      swiper-slide
        img(src="~sta/img/1.jpg")
      swiper-slide
        img(src="~sta/img/2.jpg")
      swiper-slide
        img(src="~sta/img/3.jpg")

</template>


<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: 'Index',
  data () {
    return {
      msg: '使用pug 跟 stylus',
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        pagination: ".swiper-pagination",
        slidesPerView: "auto",
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        }
      }
    }
  },
  components:{
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  mounted() {
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    this.swiper.slideTo(0, 0, false);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  h1
    color #ff0000
</style>

