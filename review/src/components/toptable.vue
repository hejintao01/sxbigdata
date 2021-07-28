<template>
  <!-- 评审专家画像排名top250 -->
  <div class="head">
    <div class="title">
      <span class="font">{{title}}</span>
      <span class="font_two">{{pm}}</span>
    </div>
    <div class="tablebox">
      <table class="table">
        <tr class="header">
          <td class="header_font" v-for="(item,index) in headerdata" :key="index">{{item}}</td>
        </tr>
        <tr class="content" v-for="(list,index) in listdata" :key="index">
          <td class="top_content_font">{{list[10]}}</td>
          <td class="top_content_font">{{list[1]}}</td>
          <td class="top_content_font">{{list[2]}}</td>
          <td class="top_content_font">{{list[3]}}</td>
          <td :class="{'content_font_one':list[9]<8.1&&list[9]>6,'content_font_two':list[9]>8.0,'content_font_three':list[9]<6.1,}">{{list[9]}}</td>
          <!-- <td :class="objectclass">{{list[9]}}{{selectclass}}</td> -->
          <td class="content_font_change">{{list[4]}}</td>
          <td class="content_font_change">{{list[5]}}</td>
          <td class="content_font_change">{{list[6]}}</td>
          <td class="content_font_change">{{list[7]}}</td>
          <td class="content_font_change">{{list[8]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'toptable',
  data() {
    return {
      title: '评审专家画像排名',
      pm: 'top250',
      headerdata: ['排名', '专家', '公司','部门', '综合分', '专业水平', '价值水平', '成长水平', '信用水平', '偏好水平'],
      listdata: null
      // two: false,
      // three: false
    }
  },
  // computed: {
  //   selectclass(e) {
  //     if (e < 5) {
  //       return this.two = true
  //     }
  //     if (e > 8) {
  //       return this.three = true
  //     }
  //   },
  //   objectclass() {
  //     // if (this.two == false && this.three == false) {
  //     //   console.log("1",this.two, this.three);
  //     //   return content_font_one
  //     // } else if (this.two == true && this.three == false) {
  //     //   console.log("2",this.two, this.three);
  //     //   return content_font_two
  //     // }
  //     // else {
  //     //   return content_font_three
  //     // }
  //     return {
  //       content_font_one: this.two == false && this.three == false,
  //       content_font_two: this.two == true && this.three == false,
  //       content_font_three: this.two == false && this.three == true
  //     }
  //   }
  // },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('RadarImageAndPortraitRanking')");
    console.log('画像排名this.list', arr);
    // X,Y轴赋值
    this.listdata = JSON.parse(JSON.stringify(arr)).allRows.map(el => {
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
<style  scoped>
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
.top_content_font{
  color: #ffffff;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  text-align: center;
}
</style>
