<template>
  <!--一采专家出席率分析  -->
  <div class="minbox">
    <div class="mincharts" ref="radarchart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'onefrequency',
  data() {
    return {
      chartInstance: null,
      list: null,
      xdata: null,
      ydataone: null,
      ydatatwo: null,
      ydatathree: null
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('FirstMiningAttendance')");
    this.list = JSON.parse(JSON.stringify(arr))
    console.log('一采专家出席率分析this.list', this.list);
    // X,Y轴赋值
    this.xdata = this.list.allRows.map(el => {
      return el.vals[0]
    })
    this.ydataone = this.list.allRows.map(el => {
      return el.vals[1]
    })
    this.ydatatwo = this.list.allRows.map(el => {
      return el.vals[2]
    })
    this.ydatathree = this.list.allRows.map(el => {
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
    // 获取数据
    getData() {
      this.updateData()
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: '一采专家出席率分析',
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
        // 图例
        legend: {
          x: 'right',
          y: 'top',
          textStyle: {
            color: '#CACACA',
            fontSize: 12,
            fontStyle: 'normal',
            fontFamily: 'PingFang SC',
            fontWeight: 'normal',
            lineHeight: 17
          },
          padding: [20, 10, 0, 0],
          itemHeight: 8,
          itemGap: 10,
          icon: 'roundRect',
          data: ['出席', '缺席', '出席率']
        },
        xAxis: {
          type: 'category',
          data: this.xdata,
          axisLabel: {
            color: "#FFFFFF",
            color: 'rgba(255, 255, 255, 0.65)',
            width: 0.5,
            type: 'solid'
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.45)',
              width: 0.5,
              type: 'solid'
            }
          },
          axisTick: {
            alignWithLabel: true,
            show: false
          },
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: '#979797',
              formatter: '{value} %',
              fontSize: 12,
              fontStyle: 'normal',
              fontFamily: 'PingFang SC',
              fontWeight: 'normal',
              lineHeight: 17
            },
            splitLine: {
              show: false
            },
            axisTick: {
              alignWithLabel: true,
              show: false
            },
          },
          {
            type: 'value',
            //   name: '金额',
            axisLine: {
              show: false
            },
            axisLabel: {
              color: '#979797',
              formatter: '{value}',
              fontSize: 12,
              fontStyle: 'normal',
              fontFamily: 'PingFang SC',
              fontWeight: 'normal',
              lineHeight: 17
            },
            splitLine: {
              show: false
            },
            axisTick: {
              alignWithLabel: true,
              show: false
            },
          }
        ],
        series: [
          {
            name: '出席率',
            data: this.ydatathree,
            type: 'line',
            showSymbol: false,
            lineStyle: {
              width: 4,
              color: '#61DDAA',
              type: 'solid'
            },
          },
          {
            name: '出席',
            data: this.ydataone,
            type: 'bar',
            showSymbol: false,
            color: '#7262FD',
            yAxisIndex: 1,
            barWidth: 16,
            itemStyle: {
              normal: {
                barBorderRadius: [7, 7, 0, 0]
              }
            }
          },
          {
            name: '缺席',
            data: this.ydatatwo,
            type: 'bar',
            showSymbol: false,
            color: '#FFD46E',
            yAxisIndex: 1,
            barWidth: 16,
            itemStyle: {
              normal: {
                barBorderRadius: [7, 7, 0, 0]
              }
            }
          }
        ]
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
