<template>
  <aside>
    <ul>
      <li><a href="#">menu1</a></li>
      <li><a href="#">menu2</a></li>
      <li><a href="#">menu3</a></li>
      <li><a href="#">menu4</a></li>
      <li><a href="#">menu5</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'LnbMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  aside{
    li{
      display: block;
      a{
        display:block;
        padding:6px 15px 6px 0;
        text-align:left;
      }
    }
  }
</style>
