<template>
  <!-- 各分公司评审质量排名 -->
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
          <div class="contentfont_box"><span class="contentfont">{{list.pm}}</span></div>
          <div class="contentfont_box"><span class="contentfont">{{list.name}}</span></div>
          <div class="contentfont_box"> <span class="contentfont">{{list.core}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'quality',
  data() {
    return {
      title: '各分公司评审质量排名',
      headerdata: ['排名', '单位', '评审质量得分'],
      listdata: [
        { pm: '1', name: '地市1公司', core: '9.1' },
        { pm: '2', name: '地市2公司', core: '8.9' },
        { pm: '3', name: '地市3公司', core: '9.2' },
      ]
    }
  }
}
</script>
<style scoped>
::-webkit-scrollbar {
/*隐藏滚轮*/
display: none;
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
