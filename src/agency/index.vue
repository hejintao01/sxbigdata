<template>
  <div>
    <div>
      <tab :title="tabtitle"></tab>
    </div>
    <div class="parentbox">
      <radar></radar>

    </div>
  </div>
</template>
<script>

import radar from '../components/radar.vue'
import tab from '../components/nav.vue'


export default {
  name: 'agency',
  data(){
    return {
      tabtitle:"代理机构"
    }
  },
  components: {
    radar,
    tab
  },

}
</script>
<style>
.parentbox {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  background: linear-gradient(#31589e, #3c69ba);
}
</style>
