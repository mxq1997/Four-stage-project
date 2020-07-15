<template>
    <div id="main">
        <div class="h4">我的订单</div>
        <div class="ul">
            <ul>
                <li>全部订单0</li>
                <li>代付款0</li>
                <li>代收货0</li>
                <li>已完成0</li>
                <li>待评价0</li>
            </ul>
            
            <input type="text" placeholder="输入订单号">    
            <button>搜索</button>
    </div>
    <div>
    </div>
        
    <centermiddle class="centermiddle" />
    </div>
</template>
<script>
   import centermiddle from '../centermiddle.vue'
    export default {
        name: "order",
        methods: {

        },
        components: {
            centermiddle,
        }
    }

</script>

<style scoped>
 #main{
    width: 870px;
    height: 123px;
    border: 1px solid rgb(211, 211, 211);
    display: flex;
    flex-direction: column;
}
 .h4{
    font-size: 24px;
    color: #333;
    width: 150px;
    height: 50px;
    /* margin-left: -695px; */
    /* margin-bottom: 1px; */
    margin-top: 30px;
   
    
}
.ul{
    width: 870px;
    height: 56px;
    /* padding-top: 67px; */
   
    margin-top: 10px;
    display: flex;
    align-items: center;
  
}
ul{
    width: 520px;
    height: 50px;
    /* border: 1px solid black;  */
    display: flex;
    align-items: center;
    margin-left: -16px;
   
}
li{
    list-style: none;
    margin-right: 30px;
    height: 48px;
    text-align: center;
    line-height: 48px;   
}
li:hover{
    border-bottom: 3px solid blue;
}
input{
    width: 152px;
    height: 26px;
    border-radius: 2px 2px 0 0;
}
button{
    width:50px;
    height: 32px;
    border-radius: 5px;
}  
</style>