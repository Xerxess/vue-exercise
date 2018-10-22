import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters:{
        doneTodos: state => {
            return state.count
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        increment (context) {
          context.commit('increment')
        }
      }
});

export default store;