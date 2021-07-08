<template>
  <!-- 省公司各部门各地市公司专家数量分布 -->
  <div class="box">
    <div class="charts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'amount',
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
        // 标题
        title: {
          text: '省公司各部门各地市公司专家数量分布',
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
          data: ['采购部', '网络部', '政企部', '分公司1', '分公司2'],
          axisLabel: {
            color: '#FFFFFF'
          },
          axisLine: {
            lineStyle: {
              color: '#FFFFFF',
            },

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
            color: '#FFFFFF',
          },
          // 数据水平线
          splitLine: {
            show: false
          },

        },
        series: [
          {
            type: 'bar',
            data: ['8', '14', '31', '42', '38']
          }
        ],
        color: '#5B9BD5'
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
