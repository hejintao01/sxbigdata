<template>
  <!-- 采购经理画像 -->
  <div class="box">
    <div class="charts" ref="radarchart">
    </div>
  </div>
</template>
<script>


export default {
  name: 'ability',
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
          text: '采购经理能力水平分析',
          textStyle: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 18,
          },
          left: 'center',
          padding: [15, 0, 10, 0]
        },
        // 提示框
        // tooltip: {
        //   trigger: 'item',
        // },
        grid: {
          top: '50%',//距上边距

          left: '1%',//距离左边距

          right: '1%',//距离右边距

          bottom: '1%',//距离下边距

        },
        radar: {
          indicator: [
            { name: '继续教育\n\n学习能力', max: 6500 },
            { name: '物资采购\n\n谈判能力', max: 1600 },
            { name: '工作业务\n\n处理能力', max: 3000 },
            { name: '培训创新\n\n成长能力', max: 3000 },
            { name: '支撑系统\n\n应用能力', max: 3000 },
          ],
          axisLine: {
            show: false
          },
          name: {
            color: '#ffffff'
          },
          //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
          splitArea: {
            show: false,
            areaStyle: {
              color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: '#FFFFFF', // 设置网格的颜色
            },
          },
        },
        series: [
          {
            type: 'radar',
            data: [
              {
                value: [4200, 1300, 2200, 2500, 2500, 2180],
                // 设置区域边框和区域的颜色

              },

            ],
            lineStyle: {
              color: 'rgb(241, 10, 241)'
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
</style>
