<template>
  <div>
    <swiper :images="images"></swiper>
    <tap who="hot"></tap>
    <List :filmlist="filmlist" who="hot"></List>
    <boot page="film"></boot>
  </div>
</template>

<script>
import swiper from "./swiper";
import tap from "./tap";
import List from "./list";
import boot from "@/components/boot";
export default {
  data() {
    return {
      filmlist: [],
      images: []
    };
  },
  methods: {
    getdata() {
      let url = "/film/getList?type=1";
      this.$loading();
      this.axios
        .get(url)
        .then(res => {
          this.$clear();
          //  console.log(res)
          this.filmlist = res.data.films;
          this.images = res.data.banners;
          //  console.log(this.filmlist)
          // console.log(this.images)
        })
        .catch(error => {
          this.$clear();
        });
    }
  },
  created() {
    this.getdata();
  },
  components: {
    swiper,
    tap,
    List,
    boot
  }
};
</script>

 <style lang='less' scoped>
</style>

