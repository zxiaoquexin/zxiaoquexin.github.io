<template>
  <div>
    <router-link
      to="/cityList"
      class="ml-10"
      style="width:30px; position:relative; top:20px; z-index:1000; background: rgb(255, 255, 255,0.7);border-radius: 9px ; "
    >
      <span class="f14">{{this.$store.state.cityname.name}}</span>
      <span class="icon iconfont f12">&#xe643;</span>
    </router-link>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.imgUrl" class="h-200">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  // props: ["images"],
  data() {
    return {
      images: []
    };
  },
  methods: {
    getdata() {
      let url = "/film/getList";
      this.axios.get(url).then(res => {
        // console.log(res)
        this.images = res.data.banners;
        // console.log(this.images)
      });
    }
  },
  created() {
    this.getdata();
  }
};
</script>

<style>
.h-200 {
  height: auto;
  width: 100%;
}
</style>
