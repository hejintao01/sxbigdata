<template>
<!-- 团队人员稳定性排名 -->
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
          <span class="contentfont">{{list.staff}}</span>
          <span class="contentfont">{{list.bl}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'stability',
  data() {
    return {
      title: '团队人员稳定性排名',
      headerdata: ['排名', '代理机构', '调整人数','调整比例'],
      listdata: [
        { pm: '1', name: '代理机构A', staff: '23',bl:'24%'},
        { pm: '2', name: '代理机构B', staff: '19',bl:'17%'},
        { pm: '3', name: '代理机构C', staff: '18',bl:'17%'},
        { pm: '4', name: '代理机构D', staff: '15',bl:'16%'},
        { pm: '5', name: '代理机构E', staff: '11',bl:'18%'},
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
  font-size: 1.3rem;
  position: absolute;
  bottom: 0px;
  padding: 0px;
  left:10%;
  margin: 0px;
  color: #ffffff;
}
.content {
  flex: 1;
  margin: 0;
  padding: 0;
  height: 29rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: .0625rem solid black;
  align-content: flex-start;
}
.contenttitle {
  width: 27.5rem;
  height: 4.425rem;
  display: flex;
  background-color: #007BD3;
}
.contentfont {
  flex: 1;
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 4.75rem;
  text-align: center;
  border: .0625rem solid black;
}
</style>
