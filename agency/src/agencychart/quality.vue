<template>
<!-- 全国代理机构成员学历、资质排名 -->
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
          <span class="contentfont">{{list.bs}}</span>
          <span class="contentfont">{{list.ss}}</span>
          <span class="contentfont">{{list.bk}}</span>
          <span class="contentfont">{{list.zk}}</span>
          <span class="contentfont">{{list.gjzs}}</span>
          <span class="contentfont">{{list.zjzs}}</span>
          <span class="contentfont">{{list.cjzs}}</span>
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
      title: '全国代理机构成员学历、资质排名',
      headerdata: ['代理机构', '博士','硕士','本科','专科','高级证书','中级证书','初级证书'],
      listdata: [
        { name: 'A', bs: '30',ss:'142',bk:'150',zk:'70',gjzs:'31',zjzs:'78',cjzs:'120'},
        { name: 'B', bs: '28',ss:'131',bk:'200',zk:'100',gjzs:'28',zjzs:'97',cjzs:'145'},
        { name: 'C', bs: '16',ss:'113',bk:'187',zk:'90',gjzs:'25',zjzs:'67',cjzs:'156'},
        { name: 'D', bs: '14',ss:'97',bk:'160',zk:'110',gjzs:'15',zjzs:'45',cjzs:'137'},
        { name: 'E', bs: '11',ss:'89',bk:'156',zk:'87',gjzs:'11',zjzs:'31',cjzs:'102'},
        { name: '......', bs: '......',ss:'......',bk:'......',zk:'......',gjzs:'......',zjzs:'......',cjzs:'......'},
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
  height: 3.71rem;
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
