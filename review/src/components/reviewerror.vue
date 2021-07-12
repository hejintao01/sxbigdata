<template>
  <!-- 评审专家评审出错次数top10 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="table">
      <div class="content">
        <div class="tablebox">
          <div v-for="(item,index) in headerdata" :key="index" class="header">
            <div class="headerbox">
                <div class="headerfont_box"><span class="headerfont">{{item}}</span></div>
            </div>

          </div>
        </div>
        <div class="contenttitle" v-for="list in listdata" :key="list.pm">
          <div class="contentfont_box"><span class="contentfont">{{list.pm}}</span></div>
          <div class="contentfont_box"><span class="contentfont">{{list.name}}</span></div>
          <div class="contentfont_box"><span class="contentfont">{{list.company}}</span></div>
          <div class="contentfont_box"> <span class="contentfont">{{list.core}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'reviewerror',
  data() {
    return {
      title: '评审专家评审出错次数top10',
      headerdata: ['专家', '单位', '评审次数', '评审出错次数'],
      listdata: [
        { pm: '专家A', name: '单位A', company: '109', core: '28' },
        { pm: '专家B', name: '单位B', company: '110', core: '40' },
        { pm: '专家C', name: '单位C', company: '108', core: '30' },
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
  justify-items: center;
}
.headerfont_box{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
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
