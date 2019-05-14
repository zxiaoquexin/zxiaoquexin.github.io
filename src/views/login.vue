<template>
    <header class="">
        <img class="h60" src="../style/img/logo.png" height="60px">
        <div class="">
            <!-- 手机号码 -->
            <div class="handset ml-20 mr-20 flex jc-sb pb-5">
                <input id="phone" class="f14" type="text" placeholder="手机号" v-model="phone">
                <!-- 获取验证码 -->
                <input :disabled='disabled' class="  gray f12 bg-fff" type="button" :value="time" @click="getcode">
            </div>
            <!-- 验证码 -->
            <div class=" handset ml-20 mr-20 flex jc-sb mt-20 pb-5">
                <input class="f14" placeholder="验证码" v-model="smsCode">
            </div>

            <!-- 登录 -->
            <button class="butt ml-20 mr-20 fff" @click="login">登录</button>
        </div>
    </header>
</template>

<script>
export default {
data(){
    return{
        phone:'13800000000',
        smsCode:'111313',
        time:'获取验证码',
        disabled:false,
        Stopit:true

    }
},
methods:{
    // 获取验证码请求
    getcode(){
        //倒计时函数调用
        this. countDown()
    let url= 'http://132.232.94.151:3000/api/user/getSmsCode'
    let dete={
        phone:this.phone
    }
    this.axios.post(url,dete).then(res=>{
        console.log(res)
    })
    },
    // 倒计时
    countDown(){
       if (!this.judgephone()){
           return false
       }
        this.time=15
        this.disabled=true
    let code =setInterval(()=>{
         let a=this.time--
         if(a===1){
             clearInterval(code)
             this.time='重新获取验证码'
             this.disabled=false
         }
    },300)
    },
    //判断手机号
    judgephone(){
        //手机号正则
        var phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        if (!this.phone) {
            alert('手机号码为空')
            return false;
        }
        if (!phoneReg.test(this.phone)) {
            alert('手机号不正确')
            return false;
        }
        return true
    },


    //登录请求发送
    login(){
        
        if (!this.judgephone()){
           return false
       }
        let url='http://132.232.94.151:3000/api/user/loginBySmsCode';
        let date={
            phone:this.phone,
            smsCode:this.smsCode
        };
        if (this.Stopit){
            this.Stopit=false;
            this.axios.post(url,date).then(res=>{
        //    console.log(res)
           if(res.data.code==='666'){
               this.$store.commit('updatephone',this.phone)
               this.$store.commit('updateisLoing',false)
               this.$store.commit('upsessionToken',res.data.user.sessionToken)
               this.$router.push('/my')
               
               
           }else{
            alert('验证码错误')
           }
        })
        
        setInterval(()=>{
                this.Stopit=true;//防止连续点击开关
                },3000);
     
        }
        

    }
}
}
</script>

<style lang="less" scoped>
.gray {
    color: #797d82;
}

body {
    background-color: #fff;
}

// 手机号码
header {
    text-align: center;

    img {
        margin: 79px auto;
    }

    // 验证码
    .handset {
        border-bottom: 1px solid #f8f8f8;

        input {
            border: none;
            outline: none;
        }
    }

    // 登录按钮
    .butt {
        margin-top: 20px;
        border-radius: 3px;
        background-color: #ff5f16;
        width: calc((260vw - 5px)/3);
        height: 40px;
        border: none;
    }
}
</style>
