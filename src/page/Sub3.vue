<template>
  <div id="sub3">
    <TabButton @childMethod="tabClick"/>    
    <h2>{{ tabName }}</h2>
    <TabContent :tabData="testData[tabName]" />
  </div>
</template>

<script>
import TestData from '@/assets/testData.js';
import TabButton from '@/components/tab/TabButton.vue'
import TabContent from '@/components/tab/TabContent.vue'

export default {
  name: 'SubPage3',
  components: {
    TabButton,
    TabContent
  },
  data() {
    return {
      testData: TestData, // TestData를 데이터로 설정하여 자식 컴포넌트로 전달
      tabName : 'Title'
    };
  },
  methods:{
    tabClick(param){
      this.tabName = param;
    }
  }
}
</script>

<style lang="scss">
  #sub3{
    h2{
      margin:30px 0 15px;
    }
  }
</style>
