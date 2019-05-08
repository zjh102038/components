<template>
    <transition name="zlianxi" @after-leave="loadingfn">
        <div v-show="flag"  class="zlianxi-loading">
            <div><img src="/huojian.gif" alt=""></div>
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{
            flag:false,
            closes:false
        }
    },
    methods:{
        loadingfn(){
            this.closes=true
        }
    }
}
</script>

<style lang="scss" scoped>
.zlianxi-loading{
    width: 100%;
    height: 91%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.7);
    z-index: 99;
    &>div{
        color: #fff;
       &>img{
           width: 100px;
           height: 100px;
           position: absolute;
           left: 50%;
           top:50%;
           transform: translate(-50%,-50%)
       }  
    }
}
.zlianxi-enter{
    opacity: 0;
}
.zlianxi-enter-to{
    opacity:1;
}
.zlianxi-enter-active,.zlianxi-leave-active{
    transition: opacity 3s
}
.zlianxi-leave{
    opacity:1;
}
.zlianxi-leave-to{
    opacity:0;
}
</style>
