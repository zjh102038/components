<template>
    <div v-show="flag" @click="slot" class="dialog-lianxi">
        <transition  name="dialog">
            <div v-show="flag" class="dialog-a">
                <p @click.stop="ok">确认</p>
                <p @click.stop="no">取消</p>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return{
            flag:false
        }
    },
    methods:{
        ok(e){
            
            this.flag=false
            console.log("确认")
        },
        no(){
            this.flag=false
            console.log('取消')
        },
        slot(){
             this.flag=false
            console.log('slot')
        }
    }
}
</script>
<style lang="scss" scoped>
.dialog-lianxi{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    z-index: 999;
    background: rgba(0,0,0,.7);
}
.dialog-a{
    width: 100%;
    height: 100px;
    background: #fff;
    position: absolute;
    bottom: 0; z-index: 9999;
    p{
        width: 100%;
        height: 49px;
        text-align: center;
        line-height: 49px;
    }
    p:nth-of-type(1){
        border-bottom: 1px solid #eec
    }
}
.dialog-enter{
    height: 0;
}
.dialog-enter-to{
    height: 100px;
}
.dialog-enter-active,.dialog-leave-avtive{
    transition: height 1s;
}
.dialog-leave{
    height: 100px;
}
.dialog-leave-to{
    height: 0px;
}
</style>

