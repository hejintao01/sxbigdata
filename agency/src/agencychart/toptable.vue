<template>
  <!-- 全国代理机构业绩排名 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="tablebox">
      <table class="tbox">
        <tr>
          <td class="theader">排名</td>
          <td class="theader">代理机构</td>
          <td class="theader">业绩金额</td>
        </tr>
        <tr v-for="(item,index) in core" :key="index">
          <td class="core">{{item[3].c[0]}}</td>
          <td class="core">{{item[1]}}</td>
          <td class="core">{{item[2].c[0]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>

export default {
  name: 'toptable',
  data() {
    return {
      title: '全国代理机构业绩排名',
      core: []
    }
  },
  created(){
    console.log("555");
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('NationalAgenciesRank')");
    console.log('全国代理机构业绩排名', arr);
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
.core {
  border: 0.0625rem solid black;
  color: #ffffff;
  text-align: center;
}
</style>
