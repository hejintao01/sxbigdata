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
          <span class="contentfont">{{list[0].c[0]}}</span>
          <span class="contentfont">{{list[1].c[0]}}</span>
          <span class="contentfont">{{list[2]}}</span>
          <span class="contentfont">{{list[3]}}</span>
          <span class="contentfont">{{list[4].c[0]}}</span>
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
      headerdata: ['专家编号', '评审次数', '专家姓名', '单位', '评审出错次数'],
      listdata: null
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('NumberOfReviewErrors')");
    console.log('评审专家评审出错次数top10', arr);
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
  /* position: relative; */
  display: flex;
  align-items: center;
  background-color: #012D86;
}
.headerfont {
  flex: 1;
  font-size: 1.125rem;
  text-align: center;
  /* position: absolute;
  bottom: 0px;
  padding: 0px;
  margin: 0px; */
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