<template>
    <div>
        <!-- 头部 -->
    <header class="fixed w100pc" style="top:0;">
        <div class="flex jc-sb bg-fff" style="height:40px;line-height:40px;">
            <router-link to='/'>
                <span class="icon iconfont ml-10 f24">&#xe64b;</span>
            </router-link>
            <p class="f16">当前城市</p>
            <span style="visibility:hidden;" class="icon iconfont ml-10">&#xe64b;</span>
        </div>

        <!-- 搜索框 -->
        <div class="pt-10" style="background:#f4f4f4;height:40px;">
            <div class="bg-fff  mr-10 ml-10 flex jc-sb" style="border-radius:3px;height:30px;line-height:60px;">
                <input class="bg-fff w100pc ml-30 " style="border:none;outline:none;" type="text"
                    placeholder="输入城市名或拼音" @input='aaa' v-model="bbb">
                <i class="iconfont icon-sousuo abs f18" style="top:36px;left:17px;"></i>
            </div>
        </div>
    </header>
    <!-- 主体 -->
    <main class="" style="margin-top:80px;">
        <!-- GPS定位 -->
        <p class="gray f12 ml-15 dsn">GPS定位你所在城市</p>
        <div class="flex-sa ">
            <div class="h30 wa bg-gray r mt-15 dsn">
                <p class="f14 lh30 fcc ">定位失败</p>
            </div>
            <div class="wa bg-gray r mt-15">
                <p class="f14 lh30 fcc "></p>
            </div>
            <div class="wa bg-gray r mt-15">
                <p class="f14 lh30 fcc "></p>
            </div>
        </div>

        <a name="a"></a>
        <!-- 热门城市 -->
        <p class="gray f12 ml-15 mt-15">热门城市</p>
        <!-- 城市 -->
        <ul class="flex aic hotCity fw">
            <li v-for="item in hotcity" :key="item.cityId" class="fcc">
                <div class="h30 city bg-gray fcc r">
                    <p class="f14 lh30 fcc " @click="changname(item.name)">{{item.name}}</p>
                </div>
            </li>
        </ul>
    </main>
    <div id="list" class="cityList">
        <!-- A -->
        <section v-for='(letter,index) in letters' :key="index">
            <h3 class="h30 lh30 bg-gray f12 pl-15" >
                <p>{{letter.toUpperCase()}}</p>
            </h3>
            <!-- 城市 -->
            <ul class="flex jc-sa fw ">
                <li class="city fcc bdb" v-for="(city,index) in city(letter)" :key="index">
                    {{city.name}}
                </li>
            </ul>
        </section>
    </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
     return{
         citylist:[],
         allcity:[],
         bbb:[]
         //letter:[],  //筛选字母时第二种方法用到
     }
    },
created(){
    this.getcitylist()
},
computed:{
    ...mapGetters(['getname']),

   hotcity(){
     //筛选热门城市
    let list = this.citylist.filter(city=>{
        return city.isHot===1;
    })
    return list
   },
   //获取首字母
   letters(){
       //第一种方法 map方法获取首字母数组
       let list= this.citylist.map(city=>{
         return city.pinyin[0];
       });
       //数组去重
        const set = new Set(list.sort())  //sort()是数组排序
         const newlist = [...set]
         return newlist


      //  第二种方法
      //   this.citylist.forEach(city => {
      //   //    console.log(city)
      //   const firstLetter = city.pinyin.slice(0,1);
      //   // 将截取的字母放入数组中
      //   this.letter.push(firstLetter);  
      //   });
      //   //数组去重
      //   const set = new Set(this.letter.sort())  
      //   const Initials = [...set]
      //   return Initials
   },
   
},
methods:{
    //获取数据
    getcitylist(){
        let url='http://132.232.94.151:3000/api/city/getList';
        this.axios(url).then(res=>{ 
            // console.log(res);
            this.citylist=res.data.cityList;
            this.allcity=res.data.cityList;
            // console.log(this.citylist)
        })
    },
    //根据数字母渲染对应的城市
    city(letter){
      const citys= this.citylist.filter(city=>{
         return city.pinyin[0]===letter
       })
      //  console.log(citys)
       return citys
   },
   changname(name){
     this.$store.commit('updatename',name);
     history.back()
   },
   aaa(){
     if(!this.bbb){
      this.citylist=this.allcity
     }else{
       let lists = this.citylist.filter(city=>{
       return city.name.match(this.bbb)|| city.pinyin.match(this.bbb)
     })
     this.citylist=lists
     }
     
   }

}
}
</script>

<style lang="less" scoped>
// 热门城市 
.hotCity {
  flex-wrap: wrap;
  li {
    width: 33.3333%;
    height: 45px;
    .city {
      width: 84px;
      height: 30px;
    }
  }
  .bg-gray {
    background: #f4f4f4;
  }
  // 小圆角
  .r {
    border-radius: 3px;
  }
}

// 其它城市列表
.cityList {
  ul {
    flex-wrap: wrap;
  }
  .city {
    height: 45px;
    width: 33.3333%;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  section {
    ul {
      padding: 0 15px;
    }
  }
  .lh30 {
    line-height: 30px;
  }
  .gray {
    color: #a2a5a8;
  }
  .bdb {
    border-bottom: 1px solid#f5f5f5;
  }
  .bg-gray {
    background: #f4f4f4;
  }
}

// 锚点
.point {
  right: 0;
  top: 30%;
  opacity: 0.2;
  .list {
    width: 18px;
    line-height: 16px;
  }
  .gray {
    color: #525252;
  }
}

</style>
