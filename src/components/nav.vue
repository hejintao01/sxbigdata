<template>
  <div class="tabhead">
    <div class="tabtitle">
      <span class="tabfont">{{title}}</span>
    </div>
    <div class="logo">
      <img src="../assets/image/logo.png" alt="logo" class="logoimg">
    </div>
  </div>
</template>
<script>


export default {
  name: 'tab',
  props:['title']
}
</script>

<style scoped>
.tabhead {
  /* width: 100%; */
  height: 6.25rem;
  margin: 0;
  padding: 0;
  background: linear-gradient(#27467C,#3660AD);
  border: .0625rem solid black;
  box-shadow: 0 .125rem .25rem 0 rgba(29, 95, 182, 0.95);
}
.tabtitle {
  position: absolute;
  left: .25rem;
  top: 1.25rem;
}
.tabfont {
  color: #FFFFFF;
  font-size: 2.5rem;
  font-weight: bold;
  margin-left: .625rem;
}
.logo {
  position: absolute;
  right: .25rem;
  top: 1.25rem;
  width: 19.6875rem;
  height: 4.375rem;
  /* background: #00FF00 url(../assets/image/logo.png) no-repeat center center; */
}
.logoimg{
  width: 100%;
  height: 100%;
}
</style>