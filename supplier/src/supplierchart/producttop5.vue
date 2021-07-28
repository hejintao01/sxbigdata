<template>
<!-- 逾期程度top5供应商下钻逾期产品分析 -->
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
          <span class="contentfont">{{list.yq}}</span>
          <span class="contentfont">{{list.lx}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'producttop5',
  data() {
    return {
      title: '逾期程度top5供应商下钻逾期产品分析',
      headerdata: ['排名','供应商', '逾期程度','逾期产品类型'],
      listdata: [
        {pm:'1', name: '供应商A', yq:'8.9',lx:'类型1'},
        {pm:'2', name: '供应商B', yq:'8.7',lx:'类型2'},
        {pm:'3', name: '供应商C', yq:'8.5',lx:'类型3'},
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
  left:20%;
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
  height: 7.4rem;
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
