      <template>
        <div id="app">
          <img src="./assets/logo.png">
          <HelloWorld v-bind:msg="msg"/>
          <demo-data @click2="doSomething2" @click="doSomething2" @my-event="doSomething" :name2="msg" data-date-picker="activated" ></demo-data>
        </div>
      </template>

      <script>
      import HelloWorld from "./components/HelloWorld.vue";
      import DemoData from "./components/Demo.vue";
      import Vue from "vue";

      var data = { a: 1, b: 2 };

      // 直接创建一个实例
      var vm = new Vue({
        data: data
      });
      console.log(vm);
      vm.a; // => 1
      vm.a = 2;
      vm.$data === data; // => true

      export default {
        name: "app",
        data:function(){
          return {
            msg:'hello world'
          }
        },
        components: {
          HelloWorld,
          DemoData
        },
        methods: {
          doSomething: function() {
            //console.log(this);
            this.msg = "demoDoSomething";
          },
          doSomething2:function(){
            alert('doSomething2');
          }
        }
      };
      </script>

      <style>
      #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
      }
      </style>
