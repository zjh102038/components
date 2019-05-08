<template>
    <ol >
        <span >type:</span><input v-model="vals" @blur="handVals" type="text">
        <li v-for="v in child" :key="v.childid" >
            <span>value:</span><input type="text" v-model="v.val"><span @click="handemit">+</span>
        </li>
    </ol>
</template>
<script>
export default {
    props:['child',"id"],
    data(){
        return{
            vals:''
        }
    },
    methods:{
        handemit(){
            this.$emit('childAdd',this.id)
        },
        handVals(){
            this.$emit('vals',this.id,this.vals)
        }
    },
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
ol{
    margin-top:20px; 
    width: 100%;
}
li{
    width: 100%;
    text-align: center;
}
input{
    border: 1px solid #000;
}
</style>

