<template>
    <div>
        <button @click="handadd">SKU</button>
        <div>
            <ol-li v-for="v in Add" :key="v.AddId" :vals="v.val" :child="v.child" :id="v.prantid" v-on:childAdd="childAdd" v-on:vals="vals"></ol-li>
        </div>
        <Checked  v-model="checkFlag"></Checked>
        <Checked  v-model="checkFlag2"></Checked>
        <Checked  v-model="checkFlag3"></Checked>
        <button @click="handSubmit">提交</button>
    </div>
</template>
<script>
import Olli from './olli';
import Checked from './checked'
export default {
    data(){
        return{
            Add:[],
            AddId:0,
            checkFlag:false,
            checkFlag2:false,
            checkFlag3:false,
            childId:0,
            Sku:[]
        }
    },
    components:{
        "ol-li":Olli,
        Checked
    },
    methods:{
        handadd(){
            let addinput={
                prantid:this.AddId++,
                input:'input',
                val:'',
                child:[{
                    childid:this.childId,
                    input:'input',
                    val:'',
                }]
            }
            this.Add.push(addinput)
        },
        childAdd(id){
            this.Add[id].child.push({
                childid:++this.childId,
                input:'input'
            })
        },
        handSubmit(){
        //    { "group": "网络", //组名称 
        //     "params": [ // 记录规格成员
        //     "4G",
        //     "3G",
        //     "2G"
        //     ]}
            this.Add.map(item=>{
                this.Sku.push({
                    group:item.val,
                    params:item.child.map(items=>items.val)
                })
            })
            console.log(this.Sku)
        },
        vals(id,vals){
            this.Add[id].val=vals
        }
      
    }
}
</script>
<style lang="scss" scoped>

</style>
