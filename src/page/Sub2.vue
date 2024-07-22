<template>
  <div id="sub2" class="routerView">
    두번째 서브페이지 <br/>간단한 탭 기능을 만들어 봄.
  </div>
  <section>
    <button 
      v-for="(el, index) in tabs" :key="index" 
      :class="{on : activeTab === index}"
      @click="activeTab = index"
    >{{el.name}}
    </button>
    <div v-if="activeTab === 0">
      개인 결과 탭
    </div>
    <div v-if="activeTab === 1">
      팀 결과 탭
    </div>
  </section>
</template>

<script>
export default {
  name: 'SubPage2',
  data() {
    return {
      activeTab: 0,
      tabs:[
        {name : '개인별'},
        {name : '팀별'}
      ]
    };
  },
  methods:{
    tabSelect(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #sub2{
    
  }
  section{
    button{
      display:inline-block;
      margin:0 10px;
      font-size:16px;
      &.on{
        font-weight:bold;
        border-bottom:1px solid;
      }
    }
    div{
      border:1px solid;
      padding:15px;
      margin-top:10px;
    }
  }
  
</style>
