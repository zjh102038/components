<template>
  <div>
    <div>
      <label for="spu">
        <p>分类</p>
        <input type="text" id="spu" v-model="spuVal">
      </label>
      <button @click="delSpu(id)">-</button>
    </div>
    <p>子类</p>
    <skuItem
      v-for="item in skuList"
      :key="item.id"
      @addSku="addSku"
      @delSku="delSku"
      :id="item.id"
      @changeVal="changeVal"
    ></skuItem>
  </div>
</template>
<script>
import skuItem from "./skuItem";
export default {
  props: ["id"],
  data: function() {
    return {
      skuList: [{ id: 0 }],
      skuCount: 1,
      spuVal: "",
      params: []
    };
  },
  components: {
    skuItem
  },
  methods: {
    addSku() {
      this.skuCount++;
      this.skuList.push({
        id: this.skuCount
      });
    },
    delSku(id) {
      this.skuList = this.skuList.filter(item => {
        return item.id !== id;
      });
      
    },
    delSpu(id) {
      this.$emit("delSpu", id);
    },
    changeVal(i) {
      this.$children.map((item, i) => {
        this.params[i] = item.skuVal;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

