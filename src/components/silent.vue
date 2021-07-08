<template>
  <!-- 沉默专家预警 -->
  <div class="box">
    <div class="charts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'silent',
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
          text: '沉默专家预警',
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
          data: ['专家A', '专家B', '专家C', '专家D', '专家E', '专家F', '专家G'],
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
            name:'邀请出席次数',
            data: ['19', '23', '48', '30', '40', '56', '89'],
            color: '#ED7D31',
          },
          {
            type: 'bar',
            name:'拒绝出席次数',
            data: ['15', '20', '40', '20', '30', '50', '80'],
            color: '#5B9BD5',
          }
        ],
        // color: '#5B9BD5'
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
