<template>
  <!-- 违规次数top10专家 -->
  <div class="box">
    <div class="charts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'violationtimepeople',
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
      this.chartInstance = this.$echarts.init(this.$refs.chart)
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
          text: '违规次数top10专家',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF'
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
          data: ['专家A', '专家B', '专家C', '专家D', '专家E', '专家F', '专家G', '专家H', '专家I', '专家J'],
          axisLabel: {
            color: '#FFFFFF',
            interval: 0,
            rotate: 40
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
            color: '#FFFFFF',
          }
        },
        series: [
          {
            type: 'bar',
            data: ['8', '14', '31', '42', '8', '14', '31', '42', '8', '14']
          }
        ],
        color: '#5B9BD5'
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
