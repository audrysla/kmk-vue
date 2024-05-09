<template>
  <div id="sub1">    
    <Lnb />
    <div class="subContent">
      <h2>서브페이지 1입니다.</h2>
    </div>
  </div>
</template>

<script>
import Lnb from '../components/Lnb.vue'

export default {
  name: 'SubPage1',
  components :{
    Lnb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #sub1{
    
  }
</style>