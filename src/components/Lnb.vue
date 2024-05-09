<template>
  <aside>
    <ul>
      <li><a href="#">sub1</a></li>
      <li><a href="#">sub2</a></li>
      <li><a href="#">sub3</a></li>
      <li><a href="#">sub4</a></li>
      <li><a href="#">sub5</a></li>
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
    width:150px;
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
