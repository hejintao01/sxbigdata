<template>
  <!-- 部门、项目专业匹配度分析 -->
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
          <td class="content_font">{{list[4]}}</td>
          <td class="content_font">{{list[5]}}</td>
          <td class="content_font">{{list[6]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'matching',
  data() {
    return {
      title: '部门、项目专业匹配度分析',
      headerdata: ['专家编号', '项目编号', '项目名称', '项目专业', '所属部门', '部门专业', '匹配度'],
      listdata: []
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('DepartmentItemMatching')");
    console.log('部门、项目专业匹配度分析this.list', arr);
    // X,Y轴赋值
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