import Vue from 'vue'
function Validator(a,v){

    let Modifiers=[
        {
            type:'number',
            fun(value){
                return /\d+/.test(value)
            },
            msg:'请输入数字'
        },
        {
            type:'required',
            fun(value){
                return value !='' && value != null && value != undefined
            },
            msg:'内容不能为空'
        },
        {
            type:'email',
            fun(value){
                return /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value)
            },
            msg:'邮箱输入有误'
        },
    ]
Vue.directive('direcone',{
    bind(el,binding,vnode){
      let {modifiers}=binding
      el.addEventListener('blur',function(){

        // vnode.context.spans='abccd'
        let res=[]
        Object.keys(modifiers).map(item=>{
        //   if(item==='number'){
        //     return /\d+/.test(this.value)
        //   }else if(item==='required'){
        //     return this.value!=''
        //   }
          return Modifiers.find(items=>{
                if(item==items.type){
                    if(!items.fun(this.value)) {
                       return res.push(items) 
                    }
                }    
                
            })
        })
        // console.log(res)
        if(res.length>0){
            let msgs=''
            res.forEach(item=>msgs+="&"+item.msg)
            vnode.context.spans=msgs
            el.classList.remove('success')
            el.classList.add('errer')
        }else{
            vnode.context.spans=''
          el.classList.remove('errer')
          el.classList.add('success')
        }
      })
    },
    inserted(){
    },
    updata(){
    }
})
}

export default  Validator