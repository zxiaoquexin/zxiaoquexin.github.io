<template>
  <div>
    <div v-show="show" class="pop"></div>
    <header class="fixed">
      <!-- 影院 -->
      <div class="city flex jc-sb bg-fff bd-gray titl bd-gray">
        <router-link to="/city">
          <router-link to="/cityList" class="ml-10">
            <span class="f14">{{this.$store.state.cityname.name}}</span>
            <span class="icon iconfont f12">&#xe643;</span>
          </router-link>
        </router-link>

        <p class="f16 mr-20">影院</p>
        <span class="icon iconfont mr-10 f24">&#xe611;</span>
      </div>

      <div class="flex jc-sa titl bd-gray bg-fff">
        <p @click="changshow" :class="{color:show}">
          <span class="f14">{{name}}</span>
          <span class="icon iconfont f12">&#xe643;</span>
        </p>
        <p>
          <span class="f14">最近去过</span>
          <span class="icon iconfont f12">&#xe643;</span>
        </p>
      </div>

      <ul v-show="show" class="bg-fff flex lists pt-10 pb-10">
        <li class="item fcc f12" :class="{color:addressindex===-1}">
          <span class="text active" @click="allciname">全城</span>
        </li>

        <!-- 循环所有区 -->

        <li
          class="item fcc f12"
          :class="{color:addressindex===index}"
          v-for="(addres,index) in address"
          :key="index"
          @click="addressCinema(addres,index)"
        >
          <span class="text">{{addres}}</span>
        </li>
      </ul>
    </header>
    <div class="mt-60">
      <!-- 影院列表 -->

      <div v-for="(item,index) in ciname" :key="index" class="lists bd-gray">
        <p class="flex jc-sb">
          <span class="f15">{{item.name}}</span>
          <span class="f12 yellow">&yen; {{item.lowPrice/100}} 起</span>
        </p>
        <p class="flex jc-sb mt-10">
          <span class="f12 gray">{{item.address}}</span>
          <span class="f12 gray">{{Number(item.Distance).toFixed(2)}}</span>
        </p>
      </div>
    </div>
    <boot page="ciname"></boot>
  </div>
</template>

<script>
import boot from "../components/boot";
// import { Toast } from 'vant';
// import axios from 'axios';
export default {
  data() {
    return {
      //控制蒙层显式和隐藏
      show: false,
      //控制高亮和对应的点击区匹配
      addressindex: -1,
      //影院列表
      ciname: [],
      //备份影院列表,用于筛选区域对应的影院
      backupsCiname: [],
      name: "全城"
    };
  },

  created() {
    //获取数据方法调用
    this.getdata();
  },

  computed: {
    //筛选出所有区域
    address() {
      const addresslist = this.backupsCiname.map(address => {
        return address.districtName;
      });
      //数组去重
      const set = new Set(addresslist);
      const newAddressLlist = [...set];
      return newAddressLlist;
    }
  },

  methods: {
    //获取数据
    getdata() {
      let url = "/cinema/getList";
      this.$loading();
      this.axios.get(url).then(res => {
        this.$clear();
        this.ciname = res.data.cinemas;
        //  console.log(res)
        //备份影院列表
        this.backupsCiname = res.data.cinemas;
      });
    },

    //控制下拉菜单显式或隐藏

    changshow() {
      this.show = !this.show;
    },

    //渲染和区相对应的影院

    addressCinema(addres, index) {
      const list = this.backupsCiname.filter(cinemas => {
        return cinemas.districtName == addres;
      });
      this.ciname = list;
      this.name = addres;
      //控制高亮
      this.addressindex = index;
      //改变v-show的条件函数调用
      this.changshow();
    },

    //渲染全城影院列表
    allciname() {
      this.ciname = this.backupsCiname;
      this.name = "全城";
      //控制全城按钮的高亮条件
      this.addressindex = -1;
      //下拉菜单显式或隐藏函数调用
      this.changshow();
    }
  },

  components: {
    boot
  }
};
</script>

 <style lang="less" scoped>
.pop {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
}

.lists {
  flex-wrap: wrap;
}

.item {
  width: 20.8%;
  text-align: center;
  margin: 5px;
  border: 1px solid #d2d6dc80;
  height: 30px;
  line-height: 30px;
  color: #797d82;
  border-radius: 3px;
}
.color {
  color: #f40;
  border-color: #f40;
}
</style>

