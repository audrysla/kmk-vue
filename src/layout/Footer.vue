<template>
  <footer>
    <div class="inner">
      ⓒ KMK Corp.
    </div>
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
    background:#444;
    .inner{
      display: flex;
      align-items: center;
      justify-content: center;
      color:#fff;
    }
  }
</style>
