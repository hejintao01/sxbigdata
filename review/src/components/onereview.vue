<template>
  <!--评审专家项目规模（金额、数量）历年趋势分析  -->
  <div class="box">
    <div class="charts" ref="radarchart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'onereview',
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
          text: '一采专家参与地市公司评审分析',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF',
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
        // 图例
        legend: {
          x: 'center',
          y: 'bottom',
          textStyle: {
            color: '#FFFFFF'
          },
          itemHeight: 8,
          itemGap: 10,
          icon: 'roundRect',
          data: ['出席数', '缺席数']
        },
        xAxis: {
          type: 'category',
          data: ['地市1公司', '地市2公司', '地市3公司'],
          axisLabel: {
            color: "#FFFFFF",
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
        yAxis: [
          {
          type: 'value',
          //   name: '评审项目数量',
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#FFFFFF'
          },
          axisTick: {
              alignWithLabel: true,
              show: false
            },
            max:90,
            min:0,
        },
        ],
        series: [{
          name: '出席数',
          data: [80, 92, 78],
          type: 'bar',
          showSymbol: false,
          color: '#EB7D33',

        }, {
          name: '缺席数',
          data: [18, 10, 22],
          type: 'bar',
          showSymbol: false,
          color: '#5B9BD5'
        }
        ]
      }
      this.chartInstance.setOption(option)
      // setTimeout(function () {
      //   window.onresize = function () {
      //     twChart.resize();
      //   }
      // }, 200)
    }
  }
}
</script>
