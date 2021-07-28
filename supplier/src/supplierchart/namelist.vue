<template>
<!-- 供应商画像预警名单 -->
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
          <span class="contentfont">{{list.GRADE}}</span>
          <span class="contentfont">{{list.CW}}</span>
          <span class="contentfont">{{list.FW}}</span>
          <span class="contentfont">{{list.ZL}}</span>
          <span class="contentfont">{{list.XY}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'namelist',
  data() {
    return {
      title: '供应商画像预警名单',
      headerdata: ['排名', '供应商','综合得分','财务水平','服务水平','质量水平','信用水平'],
      listdata: [
        { pm:'1',name: '供应商E', CW: '8.5',FW:'9.4',ZL:'9.8',XY:'9.6',GRADE:'9.4'},
        { pm:'2',name: '供应商R', CW: '9.4',FW:'9.1',ZL:'8.5',XY:'9.2',GRADE:'9.1'},
        { pm:'3',name: '供应商T', CW: '9.1',FW:'9.3',ZL:'8.4',XY:'9.1',GRADE:'8.9'},
        { pm:'4',name: '供应商Y', CW: '8.3',FW:'8.5',ZL:'8.7',XY:'8.9',GRADE:'8.6'},
        { pm:'5',name: '供应商U', CW: '8.1',FW:'8.5',ZL:'8.2',XY:'8.4',GRADE:'8.3'},
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
  font-size: 1.45;
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
