import Vue from 'vue'
function Drag(){
    Vue.directive('drag',{
        bind(el){
            console.log(el)
            el.onmousedown=(e)=>{
                let offX=e.offsetX
                let offY=e.offsetY
                console.log(e.pageY)
                console.log(offY)
                el.onmousemove=(e)=>{
                   let moveX=e.pageX-offX
                   let moveY=e.pageY-offY
                    el.style.left=moveX+"px"
                    el.style.top=moveY+"px"
                }
            }
            el.onmouseup=()=>{
                el.onmousemove=null
            }
        }
    })
}
export default Drag