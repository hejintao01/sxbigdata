<template>
  <!--参加培训分析  -->
  <div class="bigbox">
    <div class="bigcharts" ref="radarchart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'train',
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
    this.list = window.parent.exec(formID, "DBNamedQuery('ParticipateInTraining')");
    console.log('参加培训分析this.list', this.list);
    // X,Y轴赋值
    this.xdata = JSON.parse(JSON.stringify(this.list)).allRows.map(el => {
      return el.vals[2]
    })
    this.ydata = JSON.parse(JSON.stringify(this.list)).allRows.map(el => {
      return el.vals[3]
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
          text: '参加培训分析',
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
        grid: {
          left: '15%'
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
            color: "#979797",
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontsize: 13,
            lineheight: 12,
            opacity: 0.65,
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.45)',
              width: 0.5,
              type: 'solid'
            }
          },
          boundaryGap: false,
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
            color: 'rgba(255, 255, 255, 0.45)',
            padding:[0,40,0,0]
          }
        },
        series: [{
          data: this.ydata,
          type: 'line',
          showSymbol: false,
          lineStyle: {
            width: 2,
            color: '#5B8FF9',
            type: 'solid'
          },
          areaStyle: {
            opacity: 0.8,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#141414' // 0% 处的颜色
              }, {
                offset: 1, color: '#5B8FF9' // 100% 处的颜色
              }],
            }
          }
        }]
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
<style scoped>

</style>
