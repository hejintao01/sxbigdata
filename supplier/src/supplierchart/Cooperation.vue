<template>
  <!-- 合作紧密度 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="tablebox">
      <table class="tbox">

        <tr>
          <td class="theader">供应商</td>
          <td class="theader">公益活动</td>
        </tr>

        <tr>
          <td rowspan="3" class="core">供应商A</td>
          <td class="core">1</td>
        </tr>
        <tr>
          <td class="core">2</td>
        </tr>
        <tr>
          <td class="core">3</td>
        </tr>

        <tr>
          <td rowspan="3" class="core">供应商A</td>
          <td class="core">1</td>
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
  name: 'Cooperation',
  data() {
    return {
      title: '合作紧密度',
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
