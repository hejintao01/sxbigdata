<template>
  <!-- 活跃评委top50分析 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="table">
      <div class="content">
        <div class="tablebox">
          <div v-for="(item,index) in headerdata" :key="index" class="header">
            <div class="headerbox">
              <span class="headerfont">{{item}}</span>
            </div>

          </div>
        </div>
        <div class="contenttitle" v-for="list in listdata" :key="list.pm">
          <div class="contentfont_box"><span class="contentfont">{{list.id}}</span></div>
          <div class="contentfont_box"><span class="contentfont">{{list.pm}}</span></div>
          <div class="contentfont_box"><span class="contentfont">{{list.name}}</span></div>
          <div class="contentfont_box"><span class="contentfont">{{list.company}}</span></div>
          <div class="contentfont_box"> <span class="contentfont">{{list.core}}</span></div>
          <div class="contentfont_box"> <span class="contentfont">{{list.ku}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'active',
  data() {
    return {
      title: '活跃评委top50分析',
      headerdata: ['排名', '专家', '单位', '月均收入','月均评审时长','月均评审次数'],
      listdata: [
        { id:"1",pm: '张三', name: '单位A', company: '20000', core: '15', ku:'5' },
        { id:"2",pm: '李四', name: '单位B', company: '20000', core: '14' ,ku:'4'},
        { id:"3",pm: '王五', name: '单位C', company: '20000', core: '13' ,ku:'3'},
      ]
    }
  }
}
</script>
<style scoped>
.head {
  width: 27.5rem;
  height: 33.125rem;
  border: 0.0625rem solid black;
  margin: 1.25rem 0.625rem;
  background: linear-gradient(#0079d0, #004576);
}
.title {
  margin: 0.9375rem auto 0.625rem auto;
  text-align: center;
}
.font {
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: bold;
}
.table {
  display: flex;
  flex-wrap: wrap;
  width: 27.5rem;
}
.tablebox {
  height: 12.5rem;
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
}
.headerbox {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-items: center;
}
.headerfont {
  flex: 1;
  text-align: center;
  font-size: 1.125rem;
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
  border: 0.0625rem solid black;
  align-content: flex-start;
}
.contenttitle {
  width: 27.5rem;
  height: 5.875rem;
  display: flex;
  background-color: #007bd3;
}
.contentfont_box {
  height: 100%;
  flex: 1;
  display: flex;
  justify-items: center;
  align-items: center;
  border: 0.0625rem solid black;
}
.contentfont {
  flex: 1;
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
}
</style>
