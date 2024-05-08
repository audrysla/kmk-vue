<template>
  <Header />
  <!-- <h2>kmk-vue 깃 연동</h2>
  <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-view />
</template>

<script>
import '@/assets/scss/base.scss'
// import HelloWorld from './components/HelloWorld.vue'
import Header from './layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header
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
