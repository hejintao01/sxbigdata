<template>
<!-- 供应商交付能力排名top5 -->
  <div class="box">
    <div class="charts" ref="capabilitytop5chart">
    </div>
  </div>
</template>
<script>
export default {
  name: 'capabilitytop5',
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
      this.chartInstance = this.$echarts.init(this.$refs.capabilitytop5chart)
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
          text: '供应商交付能力排名top5',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF'
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
          max:15,
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
            data: ['4', '7', '8','13','32'],
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
<style>
.box {
  /* flex: 1; */
  /* margin: 20px 15px; */
  margin: 1.25rem .9375rem;
  /* width: 25%;
  height: 25%; */
  width: 27.5rem;
  height: 33.125rem;
  border: 1px solid black;
  background: linear-gradient(#0079d0, #004576);
}
.charts {
  width: 27.5rem;
  height: 33.125rem;
}
.head {
  width: 27.5rem;
  height: 33.125rem;
  border: 1px solid black;
  margin: 1.25rem .625rem;
  background: linear-gradient(#0079d0, #004576);
}
.title {
  margin: .9375rem auto .625rem auto;
  text-align: center;
}
.font {
  font-size: 1.45;
  color: #ffffff;
  font-weight: bold;
}
</style>
