<template>
  <!-- 支撑系统应用能力 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="table">
  </div>
  </div>
</template>
<script>
export default {
  name: 'system',
  data() {
    return {
      title: '支撑系统应用能力',
    }
  }
}
</script>
<style scoped>
.table {
  /* display: flex; */
  max-width: 27.5rem;
  max-height: 30.125rem;
  flex-wrap: wrap;
  /* width: 27.5rem; */
  overflow: hidden;
}
</style>
