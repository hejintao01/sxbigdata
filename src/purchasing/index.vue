<template>
  <div>
    <div>
      <tab :title="tabtitle"></tab>
    </div>
    <div class="parentbox">
      <columnchart></columnchart>
      <toptable></toptable>
      <tend></tend>
      <portrait></portrait>
      <procurementscale></procurementscale>
      <efficiency></efficiency>
      <benefit></benefit>
      <bear></bear>
      <busyhours></busyhours>
      <success></success>
    </div>
  </div>
</template>
<script>
import columnchart from '../purchasingchart/columnchart.vue'
import tab from '../components/nav.vue'
import toptable from '../purchasingchart/toptable.vue'
import tend from '../purchasingchart/tend.vue'
import portrait from '../purchasingchart/portrait.vue'
import procurementscale from '../purchasingchart/procurementscale.vue'
import efficiency from '../purchasingchart/efficiency.vue'
import benefit from '../purchasingchart/benefit.vue'
import bear from '../purchasingchart/bear.vue'
import busyhours from '../purchasingchart/busyhours.vue'
import success from '../purchasingchart/success.vue'

export default {
  name: 'purchasing',
  data() {
    return {
      tabtitle: '采购经理'
    }
  },
  components: {
    columnchart,
    tab,
    toptable,
    tend,
    portrait,
    procurementscale,
    efficiency,
    benefit,
    bear,
    busyhours,
    success
  },

}
</script>
<style>
.parentbox {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  background: linear-gradient(#31589e, #3c69ba);
}
.parentbox:after {
  content: "";
  flex: auto;
}
.head {
  width: 27.5rem;
  height: 33.125rem;
  border: 1px solid black;
  margin: 1.25rem .625rem;
  background: linear-gradient(#0079d0, #004576);
}
.title {
  margin: .9375rem auto .625rem auto;
  text-align: center;
}
.font {
  font-size: 1.125rem;
  color: #ffffff;
  font-weight: bold;
}
</style>
