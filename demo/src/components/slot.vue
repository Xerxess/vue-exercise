<template>
    <div>
<slot></slot>
<slot name="header"></slot>
<slot name="content"></slot>
 {{data.name}}
<slot name="scope" :data="data"></slot>
    </div> 
</template>

<script>
export default {
    data:function(){return {};},
    props:['data']
};
</script>

<style scoped>
</style>