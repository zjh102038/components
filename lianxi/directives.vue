<template>
    <div >
        <input type="text" class="input" v-direcone.number.required.email v-model="text" @change="texts">
        <div>{{spans}}</div>
        <div class="positions" v-drag></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            text:'',
            spans:''
        }
    },
    methods:{
        texts(){
        }
    },
    mounted(){
       
    }
}
</script>
<style scoped>
.input{
    outline: none;
}
.errer{
    border:1px solid red;
}
.success{
    border: 1px solid greenyellow;
}
.positions{
    position: absolute;
    width: 150px;
    height: 150px;
    background: red;
}
</style>
