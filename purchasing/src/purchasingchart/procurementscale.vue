<template>
  <!--采购规模分析  -->
  <div class="box">
    <div class="charts" ref="radarchart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'procurementscale',
  data() {
    return {
      chartInstance: null,
      list: null,
      xdata: null,
      ydataone: null,
      ydatatwo: null
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('AnalysisOfPurchasingScale')");
    this.list = JSON.parse(JSON.stringify(arr))
    console.log('采购规模分析', this.list);
    // X,Y轴赋值
    this.xdata = this.list.allRows.map(el => {
      return el.vals[2]
    })
    this.ydataone = this.list.allRows.map(el => {
      return el.vals[3]
    })
    this.ydatatwo = this.list.allRows.map(el => {
      return el.vals[4]
    })
  },
  mounted() {
    this.initChart()
    this.getData()
  },
  methods: {
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
          text: '采购规模分析',
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
          data: ['数量', '金额']
        },
        xAxis: {
          type: 'category',
          data: this.xdata,
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
            // max: 300,
            // min: 0,
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
            // max: 300,
            // min: 0,
          }
        ],
        series: [{
          name: '数量',
          data: this.ydataone,
          type: 'line',
          showSymbol: false,
          color: '#EB7D33',

        }, {
          name: '金额',
          data: this.ydatatwo,
          type: 'bar',
          showSymbol: false,
          color: '#5B9BD5',
          yAxisIndex: 1,
        }
        ]
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
