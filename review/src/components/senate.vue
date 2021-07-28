<template>
  <!-- 专家履职评议分析 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="tablebox">
      <table class="table">
        <tr class="header">
          <td class="header_font" v-for="(item,index) in headerdata" :key="index">{{item}}</td>
        </tr>
        <tr class="content" v-for="(list,index) in listdata" :key="index">
          <td class="content_font">{{list[0]}}</td>
          <td class="content_font">{{list[1]}}</td>
          <td class="content_font">{{list[2]}}</td>
          <td class="content_font">{{list[3]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'senate',
  data() {
    return {
      title: '专家履职评议分析',
      headerdata: ['项目名称', '评分', '专家姓名', '单位'],
      listdata: null
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('ExpertPerformanceReview')");
    console.log('专家履职评议分析', arr);
    // 赋值
    this.listdata = JSON.parse(JSON.stringify(arr)).allRows.map(el => {
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
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
</style>