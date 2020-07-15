<template>
    <div id="main">
        <h4>我的积分</h4>
    <div class="ul">
        <ul>
            <li>可用积分</li>
        </ul>
        <h4>0</h4>
        <span></span>
        
    </div>
        
    </div>
</template>
<script>
    export default {
        name:"makeGroup"

    }

</script>

<style scoped>
#main{
    width: 870px;
    height: 123px;
    border: 1px solid rgb(211, 211, 211);
}
h4{
    font-size: 24px;
    color: #333;
    margin-left: -695px;
    margin-bottom: 7px;
}
.ul{
    width: 870px;
    height: 56px;
    display: flex;
    align-items: center;
  
}
ul{
    width: 520px;
    height: 50px;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
   
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