<template>
    <span :class="styleObj" @click="toggleChecked"></span>
</template>
<script>
export default {
    model:{
        prop:'checkFlag',
        event:'input'
    },
    props:['checkFlag'],
    computed:{
        styleObj(){
            return{check:true,checked:this.checkFlag}
        }
    },
    methods:{
        toggleChecked(){
            this.$emit('input',!this.checkFlag)
        }
    }
}
</script>
<style scoped>
.check{
    position: relative;
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid #ccc;
}
.checked{
    background: green;
    border: none;
    box-sizing: border-box;
}
.checked::after{
    content: '';
    position: absolute;
    width: 8px;
    height: 3px;
    border-bottom: 2px solid #fff;
    border-left:2px solid #fff;
    transform:rotate(-45deg);
    top:4px;
    left: 2px;
}
</style>
