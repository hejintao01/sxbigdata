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
          <td colspan="5" class="theader">任职资格能力</td>
          <td colspan="5" class="theader">基本业务能力</td>
          <td colspan="7" class="theader">专业胜任能力</td>
          <td colspan="4" class="theader">实践创新能力</td>
          <td colspan="6" class="theader">成长传承能力</td>
        </tr>

        <tr>
          <td class="bheader">学历得分</td>
          <td class="bheader">学位得分</td>
          <td class="bheader">从事采购工作时长得分</td>
          <td class="bheader">岗位认证情况得分</td>
          <td class="bheader">专业资质得分得分</td>

          <td class="bheader">采购预算金额得分</td>
          <td class="bheader">采购项目数量得分</td>
          <td class="bheader">采购效率得分</td>
          <td class="bheader">采购效益得分</td>
          <td class="bheader">支撑系统应用能力得分</td>

          <td class="bheader">流标率得分</td>
          <td class="bheader">多轮次采购情况得分</td>
          <td class="bheader">采购实施差错频次得分</td>
          <td class="bheader">采购文件变更频次得分</td>
          <td class="bheader">供应商异议、投诉次数得分</td>
          <td class="bheader">采购产品质量后评估得分</td>
          <td class="bheader">采购满意度得分</td>

          <td class="bheader">采购领域管理创新得分</td>
          <td class="bheader">采购领域科技创新得分</td>
          <td class="bheader">采购领域课题研究得分</td>
          <td class="bheader">采购领域最佳实践得分</td>

          <td class="bheader">参加专业培训情况得分</td>
          <td class="bheader">参加各种竞赛情况得分</td>
          <td class="bheader">采购案例得分</td>
          <td class="bheader">采购领域学术论文得分</td>
          <td class="bheader">经验分享得分</td>
          <td class="bheader">内训得分</td>
        </tr>

        <tr v-for="(item,index) in filterData" :key="index">
          <td class="core">{{item[1]}}</td>
          <td class="core">{{item[7]}}</td>
          <td class="core">{{item[8]}}</td>
          <td class="core">{{item[9]}}</td>
          <td class="core">{{item[10]}}</td>
          <td class="core">{{item[11]}}</td>
          <td class="core">{{item[12]}}</td>
          <td class="core">{{item[13]}}</td>
          <td class="core">{{item[14]}}</td>
          <td class="core">{{item[15]}}</td>
          <td class="core">{{item[16]}}</td>
          <td class="core">{{item[17]}}</td>
          <td class="core">{{item[18]}}</td>
          <td class="core">{{item[19]}}</td>
          <td class="core">{{item[20]}}</td>
          <td class="core">{{item[21]}}</td>
          <td class="core">{{item[22]}}</td>
          <td class="core">{{item[23]}}</td>
          <td class="core">{{item[24]}}</td>
          <td class="core">{{item[25]}}</td>
          <td class="core">{{item[26]}}</td>
          <td class="core">{{item[27]}}</td>
          <td class="core">{{item[28]}}</td>
          <td class="core">{{item[29]}}</td>
          <td class="core">{{item[30]}}</td>
          <td class="core">{{item[31]}}</td>
          <td class="core">{{item[32]}}</td>
          <td class="core">{{item[33]}}</td>
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
  computed: {
    filterData: function () {
      console.log("画像水平下钻维度分析所用数据",JSON.parse(JSON.stringify(this.core)));
      return JSON.parse(JSON.stringify(this.core));
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('ManagerDimensionAnalysis_L')");
    console.log('画像水平下钻维度分析', arr);
    // 赋值
    this.core = arr.allRows.map(el => {
      return el.vals
    })
    console.log('画像水平下钻维度分析', this.core);
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
