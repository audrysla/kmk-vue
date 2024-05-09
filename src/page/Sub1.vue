<template>
  <div id="sub1">    
    <Lnb />
    <div class="subContent">
      <h2>서브페이지 1입니다.</h2>
      <div class="searchBox">
        <table>
          <colgroup>
            <col width="70"/>
            <col width=""/>
            <col width="70"/>
            <col width=""/>
            <col width="70"/>
            <col width=""/>
            <col width=""/>
          </colgroup>
          <tbody>
            <tr>
              <th>이름</th>
              <td><input /></td>
              <th>주민등록</th>
              <td><input /></td>
              <th>직업</th>
              <td><input /></td>
              <td><button>검색</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Lnb from '../components/Lnb.vue'

export default {
  name: 'SubPage1',
  components :{
    Lnb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #sub1{
    .subContent{
      flex:1;
      .searchBox{
        padding:20px;
        background:#fff;
        border-radius:20px;
        box-shadow: 3px 4px 10px rgba(0,0,0,.03);
        table{
          th{
            padding-right:8px;
            white-space: nowrap;
            text-align:right;
          }
          td{
            padding-right:25px;
            input{
              height:30px;
              border:1px solid #ddd;
              border-radius:8px;
              width:150px;
            }
            button{
              border:1px solid #ddd;
              background:#333;
              color:#fff;
              padding:0 15px;
              height:30px;
              border-radius:10px;
              cursor:pointer;
            }
            button:hover{
              background:linear-gradient(#aaaaaa, #333 40%);
            }
            button:active{
              box-shadow:inset 0 5px 5px #aaa;
            }
          }
        }
      }
    }
  }
</style>