<template>
  <!-- 代理机构画像水平历年趋势分析 -->
  <div class="box">
    <div class="charts" ref="brokenlinechart"></div>
  </div>
</template>
<script>
export default {
  name: "brokenline",
  data() {
    return {
      chartInstance: null,
      list: null,
      xdata:null,
      ydata:null,
    };
  },
  created(){
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    this.list = window.parent.exec(
      formID,
      "DBNamedQuery('AgencyTrendsOverTheYears')"
    );
    console.log("代理机构画像水平历年趋势分析this.list",this.list);
    // X坐标轴
    this.xdata = this.list.allRows.map((el) =>{
      return el.vals[1];
    });
    // Y轴数据
    this.ydata = this.list.allRows.map((el) => {
      return el.vals[0].c[0];
    })
    console.log("dailijigouA",this.ydata[0]);
    console.log("dailijigouB",this.ydata[1]);
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
      this.chartInstance = this.$echarts.init(this.$refs.brokenlinechart);
    },
    // 获取数据
    getData() {
      this.updateData();
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: "代理机构画像水平历年趋势分析",
          left: "center",
          padding: [15, 0, 10, 0],
          textStyle: {
            color: "#FFFFFF",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#283b56",
            },
          },
        },
        legend: {
          x: "center",
          y: "bottom",
          itemGap: 10,
          icon: "roundRect",
          itemHeight: 3,
          textStyle: {
            color: "#FFFFFF",
          },
          data:this.ydata,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "20%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          scale: true,
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#FFFFFF",
            },
          },
          data: this.xdata,
          axisLabel: {
            textStyle: {
              color: "#FFFFFF",
              fontSize: "10",
            },
          },
        },
        yAxis: {
          type: "value",
          scale: true,
          axisLine: {
            show: false,
          },
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            color: "#FFFFFF",
          },
        },
        series: [
          {
            name: this.xdata,
            type: "line",
            data: this.ydata[0],
            showSymbol: false,
            symbolSize: 0,
            color: "#5b9bd5",
            lineStyle: {
              width: 3,
            },
          },
          {
            name: this.xdata,
            type: "line",
            data: this.ydata[1],
            symbolSize: 0,
            color: "#ed7d31",
            lineStyle: {
              width: 3,
            },
          },
          // {
          //   name: "代理机构C",
          //   type: "line",
          //   data: this.ydata,
          //   symbolSize: 0,
          //   color: "#a5a5a5",
          //   lineStyle: {
          //     width: 3,
          //   },
          // },
          // {
          //   name: "代理机构D",
          //   type: "line",
          //   data: this.ydata,
          //   symbolSize: 0,
          //   color: "#ffc000",
          //   lineStyle: {
          //     width: 3,
          //   },
          // },
          // {
          //   name: "代理机构E",
          //   type: "line",
          //   data: this.ydata,
          //   symbolSize: 0,
          //   color: "#4472c4",
          //   lineStyle: {
          //     width: 3,
          //   },
          // },
          // {
          //   name: "代理机构F",
          //   type: "line",
          //   data: this.ydata,
          //   symbolSize: 0,
          //   color: "#70ad47",
          //   lineStyle: {
          //     width: 3,
          //   },
          // },
          // {
          //   name: "代理机构G",
          //   type: "line",
          //   data: this.ydata,
          //   symbolSize: 0,
          //   color: "#255e91",
          //   lineStyle: {
          //     width: 3,
          //   },
          // },
        ],
      };
      this.chartInstance.setOption(option);
      // setTimeout(function () {
      //   window.onresize = function () {
      //     twChart.resize();
      //   };
      // }, 200);
    },
  },
};
</script>
