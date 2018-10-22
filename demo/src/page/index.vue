<template>
<div>
  <router-link to="/page1">跳转</router-link> 
  <a href="javascript:;" @click="openDialog">弹出</a>
  <my-dialog @click="native" @my-event="myClick" v-show="isShowDialog"></my-dialog>
<div v-show="AsyncComponent">
<component v-bind:is="AsyncComponent"></component>
<code>
  !function(){
    console.log('已经执行了这块code;');
  }();
</code>
  </div>
  <p :style="{color:'red',margin:margin,display:'flex',transition:'all .5s'}">this is p</p>
</div>
</template>

<script>
import MyDialog from "../components/Dialog.vue";
export default {
  data() {
    return {
      isShowDialog: false,
      AsyncComponentStr: "",
      val: "",
      newdata: {
        a: "newdata-a"
      },margin:'10px'
    };
  },
  components: {
    MyDialog,
    AsyncComponent: () => import("../components/AsyncComponent")
  },
  beforeMount() {
    //   this.$on('myClick',function(){
    //       console.log('abc');
    //   });
    console.log(this);
  },
  computed: {
    AsyncComponent: {
      get() {
        return this.AsyncComponentStr;
      },
      set(value) {
        this.AsyncComponentStr = "AsyncComponent";
      }
    },
    watchContent: {
      get() {
        return "watchContent";
      },
      set(value) {
        this.watchContentItem = "watchContentItem";
      }
    }
  },
  methods: {
    openDialog() {
      this.isShowDialog = true;
      this.AsyncComponent = true;
      this.AsyncComponent = "AsyncComponent";
      this.val = "1";
      this.newdata.a = "2";
      this.watchContent = "3";
    },
    myClick(...agr) {
      console.log(this);
      console.log(agr);
      console.log("myClick");
    },
    native() {
      console.log(native);
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("-----------beforeRouteEnter----------");
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("-----------beforeRouteUpdate----------");
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("-----------beforeRouteLeave----------");
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next();
  },
  watch: {
    val: function() {
      console.log(`val改变为${this.val}`);
    },
    "newdata.a": function() {
      console.log(`newdata.a改变为${this.newdata.a}`);
    },
    watchContent() {
      console.log("watchContent改变了");
    }
  }
};
</script>

<style lang="less">
.a{
  transition: all .5s;
}
</style>
