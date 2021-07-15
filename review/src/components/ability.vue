<template>
  <!-- 专家能力排行 -->
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
          <span class="contentfont">{{list[0].c[0]}}</span>
          <span class="contentfont">{{list[1]}}</span>
          <span class="contentfont">{{list[7].c[0]}}</span>
          <span class="contentfont">{{list[2].c[0]}}</span>
          <span class="contentfont">{{list[3].c[0]}}</span>
          <span class="contentfont">{{list[4].c[0]}}</span>
          <span class="contentfont">{{list[5].c[0]}}</span>
          <span class="contentfont">{{list[6].c[0]}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ability',
  data() {
    return {
      title: '专家专业能力排行',
      headerdata: ['当前排名', '评审专家', '综合得分', '评审年限得分', '考试成绩得分', '考试次数', '评审项目数量得分', '评审项目类别得分'],
      listdata: null
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('ProfessionalAbilityRanking')");
    console.log('画像排名this.list', arr);
    // X,Y轴赋值
    this.listdata = arr.allRows.map(el => {
      return el.vals
    })
  },
  methods: {
    // 获取yigo中的数据
    GetRequest(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return decodeURIComponent(r[2]);
      }
      else {
        return null;
      }
    },
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
  /* display: flex; */
  max-width: 27.5rem;
  max-height: 30.125rem;
  flex-wrap: wrap;
  /* width: 27.5rem; */
  overflow: auto;
}
.tablebox {
  height: 23.625rem;
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
  position: relative;
  background-color: #012d86;
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
  /* height: 30rem; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 0.0625rem solid black;
  align-content: flex-start;
}
.contenttitle {
  width: 27.5rem;
  height: 6.4375rem;
  display: flex;
  background-color: #007bd3;
}
.contentfont {
  flex: 1;
  color: #ffffff;
  font-size: 1rem;
  line-height:6.4375rem;
  text-align: center;
  border: 0.0625rem solid black;
}
</style>
