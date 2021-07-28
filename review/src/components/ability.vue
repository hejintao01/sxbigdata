<template>
  <!-- 专家能力排行 -->
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
          <td class="content_font">{{list[7]}}</td>
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
    console.log('专家专业能力排行this.list', arr);
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