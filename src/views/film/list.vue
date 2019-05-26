<template>
  <div>
    <!-- <nav class="nav flex jc-sa">
        <p class="left ">正在热播</p>
        <p>即将上映</p>
    </nav>-->

    <!-- 电影列表 -->
    <ul class="list">
      <!-- 影片 -->
      <router-link
        :to="`/moviedetails/${item.filmId}`"
        class="item flex jc-sb pt-15"
        v-for="item in filmlist"
        :key="item.filmId"
      >
        <div class="film flex jc-sa ml-10">
          <img :src="item.poster" class="image">
          <div class="ml-10 lh15">
            <p class="f16">
              {{item.name}}
              <span class="type">{{item.filmType}}</span>
            </p>
            <p class="f14 gray">
              观众评分
              <span class="yellow">{{item.grade}}</span>
            </p>
            <p class="f14 gray actor">主演：{{item.actorStr}}</p>
            <p class="f14 gray">{{item.nation}} | {{item.runtime}}分钟</p>
          </div>
        </div>
        <div class="fcc">
          <button v-if="who==='hot'" class="butt mr-10">购票</button>
          <button v-if="who==='coming'&&item.isPresale" class="butt mr-10">预售</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["filmlist", "who"]
};
</script>

<style lang='less' scoped>
.nav {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}

/* 导航栏 */
.left {
  color: #ffb232;
  border-bottom: 2px solid #ffb232;
}
.list {
  /* 影片 */
  .film {
    height: 94px;
  }

  /* 电影类型 */
  .type {
    height: 20px;
    width: 20px;
    font-size: 12px;
    color: #fff;
    background-color: #d2d6dc;
  }

  /* 海报 */
  .image {
    width: 66px;
    height: 90px;
  }

  /* 字体省略 */
  .actor {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 210px;
  }

  /* 购买 */
  .butt {
    height: 25px;
    width: 50px;
    color: #ff5f16;
    font-size: 13px;
    border: 1px solid #ff5f16;
    background-color: #fff;
  }
}
</style>

