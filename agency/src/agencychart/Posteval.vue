<template>
<!-- 代理机构后评估分析 -->
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
          <span class="contentfont">{{list.pm}}</span>
          <span class="contentfont">{{list.name}}</span>
          <span class="contentfont">{{list.grade}}</span>
          <span class="contentfont">{{list.sw}}</span>
          <span class="contentfont">{{list.js}}</span>
          <span class="contentfont">{{list.fw}}</span>
          <span class="contentfont">{{list.sh}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Posteval',
  data() {
    return {
      title: '代理机构后评估分析',
      headerdata: ['排名', '代理机构', '综合得分','商务','技术','服务','售后'],
      listdata: [
        { pm: '1', name: '代理机构E', grade: '9.7',sw:'9.6',js:'9.7',fw:'9.8',sh:'9.7'},
        { pm: '2', name: '代理机构R', grade: '9.6',sw:'9.5',js:'9.7',fw:'9.5',sh:'9.7'},
        { pm: '3', name: '代理机构T', grade: '9.5',sw:'9.1',js:'9.8',fw:'9.2',sh:'9.7'},
        { pm: '4', name: '代理机构Y', grade: '9.4',sw:'9.5',js:'9.9',fw:'9.9',sh:'9.4'},
        { pm: '5', name: '代理机构U', grade: '9.3',sw:'9.4',js:'9.9',fw:'9.5',sh:'9.1'},
      ]
    }
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
  height: 4.425rem;
  display: flex;
  background-color: #007BD3;
}
.contentfont {
  flex: 1;
  color: #ffffff;
  font-size: 0.5rem;
  line-height: 4.75rem;
  text-align: center;
  border: .0625rem solid black;
}
</style>
