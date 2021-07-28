<template>
<!-- 代理机构员工规模分析 -->
  <div class="box">
    <div class="charts" ref="Staffchart">

    </div>
  </div>
</template>
<script>
export default {
  name: 'Staff',
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
      this.chartInstance = this.$echarts.init(this.$refs.Staffchart)
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
          text: '代理机构员工规模分析',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF'
          }
        },
        grid: {
        left: '3%',
        right: '4%',
        bottom: '20%',
        containLabel: true
       },
        xAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          min:0,
          max:150,
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
          data: ['代理机构F', '代理机构E', '代理机构D','代理机构C','代理机构B','代理机构A'],
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
            data: ['25', '40', '50','70','98','115' ],
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
