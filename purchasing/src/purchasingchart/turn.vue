<template>
  <!-- 招标轮次高展示 -->
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
            <div class="content_box"><span class="contentfont">{{list.time}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.content}}</span></div>
            <div class="content_box"><span class="contentfont">{{list.lc}}</span></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'turn',
  data() {
    return {
      title: '招标轮次高展示',
      headerdata: [ '项目编号', '项目名称','招标轮次'],
      listdata: [
        {time: '17201', content: 'XXX',lc:'5'},
        {time: '17201', content: 'XXX',lc:'5'},
        {time: '17201', content: 'XXX',lc:'5'},
        {time: '17201', content: 'XXX',lc:'5' },
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
