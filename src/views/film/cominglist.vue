<template>
    <div>
    <swiper :images='images'></swiper>
    <tap who='coming'></tap>
    <List :filmlist='filmlist' who='coming'></List>
    <boot></boot>
    </div>
</template>

<script>
import swiper from './swiper';
import tap from './tap';
import List from './list';
import boot from '@/components/boot';
export default {
     data(){
     return{
         filmlist:[],
         images:[]
     }
    },
    methods:{
     getdata(){
         let url='http://132.232.94.151:3000/api/film/getList?type=2';
         this.axios.get(url).then(res=>{
             this.filmlist=res.data.films;
             this.images=res.data.banners
            //  console.log(this.filmlist)
         })
     }
    },
    created(){
     this.getdata()
    },
    components:{
        swiper,
        tap,
        List ,
        boot,
    }

}
</script>

 <style lang='less' scoped>
 

</style>

