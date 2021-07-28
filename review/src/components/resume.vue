<template>
  <!-- 专家履历与采购项目专业不匹配top10 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
      <span class="font_two">{{pm}}</span>
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
          <td class="content_font">{{list[7]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'resume',
  data() {
    return {
      title: '专家履历与采购项目专业不匹配',
      pm:'top10',
      headerdata: ['专家编号', '专家姓名', '项目编号', '项目名称', '项目专业', '专家履历', '单位', '匹配度'],
      listdata: []
    }
  },
  computed: {
    filterData: function () {
      console.log("专家履历与采购项目专业不匹配top10所用数据",JSON.parse(JSON.stringify(this.listdata)));
      return JSON.parse(JSON.stringify(this.listdata));
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('Top10MajorMismatchExperts')");
    console.log('专家履历与采购项目专业不匹配top10', arr);
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
