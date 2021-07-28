<template>
<!-- 活跃评委top50分析 -->
  <div class="minhead">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="mintablebox">
      <table class="mintable">
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
  name: 'active',
  data() {
    return {
      title: '活跃评委top50分析',
      headerdata: ['专家编号', '月均评审次数', '月均评审时长', '月均收入', '专家姓名', '单位', '排名'],
      listdata: null
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('ActiveJudgesTop50')");
    console.log('活跃评委top50分析', arr);
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
.mintablebox{
  width: 28.1875rem;
  height: 19.6rem;
  overflow: auto;
}
.mintable{
  width: 28.1875rem;
  height: 21.3125rem;
  border: 0;
  margin: 0;
  border-collapse: collapse;
  border-spacing: 0;
}
</style>