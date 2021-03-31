import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.use(Vuex)

import persisted from 'vuex-persistedstate'
Vue.use(Vuex)
Vue.use(persisted)

export default new Vuex.Store({
  plugins: [persisted()],
  state: {
    flag: true,
    // 列表数据
    a1: [],
    a2: [],
    a3: [],
    a4: [],
    a5: [],
    a6: [],
    a7: [],
  },
  mutations: {
  

    zhuangt(state, obj) {
      
      state.flag = obj
    },
    
    aa(state) {
      state.flag = true

    },
    tj(state, obj) {
      if(obj.i==0){
        state.a1.push(obj.val)
      }else  if(obj.i==1){
        state.a2.push(obj.val)
      }else  if(obj.i==2){
        state.a3.push(obj.val)
      }else  if(obj.i==3){
        state.a4.push(obj.val)
      }else  if(obj.i==4){
        state.a5.push(obj.val)
      }else  if(obj.i==5){
        state.a6.push(obj.val)
      }else  if(obj.i==6){
        state.a7.push(obj.val)
      }
     
    }
  },
  actions: {
  },
  modules: {
  }
})
