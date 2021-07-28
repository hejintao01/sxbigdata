<template>
  <div>
    <div>
      <tab :title="tabtitle"></tab>
    </div>
    <div class="parentbox">
      <Supplierportrait></Supplierportrait>
      <ranktop50></ranktop50>
      <Horizontaltrend></Horizontaltrend>
      <Dimension></Dimension>
      <supplyscaletop10></supplyscaletop10>
      <Shareratio></Shareratio>
      <activity></activity>
      <participation></participation>
      <capabilitytop5></capabilitytop5>
      <analysisT></analysisT>
      <Cooperation></Cooperation>
      <Scope></Scope>
      <Hierarchical></Hierarchical>
      <Bidwin></Bidwin>
      <Comment></Comment>
      <qualitytest></qualitytest>
      <Overduetop5></Overduetop5>
      <producttop5></producttop5>
      <ProQuality></ProQuality>
      <Supplierpost></Supplierpost>
      <Superlow></Superlow>
      <Reverse></Reverse>
      <Relationship></Relationship>
      <Negative></Negative>
      <contentas></contentas>
      <namelist></namelist>
      <New></New>
      <constitute></constitute>
      <Staffsize></Staffsize>
      <management></management>
      <nullchart></nullchart>
      <nullchart></nullchart>
    </div>
  </div>
</template>
<script>
import Supplierportrait from '../supplierchart/Supplierportrait.vue'
import ranktop50 from '../supplierchart/ranktop50.vue'
import Horizontaltrend from  '../supplierchart/Horizontaltrend.vue'
import Dimension from '../supplierchart/Dimension.vue'
import supplyscaletop10 from '../supplierchart/supplyscaletop10.vue'
import Shareratio from '../supplierchart/Shareratio.vue'
import activity from '../supplierchart/activity.vue'
import participation from '../supplierchart/participation.vue'
import capabilitytop5 from '../supplierchart/capabilitytop5.vue'
import analysisT from '../supplierchart/analysisT.vue'
import Cooperation from  '../supplierchart/Cooperation.vue'
import Scope from '../supplierchart/Scope.vue'
import Hierarchical from '../supplierchart/Hierarchical.vue'
import Bidwin from '../supplierchart/Bidwin.vue'
import Comment from '../supplierchart/Comment.vue'
import qualitytest from '../supplierchart/qualitytest.vue'
import Overduetop5 from '../supplierchart/Overduetop5.vue'
import producttop5 from '../supplierchart/producttop5.vue'
import ProQuality from  '../supplierchart/ProQuality.vue'
import Supplierpost from '../supplierchart/Supplierpost.vue'
import Superlow from '../supplierchart/Superlow.vue'
import Reverse from '../supplierchart/Reverse.vue'
import Relationship from '../supplierchart/Relationship.vue'
import Negative from '../supplierchart/Negative.vue'
import namelist from '../supplierchart/namelist.vue'
import New from  '../supplierchart/New.vue'
import constitute from '../supplierchart/constitute.vue'
import Staffsize from '../supplierchart/Staffsize.vue'
import management from '../supplierchart/management.vue'
import nullchart from '../supplierchart/nullchart.vue'
import contentas from '../supplierchart/contentas.vue'
export default {
  name: 'supplier',
  data() {
    return {
      tabtitle: '供应商画像'
    }
  },
  components: {
    Supplierportrait,
    ranktop50,
    Horizontaltrend,
    Dimension,
    supplyscaletop10,
    Shareratio,
    activity,
    participation,
    capabilitytop5,
    analysisT,
    Cooperation,
    Scope,
    Hierarchical,
    Bidwin,
    Comment,
    qualitytest,
    Overduetop5,
    producttop5,
    ProQuality,
    Supplierpost,
    Superlow,
    Reverse,
    Relationship,
    Negative,
    Supplierportrait,
    namelist,
    contentas,
    New,
    constitute,
    Staffsize,
    management,
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
