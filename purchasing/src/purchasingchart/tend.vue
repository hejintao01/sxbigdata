<template>
  <!--采购经理历年画像水平历年趋势分析  -->
  <div class="box">
    <div class="charts" ref="radarchart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'tend',
  data() {
    return {
      chartInstance: null,
      list: null,
      xdata: null,
      ydata: null
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('PortraitLevel')");
    this.list = JSON.parse(JSON.stringify(arr))
    console.log('画像水平', this.list);
    // X,Y轴赋值
    this.xdata = this.list.allRows.map(el => {
      return el.vals[2]
    })
    this.ydata = this.list.allRows.map(el => {
      return el.vals[3]
    })
  },
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
    // 处理数据
    getData() {
      this.updateData()
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: '采购经理历年画像水平历年趋势分析',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF',
          }
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
          splitLine: { //坐标轴在 grid 区域中的分隔线。
							show: false, //是否显示分隔线。默认数值轴显示，类目轴不显示。
						},
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#FFFFFF'
          },
          axisTick:{
            show:false
          }
        },
        series: [{
          data: this.ydata,
          type: 'line',
          showSymbol: false,
          lineStyle: {
            color: '#5B9BD5'
          }

        }]
      }
      this.chartInstance.setOption(option, true)
      let size = this.chartInstance
      window.onresize = function () {
        size.resize();
      }
    }
  }
}
</script>
