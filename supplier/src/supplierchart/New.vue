<template>
<!-- 近一个月供应商负面新闻展示 -->
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
        <span class="contentfont">{{list.date}}</span>
          <span class="contentfont">{{list.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'New',
  data() {
    return {
      title: '近一个月供应商负面新闻展示',
      headerdata: ['日期', '问题'],
      listdata: [
        { date:'2020.12.1',name: '问题1'},
        { date:'2020.12.5',name: '问题2'},
        { date:'2020.12.6',name: '问题3'},
        { date:'2020.12.12',name: '问题4'},
        { date:'2020.12.22',name: '问题5'},
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
  font-size: 1.2rem;
  position: absolute;
  bottom: 0px;
  padding: 0px;
  left:40%;
  margin: 0px;
  color: #ffffff;
}
.content {
  flex: 1;
  margin: 0;
  padding: 0;
  height: 29.75rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: .0625rem solid black;
  align-content: flex-start;
}
.contenttitle {
  width: 27.5rem;
  height: 4.45rem;
  display: flex;
  background-color: #007BD3;
}
.contentfont {
  flex: 1;
  color: #ffffff;
  font-size: 1rem;
  line-height: 3.5rem;
  text-align: center;
  border: .0625rem solid black;
}
</style>
