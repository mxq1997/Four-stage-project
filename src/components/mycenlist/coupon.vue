<template>
    <div id="main">
        <div class="h4">优惠券</div> 
    <div class="ul">
        <ul>
            <li>已使用</li>
            <li>未使用</li>
            <li>已过期</li>
            
            
        </ul>
    </div>
        
    </div>
</template>
<script>
    export default {
        name:"coupon"

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
</style>