<template>
<!-- 评审专家评审异常分析 -->
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
        <div class="contenttitle">
          <span class="contentfont">1</span>
          <span class="contentfont">1</span>
          <span class="contentfont">1</span>
          <span class="contentfont">1</span>
          <span class="contentfont">1</span>
          <span class="contentfont">1</span>
          <span class="contentfont">1</span>
          <span class="contentfont">1</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Highfrepred',
  data() {
    return {
      title: '评审专家评审异常分析',
      headerdata: [ '代理机构', '项目数量', '调整频次', '调入频次','调出频次', '调整比例', '份额执行度', '预警程度'],
      listdata:null
    }
  },
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
  margin: .5rem auto .625rem auto;
  text-align: center;
}
.font {
  color: #ffffff;
  font-size: 1.45rem;
  font-weight: bold;
}
.table {
  /* display: flex; */
  max-width: 27.5rem;
  max-height: 30.125rem;
  flex-wrap: wrap;
  /* width: 27.5rem; */
  overflow: auto;
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
  display: flex;
  align-items: center;
  background-color: #012D86;
}
.headerfont {
  flex: 1;
  font-size: 1.125rem;
  text-align: center;
  color: #ffffff;
}
.content {
  flex: 1;
  margin: 0;
  padding: 0;
  /* height: 30rem; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
}
.contenttitle {
  width: 27.5rem;
  height: 3.75rem;
  display: flex;
  background-color: #007BD3;
}
.contentfont {
  flex: 1;
  color: #ffffff;
  font-size: 1rem;
  line-height: 3.75rem;
  text-align: center;
  border: .0625rem solid black;
}
</style>
