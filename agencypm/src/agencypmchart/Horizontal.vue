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
          <td colspan="2" class="theader">专业水平</td>
          <td colspan="2" class="theader">信用水平</td>
          <td colspan="2" class="theader">服务水平</td>
        </tr>

        <tr>
          <td class="bheader">1</td>
          <td class="bheader">1</td>
          <td class="bheader">2</td>
          <td class="bheader">1</td>
          <td class="bheader">2</td>
          <td class="bheader">1</td>
        </tr>

        <tr>
          <td class="core">1</td>
          <td class="core">1</td>
          <td class="core">1</td>
          <td class="core">1</td>
          <td class="core">1</td>
          <td class="core">1</td>
          <td class="core">1</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Horizontal',
  data() {
    return {
      title: '画像水平下钻维度分析',
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
