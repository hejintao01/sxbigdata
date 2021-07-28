<template>
  <!-- 骨干人员调整预警 -->
  <div class="box">
    <div class="charts" ref="Earlywarnchart">

    </div>
  </div>
</template>
<script>
export default {
  name: 'Earlywarn',
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
      this.chartInstance = this.$echarts.init(this.$refs.Earlywarnchart)
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
          text: '骨干人员调整预警',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF'
          },
        },
    series: [{
        type: 'gauge',
        center: ["50%", "60%"],
            startAngle: 180,
            endAngle: 0,
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
        detail: {
            show: false
        },
        pointer: {
            itemStyle: {
                color: 'auto'
            }
        },
        axisTick: {
            distance: -50,
            length: 14,
            splitNumber: 10,
            lineStyle: {
                color: '#a1b648',
                width: 25
            },
        },
        splitLine: {
            distance: 0,
            length: 0,
            lineStyle: {
                color: '#a1b648',
                width: 4
            }
        },
        axisLabel: {
            color: 'auto',
            distance: -40,
            fontSize: 20
        },
        data: [{
            value: 70
        }]
    }]
};
      this.chartInstance.setOption(option)
    }
  }
}
</script>
