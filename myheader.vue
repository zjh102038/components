<template>
  <header>
    <span @click="back"><i class="icon iconfont icon-angle-left"></i></span>
    <p>
      {{title}}
    </p>
    <slot></slot>
  </header>
</template>
<script>
export default {
  props:['title'],
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
header{
  width: 100%;
  height: 44px;
  display: flex;
  background: black;
  justify-content: space-between;
  color: white;
  align-items: center;
  padding: 0 10px;
  i.icon{
    font-size: 20px;
  }
}
</style>


