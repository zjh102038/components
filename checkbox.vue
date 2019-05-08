<template>
    <div :class="checked ? 'checkbox active' : 'checkbox'" @click="addcheck">
      <i class="icon iconfont icon-dui" v-if='checked'></i>
    </div>
</template>
<script>
export default {
  props:['checked','index','isall'],
  methods:{
    addcheck(){
      if(this.isall){
        this.$emit('addAllCheck')
      }else{
        this.$emit('addcheck',this.index)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.checkbox{
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #ccc;
  &.active{
    background: #5ADAD0;
  }
  i.icon{
    font-size: 12px;
    color: white;
  }
}
</style>


