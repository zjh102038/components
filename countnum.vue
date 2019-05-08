<template>
  <div class="count-num">
    <div class="reduce" @click="reduce">
      -
    </div>
    <span>{{num}}</span>
    <div class="add" @click="add">
      +
    </div>
  </div>
</template>
<script>
export default {
  props:['id','index','count'],
  data(){
    return {
      num:1
    }
  },
  created(){
    this.num = this.count
  },
  methods:{
    reduce(){
      this.num--
      if(this.num <= 1){
        this.num = 1;
      }
      this.$emit('reduce',this.num,this.id,this.index)
    },
    add(){
      this.num++
      this.$emit('add',this.num,this.id,this.index)
      
    }
  }
}
</script>
<style lang="scss" scoped>
.count-num{
  width: 70px;
  height: 30px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  align-items: center;
  .reduce,.add{
    color: #5ADAD0;
    font-size: 17px;
  }
}
</style>


