<template>
  <!-- 采购出错频次排名 -->
  <div class="box">
    <div class="charts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'error',
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
      const tabname = this.list.map((el) => {
        return el.name
      })
      const tabvalue = this.list.map((el) => {
        return el.value
      })
      const option = {
        title: {
          text: '采购出错频次排名',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF'
          },
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
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#FFFFFF'
          }
        },
        yAxis: {
          type: 'category',
          data: ['采购经理A', '采购经理B', '采购经理C', '采购经理D', '采购经理E', '采购经理F', '采购经理G'],
          axisLabel: {
            color: '#FFFFFF'
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
        series: [
          {
            type: 'bar',
            data: ['19', '23', '48', '30', '40', '56', '89'],
          }
        ],
        color: '#5B9BD5'
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
