import dialog from './dialog.vue';
import Vue from 'vue';

let Profile=Vue.extend(dialog)

Profile.prototype.open=function(){
    this.flag=true
}
Profile.prototype.close=function(){
    this.flag=false
}

let ins=new Profile({
    el:document.createElement('div'),
    watch:{
        flag(_new){
            document.body.appendChild(this.$el)
        }
    }
})
export default ins;