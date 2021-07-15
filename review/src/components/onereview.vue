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
      list: null,
      xdata: null,
      ydataone: null,
      ydatatwo: null,
    }
  },
  // created() {
  //   var formID = this.GetRequest("formID");
  //   // 将yigo查询的值赋值给list
  //   this.list = window.parent.exec(formID, "DBNamedQuery('')");
  //   console.log('一采专家出席率分析this.list', this.list);
  //   // X,Y轴赋值
  //   this.xdata = this.list.allRows.map(el => {
  //     return el.vals[0]
  //   })
  //   this.ydataone = this.list.allRows.map(el => {
  //     return el.vals[1].c[0]
  //   })
  //   this.ydatatwo = this.list.allRows.map(el => {
  //     return el.vals[2].c[0]
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
            max: 90,
            min: 0,
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
