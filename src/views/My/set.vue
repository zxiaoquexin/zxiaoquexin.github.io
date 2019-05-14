<template>
    <div>
        <header>
        <!-- 设置 -->
        <div class="city flex jc-sb bg-fff">
            <router-link to='./center'>
                <span class="icon iconfont ml-10 f24">&#xe64b;</span>
            </router-link>
            <p class="f16">设置</p>
            <span style="visibility:hidden;" class="icon iconfont ml-10">&#xe64b;</span>
        </div>
    </header>

    <!-- 账号ID -->
    <div class="id f15 flex jc-sb bg-fff mt-10">
        <p class=" ml-10">账号ID</p>
        <p class="f12 gray mr-10">5657756</p>
    </div>

    <!-- 密码 -->
    <div class="bg-fff">
        <div class="flex jc-sb bd-gray id ml-10 mt-10 bg-fff">
            <p class="f15 ">登录密码</p>
            <div class="flex fcc f12 gray">
                <p class="f14 mr-10">未设置</p>
                <span class="icon iconfont f12 gray mr-10">&#xe634;</span>
            </div>
        </div>
        <div class="flex jc-sb bd-gray id ml-10  bg-fff">
            <p class="f15 ">安全密码</p>
            <div class="flex fcc f12 gray">
                <p class="f14 mr-10">未设置</p>
                <span class="icon iconfont f12 gray mr-10">&#xe634;</span>
            </div>
        </div>
    </div>

    <!-- 版本 -->
    <div class="bg-fff">
        <div class="flex jc-sb bd-gray id ml-10 mt-10 bg-fff">
            <p class="f15 ">软件版本</p>
            <div class="flex fcc f12 gray">
                <span class="icon iconfont f12 gray mr-10">&#xe634;</span>
            </div>
        </div>
        <div class="flex jc-sb bd-gray id ml-10  bg-fff">
            <p class="f15 ">意见反馈</p>
            <div class="flex fcc f12 gray">
                <span class="icon iconfont f12 gray mr-10">&#xe634;</span>
            </div>
        </div>
    </div>

    <!-- 清除缓存 -->
    <div class="id f15 flex jc-sb bg-fff mt-10">
        <p class=" ml-10">清除缓存</p>
        <p class="f12 gray mr-10">0.1 KB</p>
    </div>

    <!-- 退出登录 -->
    <div class="id f16 flex fcc bg-fff bott0 fixed w100pc">
        <p class="orange" @click="loginout">退出登录</p>
    </div>
    </div>
    
</template>

<script>
export default {
 methods:{
     loginout(){
         this.$store.commit('updateisLoing',true),
         this.$store.commit('updatephone','')
         this.$store.commit('upsessionToken','')
         this.$router.push('/my')
     }
 }
}
</script>

<style lang="less" scoped>
// 设置
header {
    .city {
        height: 44px;
        line-height: 44px;
    }
}

// 账号ID
.id {
    height: 49px;
    line-height: 49px;

}
</style>
