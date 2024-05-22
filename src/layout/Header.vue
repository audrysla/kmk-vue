<template> 
  <header>
    <div class="inner">
      <div class="all_menu">
        <button @focus="allMenuShow"><i class="fa-solid fa-bars"></i></button>
        <div class="menu_box" v-if="allMenuOpen" @mouseleave="allMenuHide" >
          <ul>
            <li v-for="(item, index) in testData" :key="index">
              <a href="#" @mouseenter="subMenuShow(index)" @focus="subMenuShow(index)">{{item.cate}}</a>
              <ul v-if="subMenuOpen === index">
                <li v-for="(subItem, i) in item.sub" :key="i"><a href="#">{{subItem}}</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="h_center">
        <h1><router-link to="/">Home</router-link></h1>
        <ul class="gnb">
          <li :class="{ active: $route.path === '/sub1' }"><router-link to="/sub1">MENU1</router-link></li>
          <li :class="{ active: $route.path === '/sub2' }"><router-link to="/sub2">MENU2</router-link></li>
          <li :class="{ active: $route.path === '/sub3' }"><router-link to="/sub3">MENU3</router-link></li>
          <li :class="{ active: $route.path === '/sub4' }"><router-link to="/sub4">MENU4</router-link></li>
          <li :class="{ active: $route.path === '/sub5' }"><router-link to="/sub5">MENU5</router-link></li> 
        </ul>
      </div>
      <div class="util">
        <a href="#">로그인</a>
        <a href="#">회원가입</a>
      </div>
    </div>
  </header>
</template>

<script>
import TestData from '@/assets/testData.js';
export default {
  name: 'HeaderPage',
  props: {
    msg: String
  },
  data() {
    return{
      allMenuOpen : false,
      subMenuOpen : false,
      testData: TestData.category,
    }
  },
  methods: {
    allMenuShow() {
      this.allMenuOpen = !this.allMenuOpen;
    },
    subMenuShow(index){
      this.subMenuOpen = index;
    },
    subMenuHide(){
      this.subMenuOpen = null;
    },
    allMenuHide() {
      this.allMenuOpen = false;
      this.subMenuOpen = null;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
header{    
  background-color: #907bf0;
  .inner{
    height:70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#fff;
    .all_menu{
      text-align: left;
      button{
        color:inherit;
        font-size:20px;
      }
    }
    .menu_box{
      z-index: 1000;
      width:180px;
      position:absolute;
      top:70px;
      background:#fff;
      color:#333;
      letter-spacing: -1px;
      > ul > li{
        &:focus-within > a,
        &:hover > a{
          color:#907bf0;
          font-weight: bold;
          &:after{
            content:'\f105';
            font-family: "Font Awesome 6 free";
            font-weight: 900;
            margin-bottom: -1px;
            color:inherit;
          }
        }
      }
      ul{
        padding:15px;
        border:1px solid #907bf0;
        border-top:0;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, .1);
        li{
          display: flex;
          height:32px; 
          a{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
          }
          ul{
            position:absolute;
            left:179px;
            top:0;
            width:180px;
            background: #fff;
            > li > a:focus,
            > li > a:hover{
              color:#907bf0;
              font-weight:bold;
            }
          }
        }
      }
    }
    .h_center{
      display: flex;
    }    
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
