<template>
  <div id="main">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  components:{
    HelloWorld
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #main{
    justify-content: center;
  }
</style>
