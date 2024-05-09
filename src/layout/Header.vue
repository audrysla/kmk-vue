<template>
  <div id="header">
    <header>
      <h1><router-link to="/">Home</router-link></h1>
      <ul class="gnb">
        <li :class="{ active: $route.path === '/sub1' }"><router-link to="/sub1">Sub1</router-link></li>
        <li :class="{ active: $route.path === '/sub2' }"><router-link to="/sub2">Sub2</router-link></li>
        <li :class="{ active: $route.path === '/sub3' }"><router-link to="/sub3">Sub3</router-link></li>
        <li :class="{ active: $route.path === '/sub4' }"><router-link to="/sub4">Sub4</router-link></li>
        <li :class="{ active: $route.path === '/sub5' }"><router-link to="/sub5">Sub5</router-link></li> 
      </ul>
      <div class="util">
        <a href="#">로그인</a>
        <a href="#">회원가입</a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
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
#header{
  background-color: #907bf0;
  header{
    margin:0 auto;
    max-width:1280px;
    height:40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#fff;
    h1{
      font-size:18px;
      a{
        color:inherit;
      }
    }
    .gnb{
      display:flex;
      justify-content: center;
      gap:10px;
      li{
        &.active a{
          background: #42b983;
          color:#fff;
          border-color:#42b983;
        }
        a{
          padding:4px 16px;
          border-radius:20px;
          color: inherit;
        }
      }
    }
    h1, .util{
      width:100px;
    }
    .util{
      display: flex;
      gap:10px;
      a{
        font-size:12px;
        color:inherit;
      }
    }
  }
}
</style>
