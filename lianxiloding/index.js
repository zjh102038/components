import loading from './loading.vue'
// console.log(loading)
import Vue from 'vue'
let Profile =Vue.extend(loading)
Profile.prototype.open=function(){
    this.flag=true
    this.closes=false
}
Profile.prototype.close=function(){
    this.flag=false
}
let ins= new Profile({
    el:document.createElement('div'),
    watch:{
        flag(_new){
            if(_new){
                document.body.appendChild(this.$el)
            }
            
        },
        closes(_new){
            if(_new){
                document.body.removeChild(this.$el)
            }
        }
    }
})
export default ins