<template>
  <!-- 省公司各部门各地市公司专家数量分布 -->
  <div class="minbox">
    <div class="mincharts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'amount',
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
    this.list = window.parent.exec(formID, "DBNamedQuery('DistributionOfExperts')");
    console.log('this.list', this.list);
    // X,Y轴赋值
    this.xdata = JSON.parse(JSON.stringify(this.list)).allRows.map(el => {
      return el.vals[0]
    })
    this.ydata = JSON.parse(JSON.stringify(this.list)).allRows.map(el => {
      return el.vals[1]
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
        // 标题
        title: {
          text: '省公司各部门各地市公司专家数量分布',
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
        grid: {
          left: '15%',//距离左边距
        },
        xAxis: {
          type: 'category',
          data: this.xdata,
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: 13.78,
            fontStyle: 'normal',
            fontFamily: 'PingFang SC',
            fontWeight: 500,
            lineHeight: 15,
            margin: 9.38,
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
        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.65)',
            width: 0.5,
            type: 'solid'
          },
          // 数据水平线
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.151934)',
              width: 0.5,
              type: 'solid'
            }
          },

        },
        series: [
          {
            type: 'bar',
            data: this.ydata
          }
        ],
        color: '#61DDAA'
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
