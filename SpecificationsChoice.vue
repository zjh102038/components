<template >
<transition name="opcity">
  <div v-show="flag" class="mark">
    <div>
        <div>
            <dl class="dialog-top">
                <dt>
                    <img src="/1.jpg" alt="">
                </dt>
                <dd>
                    <div>
                        <p><span>￥</span>{{data.price*num}}</p>
                        <span @click="flag=false" class="icon iconfont icon-icon-close">×</span>
                    </div>
                    <p>{{data.goods_name}}</p>
                </dd>
            </dl>
            <div class="dialog-content">
                <p>请选择规则</p>
                <div>
                    <span v-for="(n,i) in weight" :class="{action:i===weightnum}" :key="i" @click="typeDialog(i)">{{n}}</span>
                </div>
            </div>
            <div class="dialog-num">
                <span>购买数量</span>
                <p>
                    <span @click="remove">-</span>
                    <span>{{num}}</span>
                    <span @click="add">+</span>
                </p>
            </div>
        </div>
    </div>
  </div>
  </transition>
</template>
<script>
import {getCookie} from '../utils/cookie'
export default {
   props:['weight','data'],
   data(){
     return {
       flag:false,
       weightnum:0,
       num:1
     }
   },
   methods:{
       remove(){
           this.num--
           if(this.num<=1){
               this.num=1
           }
       },
       add(){
           this.num++
       },
       typeDialog(i){
           this.weightnum=i
       }
   },
   watch:{
       flag(p){
           if(p&&this.num){
               this.$parent.addFlag=true
           }
       }
   },
   mounted(){
       this.$bus.$on('add',()=>{
           if(getCookie('token')){
               this.$http.post('/buyer/cart/add',{
               token:getCookie('token'),
               count:this.num,
               price:this.data.price,
               goods_id:this.$route.query.goods_id
           }).then(res=>{
              this.flag=false
              if(res.code){
                  this.$message.success('添加成功')
              }else{
                  this.$message.warning('请勿重复添加')
              }
           })
           }else{
               let data=JSON.parse(localStorage.data||'[]')
               data.push({
                    count:this.num,
                    price:this.data.price,
                    goods_id:this.$route.query.goods_id
                })
               localStorage.data=JSON.stringify(data)
           }
       })
   }
}
</script>
<style lang="scss" scoped>
@import url('../font/font_h6ksq3n2dqd/iconfont.css');
.opcity-enter-active, .opcity-leave-active {
  transition: opacity .5s;
}
.opcity-enter, .opcity-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.mark{
  width: 100%;
  height: 100%;
  position: fixed;
  top: -50px;
  left: 0;
  z-index: 999;
  background: rgba(0,0,0,.7);
  &>div{
    width: 100%;
    height: 100%;
    position: relative;
        &>div{
            width: 100%;
            height: 300px;
            background: #fff;
            position: absolute;
            bottom: 0;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
               .dialog-top{
                width: 100%;
                height: 100px;
                box-sizing: border-box;
                padding: 10px;
                display: flex;
                border-bottom: 1px solid #f5f4f4;
                dt{
                    flex: 3;
                    img{
                        width: 90%;
                        height: 80%;
                        padding-top: 20px;
                    }
                }
                dd{
                    flex: 7;
                    &>div{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        &>p:nth-of-type(1){
                            height: 25px;
                            display: flex;
                            font-size: 18px;
                            align-items: center;
                            color: #ff8400;
                            &>span{
                                font-size: 12px;
                            }
                        }
                        &>span{
                            width: 20px;
                            height: 20px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: #000;
                            color: #fff;
                            border-radius: 50%;
                            font-size: 5px;
                        }
                    }
                    &>p{
                        font-size: 12px;
                    }
                }
            }
            .dialog-content{
                box-sizing: border-box;
                width: 100%;
                padding: 10px 0;
                border-bottom: 1px solid #f5f4f4;
                &>p{
                    height: 25px;
                    font-size: 12px;
                    padding: 0 10px;
                    line-height: 25px;
                }
                &>div{
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    span{
                        width: 136px;
                        height: 25px;
                        background: #f5f4f4;
                        box-sizing: border-box;
                        margin-left:15px;
                        margin-top:10px;
                        border-radius: 10px;
                        font-size: 12px;
                        text-align: center;
                        line-height: 25px;
                    }
                    .action{
                        background: #7fe3df
                    }
                }
            }
            .dialog-num{
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: space-between;
                box-sizing: border-box;
                padding: 0 10px;
                align-items: center;
                border-bottom: 1px solid #f5f4f4;
                &>span{
                    font-size: 12px;
                }
                &>p{
                    width: 70px;
                    border: 1px solid #ccc;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 5px;
                    color: #7fe3df;
                    &>span:nth-of-type(2){
                        font-size: 12px;
                        color: #000;
                    }
                }
            }
        }
     
  }
}

</style>
