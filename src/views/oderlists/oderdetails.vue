<template>
    <div>
       <header>
        <!-- 订单详情 -->
        <div class="city flex jc-sb bg-fff bd-gray">
            <router-link to='/oder' class="icon iconfont ml-10 f24">&#xe64b;</router-link>
            <p class="f16">订单详情</p>
            <span style="visibility:hidden;" class="icon iconfont ml-10">&#xe64b;</span>
        </div>
    </header>

    <!-- 图片 -->
    <div class="image flex jc-sa fcc">
        <p class="f15 fff">取消订单</p>
        <img src="../../style/img/qx.png" style="width:85px;height:67px;">
    </div>

    <!-- 电话 -->
    <div class="phone flex bg-fff ">
        <span class="icon iconfont ml-10 gray f22">&#xe622;</span>
        <p class="ml-5 lh f15">{{orderdetail.mobile}}</p>
    </div>

    <!-- 影片详情 -->
    <div class="bg-fff mt-10" style="height:147px;">
        <div class="imgBox flex">
            <div class="imgBorder flex fcc">
                <img :src="orderdetail.imgUrl" height="48px;">
            </div>
            <div class="lh15 w100pc ml-15">
                <p class="f15">{{orderdetail.filmName}}</p>
                <p class="f13 gray  mt-5">{{orderdetail.watchtime | odertime}}</p>
                <p class="f13 gray">{{orderdetail.address}}</p>
                <p class="f13 gray">{{orderdetail.hallName }} {{orderdetail.seats}}</p>
                <div class=" gray2  flex jc-sb mt-10 fcc">
                    <p> <span class=" orange">&yen;{{orderdetail.price/100}}</span> <s class="f12">&yen;{{orderdetail.originPrice/100}}</s></p>
                    <p class="f12">x{{orderdetail.count}}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 商品金额 -->
    <div class="mt-10">
        <div class=" h60 bg-fff">
            <div class="flex jc-sb fcc f14 ">
                <p class="ml-10 mt-10 gray">商品金额</p>
                <p class="mr-10 mt-10 f12 orange">&yen; {{orderdetail.finalPrice/100}}</p>
            </div>
            <div class="flex jc-sb fcc f14 mt-10">
                <p class="ml-10 ">实付</p>
                <p class="mr-10  orange">&yen; {{orderdetail.finalPrice/100}}</p>
            </div>
        </div>
    </div>

    <!-- 地址 -->
    <div class="flex jc-sb fcc h60 bg-fff mt-10">
        <div>
            <p class="f14  ml-10">{{orderdetail.cinemaInfo && orderdetail.cinemaInfo.name}}</p>
            <p class="f12 gray ml-10 mt-10">{{ orderdetail.cinemaInfo && orderdetail.cinemaInfo.address}}</p>
        </div>
        <span class="icon iconfont mr-15 f20">&#xe62b;</span>
    </div>

    <!-- 订单号 -->
    <div class="flex jc-sb fcc h60 bg-fff mt-10">
        <div class="w100pc f12">
            <div class="flex jc-sb fcc">
                <p class=" gray2 ml-10">订单编号 2019 0402 2142 4284 495</p>
                <p class=" gray2 mr-10 copy">复制</p>
            </div>
            <p class=" gray2 ml-10 mt-5">下单时间 2019-04-02 21:39:41</p>
        </div>
    </div>

    <!-- 再次购买 -->
    <div class=" buy bg-fff">
        <div class="flex jc-sb fcc">
            <span class="icon iconfont ml-5">&#xe6ee;</span>
            <p class="andBuy f12 mr-10">再次购买</p>
        </div>
    </div>

    </div>
</template>

<script>
export default {
    data(){
     return{
         orderId:'',
         orderdetail:[]
     }
    },
    created(){
    this.orderId=this.$route.params.orderId;
    this.getdata()
    },
methods:{
    getdata(){
        let url='http://132.232.94.151:3000/api/order/findById'
        let date = {
            sessionToken:this.$store.state.sessionToken,
            orderId:this.orderId
        }
        this.axios.post(url,date).then(res=>{
            // console.log(res)
            this.orderdetail=res.data.order
        })
    },
},

}
</script>

<style lang="less" scoped>
.orange {
    color: #ff5f16
}

.gray {
    color: #787c82;
}

.gray2 {
    color: #bdc0c5;
}

.f13 {
    font-size: 13px;
}

.f15 {
    font-size: 15px;
}

.h60 {
    height: 60px;
}

.bd-gray {
    border-bottom: 1px solid #f5f5f5;
}

// 订单详情
.city {
    height: 42px;
    line-height: 44px;
}

// 取消订单图片
.image {
    background-color: #ff5f16;
    height: 79px;
}

// 电话
.phone {
    height: 49px;
    line-height: 49px;
    vertical-align: middle;

    .lh {
        line-height: 42px;
        color: #191a1b;
    }
}

// 影片详情
.imgBox {
    padding: 15px 15px 15px 15px;

    .imgBorder {

        height: 117px;
        width: 85px;
        background-color: rgb(249, 249, 249);
    }
}

// 订单号
.copy {
    border: 1px solid #ededed;
    height: 20px;
    width: 45px;
    line-height: 20px;
    text-align: center;
}

// 再次购买
.buy {
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    line-height: 50px;

    span {
        font-size: 34px;
        color: rgb(90, 143, 182);
    }

    .andBuy {
        height: 30px;
        width: 85px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #bdc0c5;
    }
}
</style>
