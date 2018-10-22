<template>
<div>
  <a @click.prevent="goback">返回</a> 
  <a href="javascript:;" @click="openDialog">弹出</a>
  <my-dialog :v-show="isShowDialog"></my-dialog>
</div>
</template>

<script>
import MyDialog from "../components/Dialog.vue";
export default {
  data() {
    return {
      isShowDialog: false
    };
  },
  components: {
    MyDialog
  },
  methods: {
    openDialog() {
      this.isShowDialog = true;
    },
    goback(){
        this.$router.go(-1);
    }
  }
};
</script>

<style lang="less">
</style>
