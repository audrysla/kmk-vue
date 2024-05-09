<template>
  <Header />
  <div id="contents">
    <Lnb />
    <router-view class="routerView"/>
  </div>
  <Footer />
</template>

<script>
import './assets/scss/base.scss'
import Header from './layout/Header.vue'
import Lnb from './components/Lnb.vue'
import Footer from './layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Lnb,
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
  }
  #contents{
    margin:0 auto;
    max-width:1280px;
    display: flex;    
    aside{
      width:150px;
      padding: 20px;
    }
    .routerView {
      flex: 1;
      padding: 20px;
      min-height:500px;
      text-align:left;
    }
  }
}
</style>
