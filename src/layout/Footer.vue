<template>
  <footer>
    푸터
  </footer>
</template>

<script>
export default {
  name: 'FooterPage',
  props: {
    msg: String
  },
  data() {
    return{

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  footer{
    margin:0 auto;
    max-width:1280px;
    height:40px;
  }
</style>
