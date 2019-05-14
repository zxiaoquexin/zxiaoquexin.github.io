<template>
    <div style="background-color:#f4f4f4;">
          <!-- 头部 -->
    <header>
        <div class="beijin"></div>
        <div class="fcc users pixed">
            <img src="@/style/img/personal/tx.jpg" class="imege">
            <p v-if="$store.state.isLogin" class="f16 fff ml-20" @click="a()">立即登录</p>
            <p v-else class="f16 fff ml-20">用户:{{$store.state.phone.slice(-4)}}</p>
        </div>
    </header>


    <!-- 导航栏 -->
    <div class="flex jc-sa nav bg-fff fcc">
        <router-link to='/oder' class="flex2 aic">
            <img src="@/style/img/personal/p.png" class="cit">
            <span class="f14 gray mt-5">电影订单</span>
        </router-link>
        <div class="flex2 aic">
            <img src="@/style/img/personal/dt.png" class="cit">
            <p class="f14 gray mt-5">商品订单</p>
        </div>
    </div>

    <!-- 主体 -->
    <main class="mt-10">
        <div class="bg-fff">
            <div class="flex jc-sb fcc bg-fff list bd-gray ml-10">
                <p class=" fcc ml-10">
                    <img src="@/style/img/personal/yhk.png" class="image">
                    <span class="ml-10">卖座卡</span>
                </p>
                <span class="icon iconfont foun mr-10 gray">&#xe634;</span>
            </div>
            <div class="flex jc-sb fcc bg-fff list bd-gray ml-10">
                <p class=" fcc ml-10">
                    <img src="@/style/img/personal/hb.png" class="image">
                    <span class="ml-10">红包组合</span>
                </p>
                <span class="icon iconfont foun mr-10 gray">&#xe634;</span>
            </div>
            <div class="flex jc-sb fcc bg-fff list bd-gray ml-10">
                <p class=" fcc ml-10">
                    <img src="@/style/img/personal/qb.png" class="image">
                    <span class="ml-10">余额</span>
                </p>
                <div>
                    <span class="f14 gray">&yen;0</span>
                    <span class="icon iconfont foun mr-10 gray">&#xe634;</span>
                </div>
            </div>
          
                <router-link tag='div' to='set' class="flex jc-sb fcc bg-fff list bd-gray ml-10">
                    <p class=" fcc ml-10">
                        <img src="@/style/img/personal/cl.png" class="image">
                        <span class="ml-10">设置</span>
                    </p>
                    <span class="icon iconfont foun mr-10 gray">&#xe634;</span>
                
            </router-link>
            
        </div>
    </main>
    <boot page='my'></boot>
    </div>
</template>

<script>
// import {mapGetters} from 'vuex'
import boot from '@/components/boot'
export default {

// computed:{
//  ...mapGetters(['isLogin'])
// },

components:{
    boot
},
methods:{
   a(){
       this.$store.commit('updateisLoing')
       this.$router.push('/login')
   } 
}
}
</script>

<style lang="less" scoped>



</style>
