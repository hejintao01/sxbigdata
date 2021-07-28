<template>
<!-- 供应商画像 -->
  <div class="box">
    <div class="charts" ref="Supplierportraitchart">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Supplierportrait',
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
      this.chartInstance = this.$echarts.init(this.$refs.Supplierportraitchart)
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
          text: '供应商画像',
          textStyle: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 18,
          },
          left: 'center',
          padding: [15, 0, 10, 0]
        },
        grid: {
        left: '3%',
        right: '4%',
        bottom: '1%',
        containLabel: true
    },
        radar: {
          indicator: [
            { name: '服务水平', max: 6500 },
            { name: '价值水平', max: 16000 },
            { name: '信用水平', max: 30000 },
            { name: '财务水平', max: 38000 },
          ],
          center: ['50%','50%'],
          splitNumber: 5,
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data: [
              {
                value: [3300, 13000, 18000, 23000],
              }
            ],
            lineStyle: {
              color: '#5B9BD5',
              normal:{
                  width:3.5
              }
            },
            symbol: false,
            color: '#5B9BD5', 
          }
        ]
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
  font-size: 1.45rem;
  color: #ffffff;
  font-weight: bold;
}
</style>
