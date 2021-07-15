<template>
  <!-- 专家学历分布 -->
  <div class="box">
    <div class="charts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'columnchart',
  data() {
    return {
      chartInstance: null,
      list: null,
      ydata: null,
      xdata: null
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    this.list = window.parent.exec(formID, "DBNamedQuery('ProfessionalEducation')");
    // X,Y轴赋值
    this.ydata = this.list.allRows.map(el => {
      return el.vals[0]
    })
    this.xdata = this.list.allRows.map(el => {
      return el.vals[1].c[0]
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
      this.chartInstance = this.$echarts.init(this.$refs.chart)
    },
    // 数据处理
    getData() {
      this.updateData()
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: '专家学历分布',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF'
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
        grid: {
          left: '15%',//距离左边距
        },

        xAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: '#FFFFFF'
          }
        },
        yAxis: {
          type: 'category',
          data: this.ydata,
          axisLabel: {
            color: '#FFFFFF'
          },
          axisTick: {
            alignWithLabel: true,
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#FFFFFF',
            }
          },
        },
        series: [
          {
            type: 'bar',
            data: this.xdata,
          }
        ],
        color: '#5B9BD5'
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
