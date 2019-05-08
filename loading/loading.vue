<template>
  <transition>
    <div class="mark" v-show='show'>
    <div class="loading">
      <img src="../../assets/loading.gif" alt="">
    </div>
  </div>
  </transition>
</template>
<script>
export default {
  props:['show']
}
</script>
<style lang="scss" scoped>
.v-enter-active,.v-leave-active{
  transition: opacity .5s;
}
.v-enter,.v-leave-active{
  opacity: 0;
}
.mark{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .loading{
    width: 200px;
    height: 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>


