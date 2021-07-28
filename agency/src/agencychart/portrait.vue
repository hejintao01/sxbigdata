<template>
  <!-- 代理机构下钻水平维度分析 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="tablebox">
      <table class="tbox">
        <tr>
          <td rowspan="1" class="theader">综合得分</td>
          <td colspan="1" class="theader">财务水平</td>
          <td colspan="2" class="theader">专业水平</td>
          <td colspan="3" class="theader">服务水平</td>
          <td colspan="2" class="theader">质量水平</td>
          <td colspan="2" class="theader">信用水平</td>
        </tr>

        <tr>
          //23
          <td class="bheader">注册资金得分</td>
          <td class="bheader">资产负债率得分</td>
          <td class="bheader">净利润率得分</td>
          <td class="bheader">现金流量得分</td>
          <td class="bheader">主营业务收入得分</td>
          <td class="bheader">代理人员学历得分</td>
          <td class="bheader">代理人员职称及资格证书得分</td>
          <td class="bheader">课题研究和创新能力得分</td>
          <td class="bheader">开评标场所及设备设施得分</td>
          <td class="bheader">代理项目累计金额得分</td>
          <td class="bheader">代理项目专业数量得分</td>
          <td class="bheader">增值服务得分</td>
          <td class="bheader">代理时长得分</td>
          <td class="bheader">供应商异议及投诉次数得分</td>
          <td class="bheader">成员调整频次得分</td>
          <td class="bheader">人员平均服务年限得分</td>
          <td class="bheader">采购实施差错频次得分</td>
          <td class="bheader">投入人员数量得分</td>
          <td class="bheader">后评估得分得分</td>
          <td class="bheader">违规类型数量得分</td>
          <td class="bheader">违规次数得分</td>
          <td class="bheader">处罚金额得分</td>
          <td class="bheader">处罚次数得分</td>
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
      title: '代理机构下钻水平维度分析',
      core: []
    }
  },
  created(){
    console.log("444");
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('DrillDownDimension_H')");
    console.log('代理机构下钻水平维度分析', arr);
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
.title {
  margin: .5rem auto .625rem auto;
  text-align: center;
}
.font {
  color: #ffffff;
  font-size: 1.45rem;
  font-weight: bold;
}
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
  text-align: center;
}
.core {
  border: 0.0625rem solid black;
  color: #ffffff;
  text-align: center;
}
</style>
