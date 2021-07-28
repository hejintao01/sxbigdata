<template>
  <div>
    <div>
      <tab :title="tabtitle"></tab>
    </div>
    <div class="parentbox">
      <radar></radar>
      <brokenline></brokenline>
      <portrait></portrait>
      <toptable></toptable>
      <columnchart></columnchart>
      <columnchartover></columnchartover>
      <moneybar></moneybar>
      <ability></ability>
      <Professional></Professional>
      <Aveduranaly></Aveduranaly>
      <Posteval></Posteval>
      <Costdis></Costdis>
      <quality></quality>
      <Educational></Educational>
      <age></age>
      <Highfrepred></Highfrepred>
      <Keyperson></Keyperson>
      <Earlywarn></Earlywarn>
      <stability></stability>
      <Violations></Violations>
      <Punishment></Punishment>
      <Check></Check>
      <Staff></Staff>
      <Managementability></Managementability>
    </div>
  </div>
</template>
<script>
import columnchart from '../agencychart/columnchart.vue'
import columnchartover from '../agencychart/columnchartover.vue'
import radar from '../agencychart/radar.vue'
import brokenline from '../agencychart/brokenline.vue'
import moneybar from '../agencychart/moneybar.vue'
import tab from '../agencychart/nav.vue'
import toptable from '../agencychart/toptable.vue'
import portrait from '../agencychart/portrait.vue'
import ability from '../agencychart/ability.vue'
import quality from '../agencychart/quality.vue'
import Educational  from '../agencychart/Educational.vue'
import Aveduranaly from '../agencychart/Aveduranaly.vue'
import age from '../agencychart/age.vue'
import Costdis from '../agencychart/Costdis.vue'
import Posteval from '../agencychart/Posteval.vue'
import Highfrepred from '../agencychart/Highfrepred.vue'
import Professional from '../agencychart/Professional.vue'
import Punishment from '../agencychart/Punishment.vue'
import Check  from '../agencychart/Check.vue'
import Earlywarn from '../agencychart/Earlywarn.vue'
import Staff from '../agencychart/Staff.vue'
import Violations from '../agencychart/Violations.vue'
import stability from '../agencychart/stability.vue'
import Managementability from '../agencychart/Managementability.vue'
import Keyperson from '../agencychart/Keyperson.vue'
export default {
  name: 'agency',
  data() {
    return {
      tabtitle: '代理机构画像'
    }
  },
  components: {
    columnchart,
    radar,
    brokenline,
    columnchartover,
    moneybar,
    tab,
    toptable,
    portrait,
    ability,
    Educational,
    radar,
    quality,
    Aveduranaly,
    age,
    tab,
    Costdis,
    Posteval,
    Highfrepred,
    Professional,
    Check,
    radar,
    Punishment,
    Earlywarn,
    Staff,
    Violations,
    stability,
    Managementability,
    Keyperson
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
