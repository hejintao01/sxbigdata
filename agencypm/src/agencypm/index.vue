<template>
  <div>
    <div>
      <tab :title="tabtitle"></tab>
    </div>
    <div class="parentbox">
      <PMPortrait></PMPortrait>
      <levelover></levelover>
      <Horizontal></Horizontal>
      <PMRank></PMRank>
      <PMExamination></PMExamination>
      <PMSkill></PMSkill>
      <Projectscale></Projectscale>
      <ProportMajor></ProportMajor>
      <Successrate></Successrate>
      <Typeviolation></Typeviolation>
      <Violationdisplay></Violationdisplay>
      <nullchart></nullchart>
      <nullchart></nullchart>
      <nullchart></nullchart>
      <nullchart></nullchart>
      <nullchart></nullchart>
    </div>
  </div>
</template>
<script>
import PMPortrait from '../agencypmchart/PMPortrait.vue'
import levelover from '../agencypmchart/levelover.vue'
import Horizontal from '../agencypmchart/Horizontal.vue'
import PMRank from '../agencypmchart/PMRank.vue'
import PMExamination from '../agencypmchart/PMExamination.vue'
import PMSkill from '../agencypmchart/PMSkill.vue'
import Projectscale from '../agencypmchart/Projectscale.vue'
import ProportMajor  from '../agencypmchart/ProportMajor.vue'
import Violationdisplay from '../agencypmchart/Violationdisplay.vue'
import Typeviolation from '../agencypmchart/Typeviolation.vue'
import Successrate  from '../agencypmchart/Successrate.vue'
import nullchart  from '../agencypmchart/nullchart.vue'
export default {
  name: 'agencypmone',
  data() {
    return {
      tabtitle: '代理机构项目经理画像'
    }
  },
  components: {
    PMPortrait,
    levelover,
    Horizontal,
    PMRank,
    PMExamination,
    PMSkill,
    Projectscale,
    ProportMajor,
    Violationdisplay,
    Typeviolation,
    Successrate,
    nullchart,
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
</style>
