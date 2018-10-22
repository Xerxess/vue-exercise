<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import DemoData from "./components/Demo.vue";
import MyDialog from "./components/Dialog.vue";
// import layoutLess from "./less/layout.less";
// import css from "./css-modules/modules.css";
// import mySlot from "./components/slot.vue";

// console.log(css);

// console.log(layoutLess);

export default {
  data: function() {
    return {
      message: "Vue的生命周期"
    };
  },
  components: {
    MyDialog
  },
  render: function(h) {
    const data = {
      attrs: {
        id: "hehe"
      },
      props: {
        mytitle: "hihihi"
      }
    };
    const props = {
      mytitle: "title",
      mycontent: "content"
    };
    let len = 7;

    var Forrender = function() {
      let arry = [];
      [1, 2, 3, 4, 5, 6].forEach(element => {
        arry.push(
          <div>
            <MyDialog {...data} />
            <MyDialog
              // normal attributes or component props.
              id="foo"
              mytitle="abc"
              // DOM properties are prefixed with `domProps`
              // event listeners are prefixed with `on` or `nativeOn`
              // other special top-level properties
              class={{ foo: true, bar: false }}
              style={{ color: "red", fontSize: "14px" }}
              key="key"
              ref="ref"
              // assign the `ref` is used on elements/components with v-for
              refInFor
              slot="slot"
            />
          </div>
        );
      });
      return arry;
    };
    let ifa = 1;
        var iffn = function() {
      if (ifa == 1) {
        return <MyDialog mytitle="lastone" />;
      }
    };
    return (
      <div class="myclass" onClick={this.click}>
        {Forrender()}
        {iffn()}
      </div>
    );
  },
  methods: {
    click() {
      this.message = "我修改了值";
      console.log(this.message);
    }
  },
  beforeCreate: function () {
      console.group('------beforeCreate创建前状态------');
      console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
      console.log("%c%s", "color:red", "message: " + this.message)
      console.log("%c%s", "color:red", "message: " + this.$style)
  },
  // created: function () {
  //     console.group('------created创建完毕状态------');
  //     console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
  //     console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
  //     console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  // },
  // beforeMount: function () {
  //     console.group('------beforeMount挂载前状态------');
  //     console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
  //     console.log(this.$el);
  //     console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
  //     console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  // },
  // mounted: function () {
  //     let _that = this;
  //     console.group('------mounted 挂载结束状态------');
  //     console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
  //     console.log(this.$el);
  //     console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
  //     console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  //     setTimeout(function () {
  //         console.log(_that);
  //         _that.message = "修改data";
  //         console.log("%c%s", "color:red", "message: " + _that.message); //已被初始化
  //     }, 2000);
  // },
  // beforeUpdate: function () {
  //     console.group('beforeUpdate 更新前状态===============》');
  //     console.log("%c%s", "color:red", "el     : " + this.$el);
  //     console.log(this.$el);
  //     console.log("%c%s", "color:red", "data   : " + this.$data);
  //     console.log("%c%s", "color:red", "message: " + this.message);
  // },
  // updated: function () {
  //     console.group('updated 更新完成状态===============》');
  //     console.log("%c%s", "color:red", "el     : " + this.$el);
  //     console.log(this.$el);
  //     console.log("%c%s", "color:red", "data   : " + this.$data);
  //     console.log("%c%s", "color:red", "message: " + this.message);
  // },
  // beforeDestroy: function () {
  //     console.group('beforeDestroy 销毁前状态===============》');
  //     console.log("%c%s", "color:red", "el     : " + this.$el);
  //     console.log(this.$el);
  //     console.log("%c%s", "color:red", "data   : " + this.$data);
  //     console.log("%c%s", "color:red", "message: " + this.message);
  // },
  // destroyed: function () {
  //     console.group('destroyed 销毁完成状态===============》');
  //     console.log("%c%s", "color:red", "el     : " + this.$el);
  //     console.log(this.$el);
  //     console.log("%c%s", "color:red", "data   : " + this.$data);
  //     console.log("%c%s", "color:red", "message: " + this.message)
  // },
};
</script>

      

<style>
.dd {
  margin: 0;
}

.ss {
  margin: 1;
}
</style>
