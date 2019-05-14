<template>
    <div>
        <header>
        <!-- 电影订单 -->
        <div class="city flex jc-sb bg-fff bd-gray ">
            <router-link to='/my' class="icon iconfont ml-10 f24">&#xe64b;</router-link>
            <p class="f16">电影订单</p>
            <span style="visibility:hidden;" class="icon iconfont ml-10">&#xe64b;</span>
        </div>
    </header>

    <!-- 订单列表 -->
    <div class="bg-fff h189" v-for="item in oderlist" :key="item.orderId">
        <router-link :to='`/oder/oderdetails/${item.orderId}`' class="flex bg-fff list ml-15 ">
            <div class="image flex fcc">
                <img :src="item.imgUrl" height="28px;">
            </div>
            <div class="w100pc lh15 ml-15 ">
                <p class="f15">海市蜃楼</p>
                <p class="f12 gray">{{item.watchtime | odertime}}</p>
                <div class="flex jc-sb fcc">
                    <p class="orange f15  mt-5">&yen;25 <s class="f12 gray">&yen;25</s></p>
                    <p class="f12 gray">X{{item.count}}</p>
                </div>
            </div>
        </router-link>
        <div class="flex jc-sb f14 common ">
            <p class="fg1 mr-15" style="text-align:right;">共{{item.count}}件商品</p>
            <p class="mr-15">实付 <span class="orange">&yen; 25</span></p>
        </div>
        <div class="flex jc-sb fcc mt-10">
            <p class="f12 gray ml-15">订单取消</p>
            <p class="buttom f14 mr-15">再次购买</p>
        </div>
    </div>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
 data(){
     return{
         oderlist:[]
     }
 },
 methods:{
     getdata(){
         let url='http://132.232.94.151:3000/api/order/getList'
         let date={
             phone:this.$store.state.phone,
             sessionToken:this.$store.state.sessionToken
         }
         this.axios.post(url,date).then(res=>{
            //  console.log(res)
             this.oderlist=res.data.orders
         })
     }
 },
 created(){
     this.getdata()
 },

 
}
</script>

<style lang="less" scoped>
.orange {
    color: #ff5f16
}

.gray {
    color: #bdc0c5;
}

.f15 {
    font-size: 15px;
}

.bd-gray {
    border-bottom: 1px solid #f5f5f5;
}

// 电影列表
.city {
    height: 50px;
    line-height: 44px;
}

// 订单列表
.h189 {
    height: 189px;
}

.list {
    padding: 15px 15px 12px 0;

    .image {
        width: 50px;
        height: 70px;
        background-color: rgb(249, 249, 249);
        text-align: right;
    }
}

.common {
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    line-height: 36px;
}

.buttom {
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #bdc0c5;

}
</style>
