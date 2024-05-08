<template>
  <div id="tabButton">
    <ul>
      <li v-for="(items, i) in testData" :key="i" @click="tabClick(i)" :class="{on : tabActive === i}">
        <button>{{i}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import TestData from '@/assets/testData.js';

export default {
  name: 'TabButton',
  data(){
    return{
      testData: TestData,
      tabActive : 0
    }
  },
  created(){
    this.tabClick('foods');
  },
  methods: {
    tabClick(i) {
      this.tabActive = i;
      // 부모 컴포넌트의 메소드를 호출하려면 $emit을 사용하여 이벤트를 발생시킵니다.
      this.$emit('childMethod', i);  
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #tabButton{
    ul{
      display: flex;
      justify-content: center;
      gap:5px;
      li{
        &.on{
          button{
            color:red;
          }
        }
        button{
          &:active{
            box-shadow: inset 0 6px 6px #ddd;
          }
          &:hover{
            background:linear-gradient(#fff 0, #ddd 100%)
          }
          padding:4px 16px;
          font-size:18px;
          border-radius:10px;
          border:1px solid;
          cursor:pointer;
        }
      }
    }
  }
</style>
