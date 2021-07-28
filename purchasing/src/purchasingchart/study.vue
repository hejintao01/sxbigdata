<template>
  <!-- 继续教育学习能力 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
    </div>
    <div class="table">
      <div class="content">
        <div class="tablebox">
          <div v-for="(item,index) in headerdata" :key="index" class="header">
            <span class="headerfont">{{item}}</span>
          </div>
        </div>
        <div class="contenttitle_box">
          <div class="contenttitle" v-for="list in filterData" :key="list.pm">
            <div class="content_box"><span class="contentfont">{{list[0]}}</span></div>
            <div class="content_box"><span class="contentfont">{{list[1]}}</span></div>
            <div class="content_box"><span class="contentfont">{{list[2]}}</span></div>
            <div class="content_box"><span class="contentfont">{{list[3]}}</span></div>
            <div class="content_box"><span class="contentfont">{{list[4]}}</span></div>
            <div class="content_box"><span class="contentfont">{{list[5]}}</span></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'study',
  data() {
    return {
      title: '继续教育学习能力',
      headerdata: [ '编号', '姓名', '年份','培训次数','培训时长','考试认证成绩'],
      listdata:null
    }
  },
  computed: {
    filterData: function () {
      console.log("继续教育学习能力所用数据",JSON.parse(JSON.stringify(this.listdata)));
      return JSON.parse(JSON.stringify(this.listdata));
    }
  },
   created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('EducationalLearningAbility')");
    console.log('继续教育学习能力', arr);
    // 赋值
    this.listdata = arr.allRows.map(el => {
      return el.vals
    })
  },
  methods: {
    // 获取yigo中的数据
    GetRequest(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return decodeURIComponent(r[2]);
      }
      else {
        return null;
      }
    },
  }
}
</script>
<style scoped>
::-webkit-scrollbar {
/*隐藏滚轮*/
display: none;
}
.table {
  /* display: flex; */
  max-width: 27.5rem;
  max-height: 30.125rem;
  flex-wrap: wrap;
  /* width: 27.5rem; */
  overflow: auto;
}
.tablebox {
  height: 7.5rem;
  width: 27.5rem;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
}
.header {
  flex: 1;
  border: 0.0625rem solid black;
  background-color: #012d86;
  display: flex;
  align-items: center;
}
.headerfont {
  flex: 1;
  font-size: 1.125rem;
  color: #ffffff;
  text-align: center;
}
.content {
  flex: 1;
  margin: 0;
  padding: 0;
  height: 30rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
}
.contenttitle {
  width: 27.5rem;
  height: 5.75rem;
  display: flex;
  background-color: #007bd3;
  align-items: stretch;
}
.content_box {
  flex: 1;
  border: 0.0625rem solid black;
  display: flex;
  align-items: center;
}
.contentfont {
  flex: 1;
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
}
</style>
