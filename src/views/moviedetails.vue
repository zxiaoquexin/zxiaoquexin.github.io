<template>
  <div>
    <header>
      <img :src="film.poster" class="h-200">
      <router-link to="/" class="fixed flex fcc">
        <span class="icon iconfont">&#xe64b;</span>
      </router-link>
    </header>

    <!-- 影片详情 -->
    <main>
      <div class="detail bg-fff">
        <div class="flex jc-sb lh15">
          <p>
            <span class="f18 name">{{film.name}}</span>
            <span class="type">{{film.filmType}}</span>
          </p>
          <p class="yellow">
            <i class="f16">{{Number(film.grade).toFixed(1)}}</i>
            <span class="f12">分</span>
          </p>
        </div>
        <p class="mt-10 f14 gray">{{film.category}}</p>
        <p class="f14 gray mt-10">{{film.premiereAt |time}}上映</p>
        <p class="f14 gray mt-5">{{film.nation}} | {{film.runtime}}分钟</p>
        <p class="f14 gray mt-15 lh">{{film.synopsis}}</p>
      </div>

      <!-- 演职人员 -->
      <div class="performer bg-fff mt-10">
        <p class="font">演职人员</p>
        <ul class="flex ever">
          <li v-for="(item,index) in film.actors" :key="index" class="flex2 aic ml-10">
            <img :src="item.avatarAddress" class="image">
            <p class="f12 lh15">{{item.name}}</p>
            <p class="f12 lh15 gray">{{item.role}}</p>
          </li>
        </ul>
      </div>

      <!-- 剧照 -->
      <div class="performer bg-fff mt-10 pb-30">
        <p class="font">剧照</p>
        <ul class="flex ever">
          <li class="flex2 aic ml-10">
            <img src class="image">
          </li>
        </ul>
      </div>
    </main>

    <!-- 选座购票 -->
    <p class="buttom">选座购票</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmId: "",
      film: []
    };
  },
  // filters:{
  //   time(value){
  //       let date=new Date(value*1000);
  //       let Y= date.getFullYear();
  //       let M= date.getMonth()+1;
  //       let D= date.getDate();
  //       M=M<10?'0'+M:M;
  //       D=D<10?'0'+D:D;
  //       return `${Y}-${M}-${D}`
  //   }
  // },
  methods: {
    getdata() {
      let url = `/film/getDetail?filmId=${this.filmId}`;
      this.axios(url).then(res => {
        //  console.log(res)
        this.film = res.data.film;
        //  console.log(this.film)
      });
    }
  },
  created() {
    this.filmId = this.$route.params.filmId;
    this.getdata();
    //  console.log(this.filmId)
  }
};
</script>

<style lang="less" scoped>
header {
  a {
    left: 8px;
    top: 7px;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    opacity: 0.3;
    background-color: #fff;
  }
}

.detail {
  padding: 12px 15px 15px 15px;
  //height: 160px;
}
.h-200 {
  height: 200px;
  width: 100%;
}

.name {
  vertical-align: middle;
}

/* 电影类型 */
.type {
  line-height: 15px;
  display: inline-block;
  text-align: center;
  height: 15px;
  width: 25px;
  font-size: 12px;
  color: #fff;
  background-color: #d2d6dc;
  border-radius: 3px;
}

/* 字体行高 */
.lh {
  line-height: 18px;
  overflow: hidden;
  //height: 37px;
}

// 演职人员
.ever {
  overflow-x: auto;
  overflow-y: hidden;
}

.font {
  color: #191a1b;
  font-size: 16px;
  padding: 15px;
}

.performer {
  height: 175px;

  .image {
    height: 85px;
  }
}

// 选座购票
.buttom {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 50px;
  background: #ff5f16;
  line-height: 50px;
  text-align: center;
  color: #fff;
}
</style>

