<template>
  <!-- 画像水平下钻维度分析 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="por_tablebox">
      <table class="por_table">
        <tr>
          <td rowspan="2" class="por_content_font">综合得分</td>
          <td colspan="3" class="porheader_font">成长水平</td>
          <td colspan="6" class="porheader_font">专业水平</td>
          <td colspan="4" class="porheader_font">信用水平</td>
          <td colspan="9" class="porheader_font">偏好水平</td>
          <td colspan="5" class="porheader_font">价值水平</td>
        </tr>

        <tr>
          <td class="por_content_font">学历得分</td>
          <td class="por_content_font">评审年限得分</td>
          <td class="por_content_font">专业资质得分</td>
          <td class="por_content_font">项目金额得分</td>
          <td class="por_content_font">项目数量得分</td>
          <td class="por_content_font">评审质量得分</td>
          <td class="por_content_font">评审费用得分</td>
          <td class="por_content_font">评审项目积分得分</td>
          <td class="por_content_font">评审时长得分</td>
          <td class="por_content_font">培训次数得分</td>
          <td class="por_content_font">培训时长得分</td>
          <td class="por_content_font">培训成绩得分</td>
          <td class="por_content_font">考试成绩得分</td>
          <td class="por_content_font">出席频次得分</td>
          <td class="por_content_font">迟到得分</td>
          <td class="por_content_font">早退得分</td>
          <td class="por_content_font">睡觉得分</td>
          <td class="por_content_font">打游戏得分</td>
          <td class="por_content_font">随意打电话得分</td>
          <td class="por_content_font">上网得分</td>
          <td class="por_content_font">评审出错得分</td>
          <td class="por_content_font">其他负面行为及次数得分</td>
          <td class="por_content_font">供应商品牌偏好</td>
          <td class="por_content_font">客观性偏好</td>
          <td class="por_content_font">分值偏好</td>
          <td class="por_content_font">方案设计偏好</td>
          <td class="por_content_font">服务响应偏好</td>
        </tr>

        <tr v-for="(item,index) in core" :key="index" class="por_content">
          <td class="por_font_two">{{item[1]}}</td>
          <td class="por_font_one">{{item[7]}}</td>
          <td class="por_font_one">{{item[8]}}</td>
          <td class="por_font_one">{{item[9]}}</td>
          <td class="por_font_one">{{item[10]}}</td>
          <td class="por_font_one">{{item[11]}}</td>
          <td class="por_font_one">{{item[12]}}</td>
          <td class="por_font_one">{{item[13]}}</td>
          <td class="por_font_one">{{item[14]}}</td>
          <td class="por_font_one">{{item[15]}}</td>
          <td class="por_font_one">{{item[16]}}</td>
          <td class="por_font_one">{{item[17]}}</td>
          <td class="por_font_one">{{item[18]}}</td>
          <td class="por_font_one">{{item[19]}}</td>
          <td class="por_font_one">{{item[20]}}</td>
          <td class="por_font_one">{{item[21]}}</td>
          <td class="por_font_one">{{item[22]}}</td>
          <td class="por_font_one">{{item[23]}}</td>
          <td class="por_font_one">{{item[24]}}</td>
          <td class="por_font_one">{{item[25]}}</td>
          <td class="por_font_one">{{item[26]}}</td>
          <td class="por_font_one">{{item[27]}}</td>
          <td class="por_font_one">{{item[28]}}</td>
          <td class="por_font_one">{{item[29]}}</td>
          <td class="por_font_one">{{item[30]}}</td>
          <td class="por_font_one">{{item[31]}}</td>
          <td class="por_font_one">{{item[32]}}</td>
          <td class="por_font_one">{{item[33]}}</td>
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
      headerdata: ['排名', '专家', '公司', '部门', '综合分', '专业水平', '价值水平', '成长水平', '信用水平', '偏好水平'],
      core: []
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('DimensionAnalysisOfDrilling_L')");
    console.log('画像水平下钻维度分析', arr);
    // 赋值
    this.core = JSON.parse(JSON.stringify(arr)).allRows.map(el => {
      return el.vals
    })
    console.log('画像水平下钻维度分析list', this.core);
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
/* ::-webkit-scrollbar {
  display: none;
} */
.por_tablebox {
  max-width: 37.9375rem;
  max-height: 19.625rem;
  overflow: auto;
}
.por_table {
  width: 37.9375rem;
  height: 21.3125rem;
  border: 0;
  margin: 0;
  border-collapse: collapse;
  border-spacing: 0;
}
.por_content_font {
  color: #ffffff;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  text-align: center;
  border-bottom: 0.0625rem solid #1f3a68;
}
.porheader_font {
  color: #4d7bca;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 600;
  font-size: 0.8125rem;
  text-align: center;
  border-bottom: 0.0625rem solid #1f3a68;
}
.por_font_one {
  color: #11cdef;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  text-align: center;
  border-bottom: 0.0625rem solid #1f3a68;
}
.por_font_two {
  color: #fb6340;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  text-align: center;
  border-bottom: 0.0625rem solid #1f3a68;
}
.por_content {
  width: 37.1875rem;
  height: 2.5rem;
  border-bottom: 1px solid #1f3a68;
}
</style>
