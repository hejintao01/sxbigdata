<template>
  <div class="tabhead">
    <div class="tabtitle">
      <span class="tabfont">{{title}}</span>
    </div>
    <div class="logo">
      <!-- <img src="../assets/image/logo.png" alt="logo" class="logoimg"> -->
    </div>
  </div>
</template>
<script>


export default {
  name: 'tab',
  props: ['title']
}
</script>

<style scoped>
.tabhead {
  height: 6.25rem;
  width: 100%;
  margin: 0;
  padding: 0;
}
.tabtitle {
  position: absolute;
  width: 16.5rem;
  height: 3.875rem;
  left: 2.8125rem;
  top: 1.5rem; 
  display: flex;
  align-items: center;
}
.tabfont {
  color: #ffffff;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 500;
  font-size:2.75rem;
  line-height: 3.875rem;
}
.logo {
  position: absolute;
  left: 105.0625rem;
  top: -3.125rem;
  width: 12.5rem;
  height: 12.5rem;
  /* background: #00FF00 url(../assets/image/logo.png) no-repeat center center; */
}
.logoimg {
  width: 100%;
  height: 100%;
}
</style>