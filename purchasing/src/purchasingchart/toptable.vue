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
        <div class="contenttitle_box">
          <div class="contenttitle" v-for="list in listdata" :key="list.pm">
            <div class="content_box"><span class="contentfont">{{list.pm}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.name}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.company}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.core}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.grown}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.lable}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.price}}</span></div>
          </div>
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
      title: '采购经理画像排名',
      headerdata: ['排名', '专家', '单位', '综合得分', '专业水平', '成长水平', '价值水平'],
      listdata: [
        { head: '排名', pm: '1', name: '小玉小玉', company: '单位A', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1' },
        { head: '专家', pm: '2', name: '张三', company: '单位B', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1' },
        { head: '单位', pm: '3', name: '李四', company: '单位C', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1' },
        { head: '综合得分', pm: '4', name: '王五', company: '单位D', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1' },
        // { head: '专业水平', pm: '5', name: '陈二', company: '单位E', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1' },
        // { head: '成长水平', pm: '6', name: '陈二', company: '单位E', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1' },
        // { head: '价值水平', pm: '6', name: '陈二', company: '单位E', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1' },
        // { pm: '7', name: '陈二', company: '单位E', core: '8.9', lable: '9.1', grown: '8.6', price: '9.1', xinyong: '8.1', aihao: '7.2' },
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
