<template>
  <!-- 专家履职评议分析 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="tablebox">
      <table class="tbox">
        <tr>
          <td class="theader">项目名称</td>
          <td class="theader">供应商</td>
          <td class="theader">评分</td>
          <td class="theader">专家</td>
          <td class="theader">单位</td>
        </tr>

        <tr>
          <td rowspan="4" class="core">项目1</td>
          <td rowspan="2" class="core">供应商A</td>
          <td class="core">0</td>
          <td class="core">专家1</td>
          <td class="core">单位1</td>
        </tr>
        <tr>
          <td class="core">0</td>
          <td class="core">专家1</td>
          <td class="core">单位1</td>
        </tr>
        <tr>
          <td rowspan="2" class="core">供应商A</td>
          <td class="core">0</td>
          <td class="core">专家1</td>
          <td class="core">单位1</td>
        </tr>
        <tr>
          <td class="core">0</td>
          <td class="core">专家1</td>
          <td class="core">单位1</td>
        </tr>

        <tr>
          <td rowspan="4" class="core">项目1</td>
          <td rowspan="2" class="core">供应商A</td>
          <td class="core">0</td>
          <td class="core">专家1</td>
          <td class="core">单位1</td>
        </tr>
        <tr>
          <td class="core">0</td>
          <td class="core">专家1</td>
          <td class="core">单位1</td>
        </tr>
        <tr>
          <td rowspan="2" class="core">供应商A</td>
          <td class="core">0</td>
          <td class="core">专家1</td>
          <td class="core">单位1</td>
        </tr>
        <tr>
          <td class="core">0</td>
          <td class="core">专家1</td>
          <td class="core">单位1</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Comment',
  data() {
    return {
      title: '专家履职评议分析',
      core: []
    }
  },
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
  text-align: center;
}
.core {
  border: 0.0625rem solid black;
  color: #ffffff;
  text-align: center;
}
</style>
