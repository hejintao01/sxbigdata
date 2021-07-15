<template>
  <!--评审专家项目规模（金额、数量）历年趋势分析  -->
  <div class="box">
    <div class="charts" ref="radarchart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'trend',
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
  //   this.list = window.parent.exec(formID, "DBNamedQuery('SpecialityDistribute')");
  //   console.log('this.list', this.list);
  //   // X,Y轴赋值
  //   this.xdata = this.list.allRows.map(el => {
  //     return el.vals[0]
  //   })
  //   this.ydata = this.list.allRows.map(el => {
  //     return el.vals[1].c[0]
  //   })
  // },
  mounted() {
    this.initChart()
    this.getData()
  },
  methods: {
    // 获取yigo中的数据
    // GetRequest(name) {
    //   var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    //   var r = window.location.search.substr(1).match(reg);
    //   if (r != null) {
    //     return decodeURIComponent(r[2]);
    //   }
    //   else {
    //     return null;
    //   }
    // },
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
          text: '评审专家项目规模（金额、数量）历年趋势分析',
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
          data: ['评审项目数量', '金额']
        },
        xAxis: {
          type: 'category',
          data: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
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
            max: 300,
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
            max: 300,
            min: 0,
          }
        ],
        series: [{
          name: '评审项目数量',
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          showSymbol: false,
          color: '#EB7D33',

        }, {
          name: '金额',
          data: [150, 230, 224, 218, 135, 147, 260],
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
