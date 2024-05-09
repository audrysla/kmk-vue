<template>
  <Header />
  <router-view />
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
  }
}
</style>
