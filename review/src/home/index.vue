<template>
  <div>
    <div>
      <tab :title="tabtitle"></tab>
    </div>
    <div class="parentbox">
      <radar></radar>
      <major></major>
      <columnchartover></columnchartover>
      <columnchart></columnchart>
      <toptable></toptable>
      <brokenline></brokenline>
      <portrait></portrait>
      <ability></ability>
      <matching></matching>
      <mismatching></mismatching>
      <resume></resume>
      <senate></senate>
      <!-- <trend></trend> -->
      <review></review>
      <!-- <quality></quality> -->
      <amount></amount>
      <cost></cost>
      <integral></integral>
      <integraltop></integraltop>
      <!-- <timeer></timeer> -->
      <!-- <quit></quit> -->
      <train></train>
      <!-- <achievement></achievement> -->
      <frequency></frequency>
      <onefrequency></onefrequency>
      <!-- <onereview></onereview> -->
      <twofrequency></twofrequency>
      <attend></attend>
      <active></active>
      <silent></silent>
      <absent></absent>
      <violation></violation>
      <violationtime></violationtime>
      <reviewerror></reviewerror>
      <behavior></behavior>
      <abnormal></abnormal>
      <violationtimepeople></violationtimepeople>
      <!-- <preference></preference> -->
      <!-- <scoring></scoring> -->
    </div>
  </div>
</template>
<script>
import columnchart from '../components/columnchart.vue'
import columnchartover from '../components/columnchartover.vue'
import major from '../components/major.vue'
import radar from '../components/radar.vue'
import brokenline from '../components/brokenline.vue'
import tab from '../components/tab.vue'
import toptable from '../components/toptable.vue'
import portrait from '../components/portrait.vue'
import ability from '../components/ability.vue'
import matching from '../components/matching.vue'
import mismatching from '../components/mismatching.vue'
import resume from '../components/resume.vue'
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
    resume,
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
    scoring,
    major

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
  /* background: #E5E5E5; */
}
.parentbox::after {
  content: "";
  flex: 1;
}
.minbox {
  margin: 1.25rem 0.625rem;

  width: 28.1875rem;
  height: 24.375rem;
  left: 0;
  top: 0;
  border: 0.0625rem solid #2b2c68;
  box-shadow: 0px 0.5625rem 1.75rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background: #1a1b4e;
}
.mincharts {
  left: 0px;
  top: 0px;
  width: 28.1875rem;
  height: 24.375rem;
}
.box {
  margin: 1.25rem 0.625rem;

  width: 37.9375rem;
  height: 24.375rem;
  left: 0;
  top: 0;
  border: 0.0625rem solid #2b2c68;
  box-shadow: 0px 0.5625rem 1.75rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background: #1a1b4e;
}
.charts {
  left: 0px;
  top: 0px;
  width: 37.9375rem;
  height: 24.375rem;
}

.bigbox {
  margin: 1.25rem 0.9375rem;

  width: 57.625rem;
  height: 24.375rem;
  left: 0;
  top: 0;
  border: 0.0625rem solid #2b2c68;
  box-shadow: 0px 0.5625rem 1.75rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background: #1a1b4e;
}
.bigcharts {
  left: 0px;
  top: 0px;
  width: 57.625rem;
  height: 24.375rem;
}

.minhead {
  margin: 1.25rem 0.625rem;

  width: 28.1875rem;
  height: 24.375rem;
  left: 0px;
  top: 0px;
  border: 0.0625rem solid #2b2c68;
  box-shadow: 0px 0.5625rem 1.75rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background: #1a1b4e;
}
.head {
  margin: 1.25rem 0.625rem;

  width: 37.9375rem;
  height: 24.375rem;
  left: 0px;
  top: 0px;
  border: 0.0625rem solid #2b2c68;
  box-shadow: 0px 0.5625rem 1.75rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background: #1a1b4e;
}
.bighead {
  margin: 1.25rem 0.625rem;

  width: 57.8125rem;
  height: 24.375rem;
  left: 0px;
  top: 0px;
  border: 0.0625rem solid #2b2c68;
  box-shadow: 0px 0.5625rem 1.75rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background: #1a1b4e;
}
.bigtablebox{
  width: 57.8125rem;
  height: 19.6rem;
  overflow: auto;
}
.bigtable {
  width: 57.8125rem;
  height: 21.3125rem;
  border: 0;
  margin: 0;
  border-collapse: collapse;
  border-spacing: 0;
}
.title {
  margin: 1.5rem 0 1.9375rem 1.5rem;
}
.font {
  height: 1rem;
  left: 4.27%;
  right: 74.88%;
  top: calc(50% - 16px / 2 - 163px);
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: -0.0125rem;
  color: #ffffff;
  opacity: 0.85;
  mix-blend-mode: normal;
}
.font_two {
  margin: 1.875rem 0 0 0.5rem;
  width: 2.4375rem;
  height: 0.6875rem;
  left: 26.44%;
  right: 57.16%;
  top: calc(50% - 11px / 2 - 159.5px);
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 0.6875rem;
  letter-spacing: -0.0125rem;
  color: rgba(255, 255, 255, 0.6);
}

.tablebox {
  max-width: 37.9375rem;
  max-height: 19.625rem;
  overflow: auto;
}
.table {
  width: 37.9375rem;
  height: 21.3125rem;
  border: 0;
  margin: 0;
  border-collapse: collapse;
  border-spacing: 0;
}
.header {
  width: 37.5rem;
  height: 2.625rem;
  background-color: #1c345d;
}
.header_font {
  color: #4d7bca;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 600;
  font-size: 0.8125rem;
  text-align: center;
}
.content {
  width: 37.1875rem;
  height: 2.5rem;
  border-bottom: 1px solid #1f3a68;
}
.content_font {
  color: rgba(255, 255, 255, 0.8);
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  text-align: center;
}
.content_font_one {
  color: #11cdef;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  text-align: center;
}
.content_font_two {
  color: #00dc7e;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  text-align: center;
}
.content_font_three {
  color: #fb6340;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  text-align: center;
}
.content_font_change {
  color: rgba(255, 255, 255, 0.8);
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  text-align: center;
}
</style>
