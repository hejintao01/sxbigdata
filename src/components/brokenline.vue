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
      list: null
    }
  },
  mounted() {
    this.initChart()
    this.getData()
  },
  methods: {
    // 初始化echartsInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.radarchart)
    },
    // 获取数据
    getData() {
      // 加强接口渲染
      // const {data:ret} = await this.$http.get('')
      const data = [{ name: '1', value: '1' }, { name: '2', value: '2' }]
      console.log(data);
      this.list = data
      this.updateData()
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: '评审专家画像水平历年趋势分析',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF',
          }
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
          data: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
          axisLabel: {
            color: "#FFFFFF",
          },
          axisLine: {
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
            show: false
          },
          axisLabel: {
            color: '#FFFFFF'
          }
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          showSymbol: false,
          lineStyle: {
            color: '#5B9BD5'
          }

        }]
      }
      this.chartInstance.setOption(option)
      setTimeout(function () {
        window.onresize = function () {
          twChart.resize();
        }
      }, 200)
    }
  }
}
</script>
