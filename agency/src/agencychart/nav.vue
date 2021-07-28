<template>
  <div class="tabhead">
    <div class="tabtitle">
      <span class="tabfont">{{title}}</span>
    </div>
    <div class="logo">
      <img alt="logo">
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
.title {
  margin: .9375rem auto .625rem auto;
  text-align: center;
}
.font {
  color: #ffffff;
  font-size: 1.45rem;
  font-weight: bold;
}
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
  background-color: pink;
}
</style>