<template>
    <div id="main">
    <ul>
        <li><span class="iconfont icon-jishiben"></span>订单管理
            <router-link to="/order" tag="div"  class="div1">我的订单</router-link>
            <router-link to="/makeGroup" tag="div"  class="div1">我的拼团</router-link>
        </li>
        <li><span class="iconfont icon-zhanghu"></span>账户管理
            <router-link to="/coupon" tag="div"  class="div1">优惠券(0)</router-link>
            <router-link to="/myCollection" tag="div"  class="div1">我的收藏</router-link>
            <router-link to="/myPonits" tag="div"  class="div1">我的积分</router-link>
        </li>
        <li><span class="iconfont icon-gerenxinxi"></span>个人信息
            <div class="div1">个人资料</div>
            <div class="div1">安全设置</div>
            <div class="div1">收货地址</div>
        </li>
        <li><span class="iconfont icon-aixin"></span>服务中心
           <div class="div1">售后管理</div>
        </li>
    </ul>
       
    </div>
</template>
<script>
    export default {
        name:"MyCenterList",
        methods: {
            
        },
    }

</script>
<style scoped>
   #main{
        width: 210px;
        height: 466px;
        border: 1px solid rgb(211, 211, 211);
        display: flex;
        /* justify-content: center; */
        /* align-items: center; */
    }
    li{
        list-style: none;
        font-size: 14px;
        font-weight: bold;
        color: #333;
        margin-bottom: 20px;
        
    }
    .div1{
        font-size: 14px;
        color: #999;
        margin: 10px 0;
        margin-left: 24px;
        /* display: inline-block; */
        /* line-height: inherit; */
    }
    span{
        color:#999 ;
        margin: 0 10px 0 0;
        font-size: 18px;
        
    }
</style>