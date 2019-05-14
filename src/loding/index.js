import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
    
    export const loading=()=>{
        Toast.loading({
            duration: 0, //持续展示tosat
            forbidClick: true,  //禁用背景点击
            mask: true, //蒙层
            message: '加载中...' //展示文字
          });
    };

    export const clear = () => {
        Toast.clear();
    }