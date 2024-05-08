<template>
  <div id="tabContent">
    <ul>
      <li v-for="(items, i) in tabData" :key="i">
        {{ items }}
      </li>
    </ul>
  </div>
</template>

<script>
// import TestData from '@/assets/testData.js';

export default {
  name: 'TabContent',
  props : ['tabData'],
  data(){
    return{
      
    }
  },
  methods:{
    
  },
  created() {
    // console.log('menu props:', this.tabData);
  }
}
</script>

<style lang="scss">
  #tabContent{
    text-align:center;
    ul{
      margin:0;list-style: none;
      padding:0;
      width:300px;
      display: inline-grid;      
      grid-template-columns: repeat(3, 1fr); /* 3개의 열로 설정 */
      grid-auto-rows: minmax(100px, auto); /* 행의 높이 설정 */
      gap:0;
      li{
        margin:-1px 0 0 -1px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border:1px solid;
        background: #fff;
      }
    }
  }
</style>
