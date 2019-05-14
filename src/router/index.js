import Vue from 'vue'
import VueRouter from 'vue-router'
import $store from '../store/index';

Vue.use(VueRouter)
const routes=[
    {
     path:'/',
     redirect:'/film/hotlist',
    },
    //首页
    {
     path:'/film',
     redirect:'/film/hotlist',
     component:()=>import('../views/film'),
     children:[
         {
        path:'hotlist',
        component:()=>import('../views/film/hotlist'),
     },
         {
        path:'cominglist',
        component:()=>import('../views/film/cominglist'),
     },
     {
        path:'/moviedetails/:filmId',
        component:()=>import('../views/moviedetails'),
     },
     
    ]
},

    //影院
    {
     path:'/ciname',
     component:()=>import('@/views/ciname'),
},
    {
     path:'/login',
     component:()=>import('@/views/login'),
},
    //城市
{
    path:'/cityList',
    component:()=>import('@/views/cityList'),
},
    //拼团
    {
     path:'/pintuan',
     component:()=>import('@/views/pintuan'),
},
    //我的
    {
     path:'/my',
     component:()=>import('@/views/my'),
     redirect:'/my/center',
     children:[
         {
         path:'set',
         meta:{
         needLogin:true
         },
         component:()=>import('@/views/My/set.vue')
     },
     {
        path:'center',
        component:()=>import('@/views/My/center')
    },
    ]
},
    //订单
    {
    path:'/oder',
    component:()=>import('@/views/oder'),
    redirect:'/oder/oderlist',
    children:[
        //订单详情
        {
            path:'oderdetails/:orderId',
            meta:{
            needLogin:true
            },
            component:()=>import('@/views/oderlists/oderdetails')
        },
        //订单列表
        {
            path:'oderlist',
            meta:{
                needLogin:true
                },
            component:()=>import('@/views/oderlists/oderlist')
        },
    ]
},

    //404错误
    {
     path:'*',
     component:()=>import('@/views/NotFound/notfont'),
},
]
    
const router =new VueRouter({
    routes:routes
});
router.beforeEach((to, from, next) => {
    let isLogin= $store.state.isLogin;
    if(to.meta.needLogin && isLogin){
        next({
            path:'/login'
        })
    }else{
        next()
    }
})
export default router;