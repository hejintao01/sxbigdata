<template>
  <!-- 画像水平下钻维度分析 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="tablebox">
      <table class="tbox">
        <tr>
          <td rowspan="2" class="theader">综合得分</td>
          <td colspan="3" class="theader">成长水平</td>
          <td colspan="6" class="theader">专业水平</td>
          <td colspan="4" class="theader">信用水平</td>
          <td colspan="9" class="theader">偏好水平</td>
          <td colspan="5" class="theader">价值水平</td>
        </tr>

        <tr>
          <td class="bheader">学历得分</td>
          <td class="bheader">评审年限得分</td>
          <td class="bheader">专业资质得分</td>
          <td class="bheader">项目金额得分</td>
          <td class="bheader">项目数量得分</td>
          <td class="bheader">评审质量得分</td>
          <td class="bheader">评审费用得分</td>
          <td class="bheader">评审项目积分得分</td>
          <td class="bheader">评审时长得分</td>
          <td class="bheader">培训次数得分</td>
          <td class="bheader">培训时长得分</td>
          <td class="bheader">培训成绩得分</td>
          <td class="bheader">考试成绩得分</td>
          <td class="bheader">出席频次得分</td>
          <td class="bheader">迟到得分</td>
          <td class="bheader">早退得分</td>
          <td class="bheader">打游戏得分</td>
          <td class="bheader">随意打电话得分</td>
          <td class="bheader">上网得分</td>
          <td class="bheader">评审出错得分</td>
          <td class="bheader">其他负面行为及次数得分</td>
          <td class="bheader">供应商品牌偏好</td>
          <td class="bheader">客观性偏好</td>
          <td class="bheader">分值偏好</td>
          <td class="bheader">方案设计偏好</td>
          <td class="bheader">服务响应偏好</td>
        </tr>

        <tr v-for="(item,index) in core" :key="index">
          <td class="core">{{item[0].c[0]}}</td>
          <td class="core">{{item[1]}}</td>
          <td class="core">{{item[2]}}</td>
          <td class="core">{{item[3]}}</td>
          <td class="core">{{item[4]}}</td>
          <td class="core">{{item[5]}}</td>
          <td class="core">{{item[6].c[0]}}</td>
          <td class="core">{{item[7].c[0]}}</td>
          <td class="core">{{item[8].c[0]}}</td>
          <td class="core">{{item[9].c[0]}}</td>
          <td class="core">{{item[10].c[0]}}</td>
          <td class="core">{{item[11].c[0]}}</td>
          <td class="core">{{item[12].c[0]}}</td>
          <td class="core">{{item[13].c[0]}}</td>
          <td class="core">{{item[14].c[0]}}</td>
          <td class="core">{{item[15].c[0]}}</td>
          <td class="core">{{item[16].c[0]}}</td>
          <td class="core">{{item[17].c[0]}}</td>
          <td class="core">{{item[18]}}</td>
          <td class="core">{{item[19].c[0]}}</td>
          <td class="core">{{item[20].c[0]}}</td>
          <td class="core">{{item[21].c[0]}}</td>
          <td class="core">{{item[22].c[0]}}</td>
          <td class="core">{{item[23].c[0]}}</td>
          <td class="core">{{item[24].c[0]}}</td>
          <td class="core">{{item[25].c[0]}}</td>
          <td class="core">{{item[26].c[0]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>

export default {
  name: 'portrait',
  data() {
    return {
      title: '画像水平下钻维度分析',
      core: []
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('DimensionAnalysisOfDrilling_H')");
    console.log('画像水平下钻维度分析', arr);
    // 赋值
    this.core = arr.allRows.map(el => {
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
.tablebox {
  height: 30.0625rem;
  width: 27.5rem;
  background: linear-gradient(#0079d0, #004576);
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.tbox {
  height: 30.0625rem;
  width: 27.5rem;
  border: 0.0625rem solid black;
  border-collapse: collapse;
}
.theader {
  border: 0.0625rem solid black;
  color: #ffffff;
  text-align: center;
}
.bheader {
  border: 0.0625rem solid black;
  color: #ffffff;
}
.core {
  border: 0.0625rem solid black;
  color: #ffffff;
}
</style>
