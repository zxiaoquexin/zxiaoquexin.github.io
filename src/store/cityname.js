// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex)

const store = {
    state:{
        name:'深圳'
    },
    getters:{
        getname: state=>state.name
    },
    mutations:{
        updatename(state,payload){
            state.name=payload
        }
    }
}
export default store