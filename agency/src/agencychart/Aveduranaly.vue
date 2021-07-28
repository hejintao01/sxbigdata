<template>
  <!-- 代理机构代理平均时长分析 -->
  <div class="box">
    <div class="charts" ref="Aveduranalychart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'Aveduranaly',
  data() {
    return {
      chartInstance: null,
      list: null,
      lname: ['代理机构A', '代理机构B', '代理机构C', '代理机构D', '代理机构E', '代理机构F', '代理机构G']
    }
  },
  mounted() {
    this.initChart()
    this.getData()
  },
  methods: {
    // 初始化echartsInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.Aveduranalychart)
    },
    // 获取数据
    getData() {
      let a = []
      for (let i = 0; i < this.lname.length; i++) {
        var b = []
        b.name = this.lname[i];
        b.type = 'line';
        b.showSymbol = false;
        b.symbolSize = 0;
        b.lineStyle = {width : 3}
        a.push(b)
      }
      console.log("wwwwwwwwwwwwwwwwwwwwww",a);
      this.updateData()
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: '代理机构代理平均时长分析',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF',
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          itemGap: 10,
          icon: 'roundRect',
          itemHeight: 3,
          textStyle: {
            color: '#FFFFFF'
          },
          data: ['代理机构A', '代理机构B', '代理机构C', '代理机构D', '代理机构E', '代理机构F', '代理机构G'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '20%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          scale: true,
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: '#FFFFFF',
            }
          },
          data: ['2016年', '2017年', '2018年', '2019年', '2020年'],
          axisLabel: {
            textStyle: {
              color: '#FFFFFF',
              fontSize: '10'
            },
          },
        },
        yAxis: {
          type: 'value',
          scale: true,
          max: 10,
          min: 0,
          axisLine: {
            show: false
          },
          axisTick: {
            alignWithLabel: true,
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#FFFFFF'
          },
        },
        color: ['#5b9bd5', '#ed7d31', '#a5a5a5', '#ffc000', '#4472c4', '#4472c4', '#255e91'],
        series: [
          {
            name: '代理机构A',
            type: 'line',
            data: [8, 6, 5, 8, 7],
            showSymbol: false,
            symbolSize: 0,
            lineStyle: {
              width: 3,
            }
          },
          {
            name: '代理机构B',
            type: 'line',
            data: [6, 8, 8, 7, 6],
            symbolSize: 0,
            lineStyle: {
              width: 3,
            }
          },
          {
            name: '代理机构C',
            type: 'line',
            data: [8, 7, 8, 7, 8],
            symbolSize: 0,
            lineStyle: {
              width: 3,
            }
          },
          {
            name: '代理机构D',
            type: 'line',
            data: [8, 7, 9, 8, 8],
            symbolSize: 0,
            lineStyle: {
              width: 3,
            }
          },
          {
            name: '代理机构E',
            type: 'line',
            data: [7, 7, 8, 6, 8],
            symbolSize: 0,
            lineStyle: {
              width: 3,
            }
          },
          {
            name: '代理机构F',
            type: 'line',
            data: [8, 6, 8, 7, 6],
            symbolSize: 0,
            lineStyle: {
              width: 3,
            }
          },
          {
            name: '代理机构G',
            type: 'line',
            data: [8, 7, 6, 9, 7],
            symbolSize: 0,
            lineStyle: {
              width: 3,
            }
          }
        ]
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
