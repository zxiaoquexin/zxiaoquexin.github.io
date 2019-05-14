import Vue from 'vue';
import Vuex from 'vuex';
import cityname from './cityname';
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

const  state = {
    isLogin:true,
    phone:'',
    sessionToken:''
}

const getters ={
    isLogin: state=>state.isLogin,
    phone: state=>state.phone,
    sessionToken:state=>state.sessionToken
}
const mutations = {
    updateisLoing(state,payload){
        state.isLogin=payload;
    },
    updatephone(state,payload){
        state.phone=payload;
    },
    upsessionToken(state,payload){
        state.sessionToken=payload;
    }
}
const actions = {

    updateisLoing({commit},payload){

        commit('updateisLoing',payload);
    }
    
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
    cityname,
    },
    plugins: [createPersistedState({
        storage: window.locahStorage
    })]
})

export default store


// import Vue from 'vue';
// import Vuex from 'vuex';
// Vue.use(Vuex);

// const store = new Vuex.Store({
//      state:{
//         isLogin:false,
//     },

//      getters :{
//         islogin: state=>state.isLogin
//     },
//      mutations :{
//         updateisLoing(state,isLogin){
//         state.isLogin=isLogin
//         }
//     },
//      actions : {
//         updateisLoing({commit},isLogin){
//             commit('updateisLoing',isLogin)
//         }
//     }
// })

// export default store