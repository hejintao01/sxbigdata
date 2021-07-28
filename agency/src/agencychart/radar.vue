<template>
  <!-- 代理机构画像 -->
  <div class="box">
    <div class="charts" ref="radarchart"></div>
  </div>
</template>
<script>
export default {
  name: "radar",
  data() {
    return {
      chartInstance: null,
      list: null,
    };
  },
  created(){
    console.log("111");
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('AgencyRadarChart')");
    console.log("代理机构画像this.list", arr);
    // 赋值
    let arr2 = arr.allRows.map(el => {
      return el.vals
    })
    arr2[0].slice(4, 8).forEach(e => {
      this.list.push(e.c[0])
    })
  },
  mounted() {
    this.initChart();
    this.getData();
  },
  methods: {
    // 获取yigo中的数据
    GetRequest(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return decodeURIComponent(r[2]);
      } else {
        return null;
      }
    },
    // 初始化echartsInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.radarchart);
    },
    // 数据处理
    getData() {
      this.updateData();
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: "代理机构画像",
          textStyle: {
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: 18,
          },
          left: "center",
          padding: [15, 0, 10, 0],
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}:{d}%' 
        },
        radar: {
          polar:[
            {
              indicator: [
            { name: "财务水平", max: 48 },
            { name: "质量水平", max: 48 },
            { name: "信用水平", max: 48 },
            { name: "服务水平", max: 48 },
          ],
            },
          ],
          radius: 110, //图的大小
          center: ["50%", "50%"], //位置
          splitNumber: 6,
          axisLine: {
            show: false,
          },
          splitArea : {
                            show : false,
                            areaStyle : {
                                color: 'rgba(255,0,0,0)', // 图表背景的颜色
                            },
                        },
        },
        series: [
          {
            name: "代理机构画像",
            type: "radar",
            data: [
              {
                value: this.list,
              },
            ],
            lineStyle: {
              color: "#5B9BD5",
            },
            symbol: false,
            color: "#5B9BD5",
          },
        ],
      };
      this.chartInstance.setOption(option);
    },
  },
};
</script>
<style>
.box {
  /* flex: 1; */
  /* margin: 20px 15px; */
  margin: 1.25rem 0.9375rem;
  /* width: 25%;
  height: 25%; */
  width: 27.5rem;
  height: 33.125rem;
  border: 1px solid black;
  background: linear-gradient(#0079d0, #004576);
}
.charts {
  width: 27.5rem;
  height: 33.125rem;
}
.head {
  width: 27.5rem;
  height: 33.125rem;
  border: 1px solid black;
  margin: 1.25rem 0.625rem;
  background: linear-gradient(#0079d0, #004576);
}
.title {
  margin: 0.9375rem auto 0.625rem auto;
  text-align: center;
}
.font {
  font-size: 1.125rem;
  color: #ffffff;
  font-weight: bold;
}
</style>
