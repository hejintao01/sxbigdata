<template>
  <!--评审专家画像水平历年趋势分析  -->
  <div class="box">
    <div class="charts" ref="radarchart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'brokenline',
  data() {
    return {
      chartInstance: null,
      list: null,
      xdata: null,
      ydata: null
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('ReviewExpertLevelTrend')");
    // X,Y轴赋值
    this.list = JSON.parse(JSON.stringify(arr))
    console.log('画像水平数据', this.list);
    this.xdata = this.list.allRows.map(el => {
      return el.vals[4]
    })
    this.ydata = this.list.allRows.map(el => {
      return el.vals[5]
    })
  },
  mounted() {
    this.initChart()
    this.getData()
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
    // 初始化echartsInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.radarchart)
    },
    // 处理数据
    getData() {
      this.updateData()
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: '评审专家画像水平历年趋势分析',
          textStyle: {
            color: '#FFFFFF',
            fontSize: 16,
            fontStyle: 'normal',
            fontFamily: 'PingFang SC',
            fontWeight: 500,
            lineHeight: 16
          },
          left: 'left',
          padding: [24, 0, 0, 24]
        },
        // 提示框
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        xAxis: {
          type: 'category',
          data: this.xdata,
          axisLabel: {
            show: false,
            color: "#FFFFFF",
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#FFFFFF',
            }
          },
          axisTick: {
            alignWithLabel: true,
            show: false
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.151934)',
              width: 0.5,
              type: 'solid'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: 13.78,
            fontStyle: 'normal',
            fontFamily: 'PingFang SC',
            fontWeight: 500,
            lineHeight: 15,
            margin: 9.38,
          },
        },
        series: [{
          data: this.ydata,
          type: 'line',
          showSymbol: false,
          lineStyle: {
            color: '#5B8FF9'
          },
          symbol:'none', //去掉折线图中的节点
          smooth: true  //true 为平滑曲线，false为直线

        }]
      }
      this.chartInstance.setOption(option, true)
      let size = this.chartInstance
      window.onresize = function () {
        size.resize();
      }
    }
  }
}
</script>
