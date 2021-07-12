<template>
  <!-- 参与项目供应商后评估分析 -->
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
        <div class="contenttitle_box">
          <div class="contenttitle" v-for="list in listdata" :key="list.pm">
            <div class="content_box"><span class="contentfont">{{list.pm}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.cd}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.jl}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.gys}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.zb}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.nr}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.rq}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.sh}}</span></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'attend',
  data() {
    return {
      title: '参与项目供应商后评估分析',
      headerdata: [ '排名', '采购经理','供应商', '综合得分','商务', '技术','服务','售后'],
      listdata: [
        {pm: '1', cd: '经理A',jl:'供应商A',gys:'8',zb:'8',nr:'8',rq:'8',sh:'8' },
        {pm: '1', cd: '经理A',jl:'供应商A',gys:'8',zb:'8',nr:'8',rq:'8',sh:'8' },
        {pm: '1', cd: '经理A',jl:'供应商A',gys:'8',zb:'8',nr:'8',rq:'8',sh:'8' },
        {pm: '1', cd: '经理A',jl:'供应商A',gys:'8',zb:'8',nr:'8',rq:'8',sh:'8' },
      ]
    }
  }
}
</script>
<style scoped>
.table {
  /* display: flex; */
  max-width: 27.5rem;
  max-height: 30.125rem;
  flex-wrap: wrap;
  /* width: 27.5rem; */
  overflow: hidden;
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
  border: 0.0625rem solid black;
  background-color: #012d86;
  display: flex;
  align-items: center;
}
.headerfont {
  flex: 1;
  font-size: 1.125rem;
  color: #ffffff;
  text-align: center;
}
.content {
  flex: 1;
  margin: 0;
  padding: 0;
  height: 30rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
}
.contenttitle {
  width: 27.5rem;
  height: 5.75rem;
  display: flex;
  background-color: #007bd3;
  align-items: stretch;
}
.content_box {
  flex: 1;
  border: 0.0625rem solid black;
  display: flex;
  align-items: center;
}
.contentfont {
  flex: 1;
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
}
</style>
