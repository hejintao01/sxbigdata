<template>
<!-- 评审专家画像排名top250 -->
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
          <span class="contentfont">{{list.company}}</span>
          <span class="contentfont">{{list.core}}</span>
          <span class="contentfont">{{list.grown}}</span>
          <span class="contentfont">{{list.lable}}</span>
          <span class="contentfont">{{list.price}}</span>
          <span class="contentfont">{{list.xinyong}}</span>
          <span class="contentfont">{{list.aihao}}</span>
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
      title: '评审专家画像排名top250',
      headerdata: ['排名', '专家', '单位', '综合得分', '专业水平', '成长水平', '价值水平', '信用水平', '偏好水平'],
      listdata: [
        { pm: '1', name: '小玉', company: '单位A', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1', xinyong: '8.1', aihao: '7.2' },
        { pm: '2', name: '张三', company: '单位B', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1', xinyong: '8.1', aihao: '7.2' },
        { pm: '3', name: '李四', company: '单位C', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1', xinyong: '8.1', aihao: '7.2' },
        { pm: '4', name: '王五', company: '单位D', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1', xinyong: '8.1', aihao: '7.2' },
        { pm: '5', name: '陈二', company: '单位E', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1', xinyong: '8.1', aihao: '7.2' },
        { pm: '6', name: '陈二', company: '单位E', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1', xinyong: '8.1', aihao: '7.2' },
        // { pm: '7', name: '陈二', company: '单位E', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1', xinyong: '8.1', aihao: '7.2' },
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
  font-size: 1.125rem;
  font-weight: bold;
}
.table {
  /* display: flex; */
  max-width: 27.5rem;
  max-height: 30.125rem;
  flex-wrap: wrap;
  /* width: 27.5rem; */
  /* overflow: auto; */
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
  font-size: 1.125rem;
  position: absolute;
  bottom: 0px;
  padding: 0px;
  margin: 0px;
  color: #ffffff;
}
.content {
  flex: 1;
  margin: 0;
  padding: 0;
  height: 30rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: .0625rem solid black;
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
