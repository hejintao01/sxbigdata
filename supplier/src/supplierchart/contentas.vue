<template>
  <!-- 供应商负面行为预警下钻内容分析 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="tablebox">
      <table class="tbox">

        <tr>
          <td class="theader">项目名称</td>
          <td class="theader">相关负面行为</td>
          <td class="theader">预警程度</td>
        </tr>

        <tr>
          <td rowspan="3" class="core">产品1</td>
          <td class="core">1</td>
          <td rowspan="3" class="core">红色</td>
        </tr>
        <tr>
          <td class="core">2</td>
        </tr>
        <tr>
          <td class="core">3</td>
        </tr>

        <tr>
          <td rowspan="3" class="core">产品2</td>
          <td class="core">1</td>
          <td rowspan="3" class="core">黄色</td>
        </tr>
        <tr>
          <td class="core">2</td>
        </tr>
        <tr>
          <td class="core">3</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>

export default {
  name: 'contentas',
  data() {
    return {
      title: '供应商负面行为预警下钻内容分析',
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
