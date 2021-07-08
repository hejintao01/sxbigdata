<template>
  <!-- 评审专家评审异常分析 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="table">
      <div class="table_headbox">
        <div class="table_head">
          <div class="head_box" v-for="(item,index) in headerdata" :key="index">
            <span class="head_font">{{item}}</span>
          </div>
        </div>
      </div>
      <div class="table_middlebox">
        <div class="middle_left">
          <div class="lefttitle">
            <div class="lefttitle_box" v-for="(itemone,index) in leftone" :key="index">
              <span class="lefttitle_font">{{itemone}}</span>
            </div>
          </div>
        </div>
        <div class="second_left">
          <div class="second_title">
            <div class="second_box" v-for="(itemtwo,index) in supplier" :key="index">
              <span class="second_font">{{itemtwo}}</span>
            </div>
          </div>
        </div>
        <div class="surplus">
          <div class="surplus_title">
            <div class="surplus_box" v-for="(list,index) in listdata" :key="index">
              <div class="surplus_titlebox"><span class="surplus_font">{{list.core}}</span>
                <div class="surplus_titlebox"><span class="surplus_font">{{list.name}}</span>
                  <div class="surplus_titlebox"><span class="surplus_font">{{list.company}}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'busyhours',
  data() {
    return {
      title: '不同采购组忙时分析',
      headerdata: ['项目名称', '供应商', '评分', '专家', '单位'],
      leftone: ['项目1', '项目2'],
      supplier: ['供应商A', '供应商B', '供应商C', '供应商D', '供应商E', '供应商F'],
      listdata: [
        { name: '专家A', company: '单位A', core: '8.1' },
        { name: '专家B', company: '单位B', core: '8.1' },
        { name: '专家C', company: '单位C', core: '8.1' },
        { name: '专家B', company: '单位B', core: '8.1' },
        { name: '专家C', company: '单位C', core: '8.1' },
        { name: '专家B', company: '单位B', core: '8.1' },
        { name: '专家C', company: '单位C', core: '8.1' },
        { name: '专家C', company: '单位C', core: '8.1' },
        { name: '专家C', company: '单位C', core: '8.1' },
        { name: '专家C', company: '单位C', core: '8.1' },
        { name: '专家C', company: '单位C', core: '8.1' },
        { name: '专家C', company: '单位C', core: '8.1' },
        { name: '专家C', company: '单位C', core: '8.1' },
      ]
    }
  }
}
</script>
<style scoped>
.table {
  height: 30rem;
  width: 27.5rem;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.table_headbox {
  width: 5.5rem;
  height: 8rem;
  display: flex;
}
.table_head {
  width: 27.5rem;
  height: 8rem;
  display: flex;
}
.head_box {
  width: 5.5rem;
  height: 8rem;
  border: 0.0625rem solid black;
  display: flex;
  align-items: center;
}
.head_font {
  flex: 1;
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
}
.table_middlebox {
  width: 27.5rem;
  height: 33.25rem;
  display: flex;
}
.middle_left {
  width: 5.5rem;
  height: 22rem;
  display: flex;
  align-items: stretch;
}
.lefttitle {
  width: 5.5rem;
  height: 22rem;
  display: flex;
  flex-direction: column;
}
.lefttitle_box {
  width: 5.5rem;
  height: 22rem;
  display: flex;
  align-items: center;
  border: 0.0625rem solid black;
}
.lefttitle_font {
  flex: 1;
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
}
.second_left {
  width: 5.5rem;
  height: 22rem;
  display: flex;
}
.second_title {
  flex: 1;
  /* width: 5.5rem;
  height: 19.875rem; */
  display: flex;
  flex-direction: column;
}
.second_box {
  width: 5.5rem;
  height: 3.666875rem;
  display: flex;
  align-items: center;
  border: 0.0625rem solid black;
}
.second_font {
  flex: 1;
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
}
.surplus {
  width: 16.5rem;
  height: 22rem;
  display: flex;
}
.surplus_title {
  width: 16.5rem;
  height: 22rem;
  display: flex;
  flex-direction: column;
}
.surplus_box {
  flex: 1;
  /* width: 16.5rem;
  height: 2.83875rem; */
  display: flex;
  align-items: stretch;
}
.surplus_titlebox {
  flex: 1;
  display: flex;
  align-items: center;
}
.surplus_font {
  /* flex: 1; */
  width: 5.375rem;
  height: 1.734rem;
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
  border: 0.0625rem solid black;
}
</style>
