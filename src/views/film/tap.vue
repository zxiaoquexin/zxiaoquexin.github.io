<template>
    <div>
        <nav class="nav flex jc-sa">
        <router-link to='/film/hotlist' :class="{left:who==='hot'} ">正在热播</router-link>
        <router-link to='/film/cominglist' :class="{left:who==='coming'} ">即将上映</router-link>
    </nav>
    </div>
</template>

<script>
export default {
    props:['who']

}
</script>

<style lang="less" scoped>
.nav {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
}

/* 导航栏 */
.left {
    color: #ffb232;
    border-bottom: 2px solid #ffb232
}
</style>
