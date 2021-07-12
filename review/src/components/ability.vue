
<template>
 <!-- 专家专业能力排名 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="abilitybox">
      <div class="content">
        <div v-for="(item,index) in data" :key="index" class="content_box">
          <span class="content_font">{{item}}</span>
        </div>
      </div>
      <div class="foot">
        <div class="foot_top">
          <div class="foot_box" v-for="(list,index) in test" :key="index">
            <span class="foot_font">{{list.id}}</span>
            <span class="foot_font">{{list.name}}</span>
            <span class="foot_font">{{list.a}}</span>
            <span class="foot_font">{{list.b}}</span>
            <span class="foot_font">{{list.c}}</span>
            <span class="foot_font">{{list.d}}</span>
            <span class="foot_font">{{list.e}}</span>
            <span class="foot_font">{{list.f}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ability',
  data() {
    return {
      title: '专家专业能力排名',
      data: ['当前排名', '评审专家', '综合得分', '评审年限得分', '考试成绩得分', '考试次数', '评审项目数量得分', '评审项目类别得分'],
      test: [{
        id: '3', name: '张三', a: '8.1', b: '8', c: '8', d: '9', e: '7.8', g: '9',f:'5'
      }]
    }
  }
}
</script>

<style scoped>
.abilitybox {
  height: 30.0625rem;
  width: 27.5rem;
  display: flex;
  flex-direction: column;

}
.content {
  height: 23.75rem;
  display: flex;
  background-color: pink;
}
.content_box {
  width: 3.4375rem;
  border: .0625rem solid black;
  position: relative;
    background: linear-gradient(#0079D0,#004576);

}
.content_font {
  position: absolute;
  bottom: 0px;
  padding: 0px;
  margin: 0px;
  color: #ffffff;
}
.foot {
  flex: 1;
  display: flex;
}
.foot_top {
  display: flex;
  align-items: stretch;
}
.foot_box {
  flex: 1;
  display: flex;
  align-items: stretch;
  background: linear-gradient(#0079D0,#004576);
}
.foot_font {
  width: 3.3125rem;
  border: .0625rem solid black;
  text-align: center;
  line-height: 6.3125rem;
  color: #ffffff;
}
</style>
