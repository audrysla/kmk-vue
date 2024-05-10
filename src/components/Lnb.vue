<template>
  <aside>
    <ul>
      <li><router-link to="/sub1">sub1</router-link></li>
      <li><router-link to="/sub1">sub2</router-link></li>
      <li><router-link to="/sub1">sub3</router-link></li>
      <li><router-link to="/sub1">sub4</router-link></li>
      <li><router-link to="/sub1">sub5</router-link></li>
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
