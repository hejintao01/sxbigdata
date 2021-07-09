<template>
  <!-- 投诉预警 -->
  <div class="box">
    <div class="charts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'alert',
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
          text: '投诉预警',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF'
          },
        },
        series: [
            {
          type: 'gauge',
          center: ["50%", "60%"],
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 100,
          splitNumber: 10,
          itemStyle: {
            color: 'red'
          },
          axisLine: {
            lineStyle: {
              width: 75,
              color: [
                [0.3, '#81923a'],
                [0.7, '#81923a'],
                [1, '#81923a']
              ],
            }
          },
          axisTick: {
            distance: -60,
            length: 16,
            splitNumber: 10,
            lineStyle: {
              color: '#a1b648',
              width: 25
            },
          },
          splitLine: {
            distance: -52,
            length: 14,
            lineStyle: {
              width: 3,
              color: '#999'
            }
          },
          axisLabel: {
            distance: -50,
            color: '#999',
            fontSize: 20,
          },
          anchor: {
            show: false
          },
          title: {
            show: false
          },
          detail: {
            show: false
          },
          data: [{
            value: 20
          }]
        },

        {
          type: 'gauge',
          center: ["50%", "60%"],
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 100,

          pointer: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          detail: {
            show: false
          },
          data: [{
            value: 20,
          }]

        }
        ],
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
