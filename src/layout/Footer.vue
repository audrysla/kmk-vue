<template>
  <footer>    
    <div class="drag-panel">
      <span class="drag-handle" 
        @touchstart="onTouchStart" 
        @touchmove="onTouchMove" 
        @touchend="onTouchEnd"
      ></span>
      <div class="drag-cont">
        드래그 내용<br>드래그 내용<br>드래그 내용<br>드래그 내용<br>드래그 내용<br>드래그 내용<br>드래그 내용<br>
        드래그 내용<br>드래그 내용<br>드래그 내용<br>드래그 내용<br>드래그 내용<br>드래그 내용<br>드래그 내용<br>
      </div>
    </div>
    <div class="inner">
      ⓒ KMK Corp.
    </div>
  </footer>
  <span class="console"></span>
</template>

<script>
/* eslint-disable */
export default {
  name: 'FooterPage',
  props: {
    msg: String
  },
  data() {
    return{
      startY:0,
      lastY:0,
      dragGap:0,
      moveGap:20,
      distance:0
    }
  },
  mounted(){
  },
  methods:{
    onTouchStart(e){
      const Panel = document.querySelector(".drag-panel")
      this.startY = e.touches[0].clientY;
      this.dragGap = this.startY - Panel.getBoundingClientRect().top;
      Panel.style.removeProperty('transition');
      // console.log("START",this.startY)
    },
    onTouchMove(e){
      const Panel = document.querySelector(".drag-panel")
      this.lastY = e.touches[0].clientY;
      Panel.style.top = `${this.lastY - this.dragGap}px`
      document.querySelector(".console").textContent = this.startY - this.lastY
    },
    onTouchEnd(e){
      const Panel = document.querySelector(".drag-panel");
      const DragHandleH = document.querySelector(".drag-handle").getBoundingClientRect().height;
      const DragContH = document.querySelector(".drag-cont").getBoundingClientRect().height;
      this.distance = this.startY - this.lastY;
      Panel.style.transition = `top 0.1s ease-in-out`;
      if(this.distance != this.startY){
        if(this.distance > this.moveGap){
          console.log("dist", this.distance, "up")
          Panel.style.top = `calc(100% - ${DragContH+DragHandleH+40}px)`
        }
        if(this.distance < -this.moveGap){
          console.log("dist", this.distance,"down")
          Panel.style.top = `calc(100% - 100px)`
        }
      }
      console.log("END", DragContH)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.console{position: fixed;z-index: 10;bottom:0;width:100%;text-align: right;}

  
  .drag-panel {
    position: fixed;
    top:calc(100% - 100px);
    bottom: 0;
    left: 0;
    right: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;overflow: hidden;;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    
    /* transform: translateY(calc(100% - 20px)); 핸들의 높이만큼만 보이게 설정 */
  }
  .drag-panel.up{
    top:400px;
  }
  .drag-handle {
    display: block;
    height: 40px;
    background-color: #f0f0f0;
    cursor: pointer;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .drag-handle::before {content: ''; display: block; width: 40px; height: 5px; background-color: #ccc; margin: 0 auto; position: relative; top: 50%; transform: translateY(-50%); border-radius: 2.5px;}

  .drag-cont {
    background-color: #ccc;
    overflow: hidden;
    padding: 20px;
    // overflow-y: auto;
    // max-height: calc(100vh - 20px); /* 뷰포트 높이에서 핸들 높이를 뺀 만큼 */
  }

  footer{
    .inner{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      color:#fff;
      background:#444;      
    }
  }
</style>
