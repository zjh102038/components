<template>
  <div>
    <input type="text" id="sku" v-model="skuVal" @change="changeVal(id)">
    <button @click="addSku" v-if="id==0">+</button>
    <button @click="delSku(id)" v-else>-</button>
  </div>
</template>
<script>
export default {
    props:['id'],
    data:function(){
        return {
            skuVal:''
        }
    },
    methods:{
        addSku(){
            this.$emit('addSku')
        },
        delSku(id){
            this.$emit('delSku',id)
        },
        changeVal(i){
            this.$emit('changeVal',i)
        }
    }
};
</script>
<style lang="scss" scoped>
</style>

