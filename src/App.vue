<template>
  <Header />
  <div id="contents">    
    <router-view class="routerView"/>
  </div>
  <Footer />
</template>

<script>
import './assets/scss/base.scss'
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h2{
    color:red;
    margin-bottom:20px;
  }
  h3{
    margin-bottom:20px;
  }
  #contents{
    margin:0 auto;
    max-width:1280px;
    
    .routerView {
      display: flex;    
      padding: 20px 0;
      min-height:500px;
      text-align:left;
    }
  }
}
</style>
