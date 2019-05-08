import Loading from './loading.vue';
import Vue from 'vue';
const loadingConstructor = Vue.extend(Loading);
let instance = new loadingConstructor({
  el:document.createElement('div')
})
instance.show = false;
const loading = {
  show(el){
    instance.show = true;
    el.appendChild(instance.$el);
  },
  hide(el){
    instance.show = false;
    el.removeChild(instance.$el);
  }
}


export default {
  install(Vue){
    Vue.prototype.$loading = loading
  }
}
