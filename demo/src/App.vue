<template>
<div>
    <my-dialog></my-dialog>
</div>
</template>

      

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DemoData from "./components/Demo.vue";
import MyDialog from "./components/Dialog.vue";
import layoutLess from './less/layout.less';
import css from './css-modules/modules.css';

console.log(css);

console.log(layoutLess);

export default {
    components: {
        MyDialog
    }
};
</script>

      

<style>
</style>
