// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter)

import App2 from './App2.vue';

import pageIndex from './page/index.vue';
import page1 from './page/page2.vue';
import store from './store/index';



// Vue.config.productionTip = false

const routes = [
  {
    path: '/', component: pageIndex, props: true, beforeEnter: (to, from, next) => {
      console.log('--------beforeEnter---------');
      next();
    }
  },
  { path: '/page1', component: page1 }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

router.beforeEach((to, from, next) => {
  console.log('-----------beforeEach-----------');
  // console.log('from', from);
  // console.log('to', to);
  next();
});
router.beforeResolve((to, from, next) => {
  console.log('-----------beforeResolve-----------');
  // console.log('from', from);
  // console.log('to', to);
  next();
})
router.afterEach((to, from) => {
  console.log('-----------afterEach-----------');
  console.log('from', from);
  console.log('to', to);
})

new Vue({
  router,
  store,
  render: h => h(App2)
}).$mount('#app')