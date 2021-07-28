<template>
  <!-- 代理机构检查问题展示 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="tablebox">
      <table class="tbox">
        <tr>
          <td class="theader">代理机构</td>
          <td class="theader">日期</td>
          <td class="theader">检查问题</td>
        </tr>

        <tr>
          <td rowspan="3" class="core">代理机构A</td>
          <td class="core">2132年4月1日</td>
          <td class="core">问题1</td>
        </tr>

        <tr>
          <td class="core">2132年4月1日</td>
          <td class="core">问题1</td>
        </tr>

        <tr>
          <td class="core">2132年4月1日</td>
          <td class="core">问题1</td>
        </tr>

        <tr>
          <td rowspan="3" class="core">代理机构A</td>
          <td class="core">2132年4月1日</td>
          <td class="core">问题1</td>
        </tr>

        <tr>
          <td class="core">2132年4月1日</td>
          <td class="core">问题1</td>
        </tr>

        <tr>
          <td class="core">2132年4月1日</td>
          <td class="core">问题1</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Check',
  data() {
    return {
      title: '代理机构检查问题展示',
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
