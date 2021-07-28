<template>
<!-- 代理机构份额执行分析 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="table">
      <div class="content">
        <div class="tablebox">
          <div v-for="(item,index) in headerdata" :key="index" class="header">
            <span class="headerfont">{{item}}</span>
          </div>
        </div>
        <div class="contenttitle" v-for="list in listdata" :key="list.pm">
          <span class="contentfont">{{list.name}}</span>
          <span class="contentfont">{{list.money}}</span>
          <span class="contentfont">{{list.amt}}</span>
          <span class="contentfont">{{list.speed}}</span>
          <span class="contentfont">{{list.normal}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'toptable',
  data() {
    return {
      title: '代理机构份额执行分析',
      headerdata: ['代理机构', '项目金额','项目数量','项目份额执行速度','违规数量'],
      listdata: [
        { name: '机构A', money: '2112',amt:'12',speed:'45%',normal:'4'},
        { name: '机构B', money: '1899',amt:'15',speed:'76%',normal:'2'},
        { name: '机构C', money: '1766',amt:'10',speed:'82%',normal:'3'},
        { name: '机构D', money: '1873',amt:'8',speed:'20%',normal:'1'},
        { name: '机构E', money: '1345',amt:'9',speed:'55%',normal:'5'},
      ]
    }
  },
  created(){
    console.log("333");
  }
}
</script>
<style scoped>
.head {
  width: 27.5rem;
  height: 33.125rem;
  border: .0625rem solid black;
  margin: 1.25rem .625rem;
  background: linear-gradient(#0079D0,#004576);

}
.title {
  margin: .9375rem auto .625rem auto;
  text-align: center;
}
.font {
  color: #ffffff;
  font-size: 1.45rem;
  font-weight: bold;
}
.table {
  display: flex;
  flex-wrap: wrap;
  width: 27.5rem;
}
.tablebox {
  height: 7.5rem;
  width: 27.5rem;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
}
.header {
  flex: 1;
  border: .0625rem solid black;
  position: relative;
  background-color: #012D86;
}
.headerfont {
  font-size: 1.3rem;
  position: absolute;
  bottom: 0px;
  padding: 0px;
  left:20%;
  margin: 0px;
  color: #ffffff;
}
.content {
  flex: 1;
  margin: 0;
  padding: 0;
  height: 29rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: .0625rem solid black;
  align-content: flex-start;
}
.contenttitle {
  width: 27.5rem;
  height: 4.4rem;
  display: flex;
  background-color: #007BD3;
}
.contentfont {
  flex: 1;
  color: #ffffff;
  font-size: 1.3rem;
  line-height: 3.5rem;
  text-align: center;
  border: .0625rem solid black;
}
</style>
