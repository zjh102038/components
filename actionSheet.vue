<template>
  <div class="wrapper">
    <transition name="mark">
      <div class="mark" v-show="flag"></div>
    </transition>
    <transition name="sheet">
      <div class="action-sheet" v-show="flag">
        <p v-for='(item,ind) in skuList' :key="ind" @click="hideSheet(item)">{{item}}</p>
      </div>
    </transition>
  </div>
</template>
<script>
import '@/plugins/getPosition'
export default {
  props: {
    flag: {
      type: Boolean,
      required: true,
      default: false
    },
    skuList:{
        type:Array,
        required:true
    }
  },
  data() {
    return {
        
    };
  },
  methods:{
      hideSheet(item){
          this.$emit('hideSheet',item)
      }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  flex:1;
  position: relative;

  .mark {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    background: rgba(0, 0, 0, 0.7);
  }
  .action-sheet {
    width: 100%;
    max-height: 50%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: white;
    p {
      background: white;
      width: 100%;
      height: 30px;
      border-bottom: 1px solid #eee;
      line-height: 30px;
    }
  }
}

.mark-enter,.mark-leave-to {
  opacity: 0;
}
.mark-enter-to ,.mark-leave{
  opacity: 1;
}
.mark-enter-active,.mark-leave-active {
    transition:opacity 1s
}
.sheet-enter,.sheet-leave-to{
    transform: translate3d(0, 100%, 0);
}
.sheet-enter-to,.sheet-leave{
    transform: translate3d(0, 0, 0);
}
.sheet-enter-active,.sheet-leave-active{
    transition:transform 1s ease-out
}
</style>
