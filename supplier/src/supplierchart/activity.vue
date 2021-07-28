<template>
<!-- 投标活跃度 -->
  <div class="box">
    <div class="charts" ref="activitychart">

    </div>
  </div>
</template>
<script>
export default {
  name: 'activity',
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
      this.chartInstance = this.$echarts.init(this.$refs.activitychart)
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
          text: '投标活跃度',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF',
          }
        },
        grid: {
        left: '3%',
        right: '4%',
        bottom: '1%',
        containLabel: true
       },
        xAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          min:0,
          max:40,
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#FFFFFF'
          },
           axisTick: {
        alignWithLabel: true,
        show:false,
    },
        },
        yAxis: {
          type: 'category',
          data: ['供应商E','供应商D','供应商C','供应商B','供应商A'],
          axisLabel: {
            color: '#FFFFFF'
          },
           axisTick: {
        alignWithLabel: true,
        show:false,
    },
          axisLine:{
            lineStyle:{
             color:'#FFFFFF',
            }
      },
        },
        series: [
          {
            type: 'bar',
            data: ['20', '25', '27','30','32'],
            barWidth : 20,
          }
        ],
        color:'#5B9BD5'
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
