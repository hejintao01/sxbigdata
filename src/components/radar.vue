<template>
<!-- 评审专家画像 -->
  <div class="box">
    <div class="charts" ref="radarchart">
    </div>
  </div>
</template>
<script>


export default {
  name: 'columnchart',
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
          text: '评审专家画像',
          textStyle: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 18,
          },
          left: 'center',
          padding: [15, 0, 10, 0]
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
        grid: {
          top: '50%',//距上边距

          left: '1%',//距离左边距

          right: '1%',//距离右边距

          bottom: '1%',//距离下边距

        },
        radar: {
          indicator: [
            { name: '成长水平', max: 6500 },
            { name: '专业水平', max: 16000 },
            { name: '价值水平', max: 30000 },
            { name: '偏好水平', max: 38000 },
            { name: '信用水平', max: 52000 },
          ],
          axisLine: {
            show: false
          },
          name:{
            color:'#ffffff'
          }
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
              }
            ],
            lineStyle: {
              color: '#5B9BD5'
            },
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
  font-size: 1.125rem;
  color: #ffffff;
  font-weight: bold;
}
</style>
