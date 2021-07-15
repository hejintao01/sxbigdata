<template>
  <!--考试成绩分析  -->
  <div class="box">
    <div class="charts" ref="radarchart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'achievement',
  data() {
    return {
      chartInstance: null,
      list: null,
      xdata: null,
      ydata: null
    }
  },
  // created() {
  //   var formID = this.GetRequest("formID");
  //   // 将yigo查询的值赋值给list
  //   this.list = window.parent.exec(formID, "DBNamedQuery('ParticipateInTraining')");
  //   console.log('参加培训分析this.list', this.list);
  //   // X,Y轴赋值
  //   this.xdata = this.list.allRows.map(el => {
  //     return el.vals[2]
  //   })
  //   this.ydata = this.list.allRows.map(el => {
  //     return el.vals[3].c[0]
  //   })
  // },
  mounted() {
    this.initChart()
    this.getData()
  },
  methods: {
    // 获取yigo中的数据
    GetRequest(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return decodeURIComponent(r[2]);
      }
      else {
        return null;
      }
    },
    // 初始化echartsInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.radarchart)
    },
    // 获取数据
    getData() {
      this.updateData()
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: '考试成绩分析',
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
          data: ['培训时长', '培训成绩', '考试成绩']
        },
        xAxis: {
          type: 'category',
          data: ['2016年', '2017年', '2018年', '2019年', '2020年'],
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
            max: 100,
            min: 0,
          },
          {
            type: 'value',
            //   name: '金额',
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
            max: 20,
            min: 0,
          }
        ],
        series: [
          {
            name: '培训时长',
            data: [10, 12, 14, 18, 15],
            type: 'bar',
            showSymbol: false,
            color: '#ED7D31',
            //   Y轴对应关系
            yAxisIndex: 1,
          },
          {
            name: '培训成绩',
            data: [50, 80, 90, 88, 76],
            type: 'line',
            showSymbol: false,
            color: '#5B9BD5',

          },
          {
            name: '考试成绩',
            data: [55, 85, 95, 93, 81],
            type: 'line',
            showSymbol: false,
            color: '#A5A5A5'
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
