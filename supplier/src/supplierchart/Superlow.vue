<template>
<!-- 供应商后评估超低分预警 -->
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
          <span class="contentfont">{{list.gys}}</span>
          <span class="contentfont">{{list.cp}}</span>
          <span class="contentfont">{{list.df}}</span>
          <span class="contentfont">{{list.wz}}</span>
          <span class="contentfont">{{list.cd}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Superlow',
  data() {
    return {
      title: '供应商后评估超低分预警',
      headerdata: [ '排名', '供应商', '产品', '得分','位置', '预警程度'],
      listdata:[
        {pm:'1',gys:'2',cp:'1',df:'2',wz:'1',cd:'2',}
        ]
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
  margin: .9375rem auto .625rem auto;
  text-align: center;
}
.font {
  color: #ffffff;
  font-size: 1.125rem;
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
