<template>
  <div id="app">
    <div style="width:1080px;margin:0 auto;">
      <Banner :banners="banners" :da="2000"></Banner>
    </div>
   
  </div>
</template>

<script>
 import Banner from './components/Banner.vue'
export default {
  components:{
    Banner:Banner,
  },
  data(){
    return {
      banners:[
        {
          url:require('../src/assets/images/banner1.jpg'),
          link:'https://www.baidu.com'
        },
        {
          url:require('../src/assets/images/banner2.jpg'),
          link:'https://www.baidu.com'
        },
        {
          url:require('../src/assets/images/banner3.jpg'),
          link:'https://www.baidu.com'
        }
      ]
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
