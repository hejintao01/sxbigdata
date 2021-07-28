<template>
  <!-- 沉默专家预警 -->
  <div class="minbox">
    <div class="mincharts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'silent',
  data() {
    return {
      chartInstance: null,
      list: null,
      xdataone: null,
      xdatatwo: null,
      ydata: null
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    this.list = window.parent.exec(formID, "DBNamedQuery('SilentExpertWarning')");
    console.log('沉默专家预警this.list', this.list);
    // X,Y轴赋值
    this.ydata = JSON.parse(JSON.stringify(this.list)).allRows.map(el => {
      return el.vals[1]
    })
    this.xdataone = JSON.parse(JSON.stringify(this.list)).allRows.map(el => {
      return el.vals[2]
    })
    this.xdatatwo = JSON.parse(JSON.stringify(this.list)).allRows.map(el => {
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
      this.chartInstance = this.$echarts.init(this.$refs.chart)
    },
    // 获取数据
    getData() {
      this.updateData()
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: '沉默专家预警',
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
          data: ['邀请出席次数', '拒绝出席次数']
        },
        grid: {
          left: '12%',//距离左边距
        },
        xAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.65)',
            width: 0.5,
            type: 'solid'
          },
        },
        yAxis: {
          type: 'category',
          data: this.ydata,
          axisLabel: {
              color: '#979797',
              formatter: '{value}',
              fontSize: 12,
              fontStyle: 'normal',
              fontFamily: 'PingFang SC',
              fontWeight: 'normal',
              lineHeight: 17
            },
          axisTick: {
            alignWithLabel: true,
            show: false
          },
        },
        series: [
          {
            type: 'bar',
            name: '邀请出席次数',
            data: this.xdataone,
            color: '#FF8C68',
            barWidth: 14,
            itemStyle: {
              normal: {
                barBorderRadius: [0, 7, 7, 0]
              }
            }
          },
          {
            type: 'bar',
            name: '拒绝出席次数',
            data: this.xdatatwo,
            color: '#4263A7',
            barWidth: 14,
            itemStyle: {
              normal: {
                barBorderRadius: [0, 7, 7, 0]
              }
            }
          }
        ],
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
