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
      <!-- <busyhours></busyhours>
      <success></success> -->
      <system></system>
      <integral></integral>
      <study></study>
      <authentication></authentication>
      <!-- <grown></grown> -->
      <!-- <ability></ability> -->
      <age></age>
      <education></education>
      <qualifications></qualifications>
      <!-- <error></error>
      <drilldown></drilldown>
      <relation></relation>
      <change></change>
      <back></back>
      <qualitytesting></qualitytesting>
      <quality></quality>
      <complaint></complaint>
      <matter></matter>
      <alert></alert>
      <turn></turn>
      <attend></attend> -->
    </div>
  </div>
</template>
<script>
import tab from '../purchasingchart/nav.vue'
import columnchart from '../purchasingchart/columnchart.vue'
import toptable from '../purchasingchart/toptable.vue'
import tend from '../purchasingchart/tend.vue'
import portrait from '../purchasingchart/portrait.vue'
import procurementscale from '../purchasingchart/procurementscale.vue'
import efficiency from '../purchasingchart/efficiency.vue'
import benefit from '../purchasingchart/benefit.vue'
import bear from '../purchasingchart/bear.vue'
import busyhours from '../purchasingchart/busyhours.vue'
import success from '../purchasingchart/success.vue'
import grown from '../purchasingchart/grown.vue'
import ability from '../purchasingchart/ability.vue'
import system from '../purchasingchart/system.vue'
import integral from '../purchasingchart/integral.vue'
import study from '../purchasingchart/study.vue'
import authentication from '../purchasingchart/authentication.vue'
import age from '../purchasingchart/age.vue'
import education from '../purchasingchart/education.vue'
import qualifications from '../purchasingchart/qualifications.vue'
import error from '../purchasingchart/error.vue'
import drilldown from '../purchasingchart/drilldown.vue'
import relation from '../purchasingchart/relation.vue'
import change from '../purchasingchart/change.vue'
import back from '../purchasingchart/back.vue'
import qualitytesting from '../purchasingchart/qualitytesting.vue'
import quality from '../purchasingchart/quality.vue'
import complaint from '../purchasingchart/complaint.vue'
import matter from '../purchasingchart/matter.vue'
import alert from '../purchasingchart/alert.vue'
import turn from '../purchasingchart/turn.vue'
import attend from '../purchasingchart/attend.vue'


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
    success,
    system,
    integral,
    study,
    authentication,
    ability,
    grown,
    age,
    education,
    qualifications,
    error,
    drilldown,
    relation,
    change,
    back,
    qualitytesting,
    quality,
    complaint,
    matter,
    alert,
    turn,
    attend
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
