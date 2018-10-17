<template>
<div>
    <my-dialog></my-dialog>
    <my-slot :data="{name:'小明'}">
        <h1>slotContent</h1>
        <template slot="header">
    <h1>Here might be a page title</h1>
  </template>
  <p slot="content" class="a">slotcontent{{slotss}}</p>
  <template slot="scope" slot-scope="myscope"> 
     <span>{{myscope.data.name}}</span> 
  </template>
    </my-slot>
</div>
</template>

      

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DemoData from "./components/Demo.vue";
import MyDialog from "./components/Dialog.vue";
import layoutLess from './less/layout.less';
import css from './css-modules/modules.css';
import mySlot from './components/slot.vue';

console.log(css);

console.log(layoutLess);

export default {
    data:function(){
        return {
            slotss:'myslot'
        }
    },
    methods:{
        log:function(...arg){
            console.log(arg);
        }
    },
    components: {
        MyDialog,
        mySlot
    }
};
</script>

      

<style>
</style>
