<template>
  <footer class="pt-60 z-index">
        <div class="flex jc-sa w100pc fixed bott0 bg-fff aic footer">
            <div>
                <router-link to="/film" class="flex2 aic f14 gray" :class="{yellow: page==='film'}">
                    <span class="icon iconfont">&#xe68b;</span>
                    <p class="mt-3">电影</p>
                </router-link>
            </div>
            <div>
                <router-link to="/ciname" class="flex2 aic f14  gray" :class="{yellow: page==='ciname'}">
                    <span class="icon iconfont">&#xe61e;</span>
                    <p class="mt-3">影院</p>
                </router-link>
            </div>
            <div>
                <router-link to="/pintuan" class="flex2 aic f14 gray" :class="{yellow: page==='pintuan'}">
                    <span class="icon iconfont">&#xe617;</span>
                    <p class="mt-3">特惠</p>
                </router-link>
            </div>
            <div>
                <router-link to="/my" class="flex2 aic f14 gray" :class="{yellow: page==='my'}">
                    <span class="icon iconfont">&#xe62c;</span>
                    <p class="mt-3">我的</p>
                </router-link>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    props:['page']

}
</script>

<style lang="less" scoped>
.z-index{
    z-index: 3000;
}
.orange {
    color: #ff5f16
}

.gray {
    color: #797d82;
}
.yellow {
    color: #ffb232
}

.mt-3 {
    margin-top: 3px;
}

.bott0 {
    bottom: 0;
}

.pt-60 {
    padding-top: 60px;
}
.footer {
    height: 50px;
}
</style>
