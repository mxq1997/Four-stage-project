<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <display />
  </div>
</template>

<script>
  import display from './components/display.vue'
  export default {
  name: 'App',
  components:{
    display,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  width: 1200px;
  height: 1000px;
  margin: 0 auto
}
.mycenterlist{
  margin-right: 50px;
}
.order{
  margin-bottom: 15px;
}

</style>
