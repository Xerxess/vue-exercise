<template>
<div>
  {{count}}<br>
  {{countAlias}}<br>
  {{countPlusLocalState}}<br>
  {{mygetter}}
    <my-pagination name="Pagination" :records="10000" v-model="page" :per-page="100" @paginate="myCallback"></my-pagination>
    <my-dialog></my-dialog>
  <router-view></router-view>
  {{info|filter1|filter2|filter3('first','second')}}

</div>
</template>

<script>
import { mapState } from "vuex";
import Pagination from 'vue-pagination-2';
import MyDialog from "./components/Dialog.vue";
import bootstrap from 'bootstrap';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
console.log(MyDialog);
export default {
  data() {
    return {
      info: "myName",
      test: "test",
      localCount: 99,
      page:10
    };
  },
   components: {
    MyDialog,
    'my-pagination':Pagination
  },
  computed: {
    mygetter() {
      return this.$store.getters.doneTodos;
    },
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: "count",

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.count + this.localCount;
      }
    })
  },
  beforeMount() {
    console.log(this.$store.state.count);
  },
  filters: {
    filter1(...arg) {
      console.log(arg);
      return "filter1";
    },
    filter2(...arg) {
      console.log(arg);
      return "filter2";
    },
    filter3(...arg) {
      console.log(arg);
      return "filter3";
    }
  },
  methods:{
    myCallback(){
      console.log('分页点击');
    }
  }
  
};
</script>

<style lang="less">
</style>
