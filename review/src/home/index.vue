<template>
  <div>
    <div>
      <tab :title="tabtitle"></tab>
    </div>
    <div class="parentbox">
      <radar></radar>
      <toptable></toptable>
      <brokenline></brokenline>
      <portrait></portrait>
      <columnchart></columnchart>
      <columnchartover></columnchartover>
      <columnchartover></columnchartover>
      <ability></ability>
      <matching></matching>
      <mismatching></mismatching>
      <mismatching></mismatching>
      <trend></trend>
      <review></review>
      <quality></quality>
      <amount></amount>
      <senate></senate>
      <cost></cost>
      <integral></integral>
      <integraltop></integraltop>
      <timeer></timeer>
      <quit></quit>
      <train></train>
      <achievement></achievement>
      <frequency></frequency>
      <onefrequency></onefrequency>
      <onereview></onereview>
      <twofrequency></twofrequency>
      <attend></attend>
      <active></active>
      <silent></silent>
      <absent></absent>
      <violation></violation>
      <violationtime></violationtime>
      <violationtimepeople></violationtimepeople>
      <reviewerror></reviewerror>
      <abnormal></abnormal>
      <behavior></behavior>
      <preference></preference>
      <scoring></scoring>
    </div>
  </div>
</template>
<script>
import columnchart from '../components/columnchart.vue'
import columnchartover from '../components/columnchartover.vue'
import radar from '../components/radar.vue'
import brokenline from '../components/brokenline.vue'
import tab from '../components/nav.vue'
import toptable from '../components/toptable.vue'
import portrait from '../components/portrait.vue'
import ability from '../components/ability.vue'
import matching from '../components/matching.vue'
import mismatching from '../components/mismatching.vue'
import trend from '../components/trend.vue'
import review from '../components/reviewtop10.vue'
import quality from '../components/quality.vue'
import amount from '../components/amount.vue'
import senate from '../components/senate.vue'
import cost from '../components/cost.vue'
import integral from '../components/integral.vue'
import integraltop from '../components/integraltop10.vue'
import timeer from '../components/timeer.vue'
import quit from '../components/quit.vue'
import train from '../components/train.vue'
import achievement from '../components/achievement.vue'
import frequency from '../components/frequency.vue'
import onefrequency from '../components/onefrequency.vue'
import onereview from '../components/onereview.vue'
import twofrequency from '../components/twofrequency.vue'
import attend from '../components/attend.vue'
import active from '../components/active.vue'
import silent from '../components/silent.vue'
import absent from '../components/absent.vue'
import violation from '../components/violation.vue'
import violationtime from '../components/violationtime.vue'
import violationtimepeople from '../components/violationtimepeople.vue'
import reviewerror from '../components/reviewerror.vue'
import abnormal from '../components/abnormal.vue'
import behavior from '../components/behavior.vue'
import preference from '../components/preference.vue'
import scoring from '../components/scoring.vue'
export default {
  name: 'home',
  data() {
    return {
      tabtitle: '评审专家画像'
    }
  },
  components: {
    columnchart,
    radar,
    brokenline,
    columnchartover,
    tab,
    toptable,
    portrait,
    ability,
    matching,
    mismatching,
    trend,
    review,
    quality,
    amount,
    senate,
    cost,
    integral,
    integraltop,
    timeer,
    quit,
    train,
    achievement,
    frequency,
    onefrequency,
    onereview,
    twofrequency,
    attend,
    active,
    silent,
    absent,
    violation,
    violationtime,
    violationtimepeople,
    reviewerror,
    abnormal,
    behavior,
    preference,
    scoring

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
</style>
