<template>
  <!-- 画像水平下钻维度分析 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="tablebox">
      <div class="top">
        <div class="topleft">
          <span class="left">综合得分</span>
        </div>
        <div class="content">
          <div class="content_top">
            <div class="topheader" v-for="(item,index) in level" :key="index">
              <span class="toplevel">{{item}}</span>
            </div>
          </div>
          <div class="content_second">
            <div v-for="(list,index) in branch" :key="index" class="coretitle">
              <div class="corefontbox">
                <span class="corefont">{{list.typea}}</span>
              </div>
              <div class="corefontbox"> <span class="corefont">{{list.typeb}}</span></div>
              <div class="corefontbox"> <span class="corefont">{{list.typec}}</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div v-for="(coreitem,index) in core" :key="index" class="bottom_core">
          <span class="spanfont">{{coreitem}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'portrait',
  data() {
    return {
      title: '画像水平下钻维度分析',
      level: ['成长水平', '专业水平', '信用水平', '偏好水平', '价值水平'],
      branch: [{ typea: '考核分数', typeb: '参加频次', typec: '调高率' },
      { typea: '考核分数', typeb: '参加频次', typec: '调高率' },
      { typea: '考核分数', typeb: '参加频次', typec: '调高率' },
      { typea: '考核分数', typeb: '参加频次', typec: '调高率' },
      { typea: '考核分数', typeb: '参加频次', typec: '调高率' }
      ],
      core: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15.55', '16']
    }
  }
}
</script>
<style scoped>
.tablebox {
  height: 30.0625rem;
  width: 27.5rem;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
}
.content_top {
  display: flex;
  width: 100%;
  height: 8.75rem;
}
.content_second {
  flex: 1;
  display: flex;
  align-items: stretch;
}
.coretitle {
  flex: 1;
  display: flex;
  background: linear-gradient(#0079d0, #004576);
}
.corefontbox{
  height: 100%;
  flex: 1;
  display: flex;
  align-items: flex-end;
  border: 0.0625rem solid black;
}
.corefont {
  flex: 1;
  text-align: center;
  color: #ffffff;
  
}
.top {
  width: 27.5rem;
  height: 23.75rem;
  background-color: pink;
  display: flex;
}
.topleft {
  height: 23.625rem;
  width: 1.6875rem;
  font-size: 1rem;
  background: linear-gradient(#0079d0, #004576);
  color: #ffffff;
  border: 0.0625rem solid black;
  position: relative;
}
.left {
  position: absolute;
  bottom: 0px;
  padding: 0px;
  margin: 0px;
}
.topheader {
  flex: 1;
  height: 8.75rem;
  width: 2.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: linear-gradient(#0079d0, #004576);
  border: 0.0625rem solid black;
}
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.toplevel {
  text-align: center;
  flex: 1;
  color: #ffffff;
}
.bottom {
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
}
.bottom_core {
  width: 1.71875rem;
  border: 0.0625rem solid black;
  text-align: center;
  display: flex;
  align-items: flex-end;
}
.bottom_core span {
  color: #ffffff;
  width: 100%;
  word-break: break-all;
}
</style>
