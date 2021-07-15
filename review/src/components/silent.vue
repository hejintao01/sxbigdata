<template>
  <!-- 沉默专家预警 -->
  <div class="box">
    <div class="charts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'silent',
  data() {
    return {
      chartInstance: null,
      list: null,
      xdataone: null,
      xdatatwo: null,
      ydata: null
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    this.list = window.parent.exec(formID, "DBNamedQuery('SilentExpertWarning')");
    console.log('沉默专家预警this.list', this.list);
    // X,Y轴赋值
    this.ydata = this.list.allRows.map(el => {
      return el.vals[1]
    })
    this.xdataone = this.list.allRows.map(el => {
      return el.vals[2].c[0]
    })
    this.xdatatwo = this.list.allRows.map(el => {
      return el.vals[3].c[0]
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
    // 获取数据
    getData() {
      this.updateData()
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: '沉默专家预警',
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
        // 图例组件
        grid: {
          left: '12%',//距离左边距
        },
        xAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
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
        series: [
          {
            type: 'bar',
            name:'邀请出席次数',
            data: this.xdataone,
            color: '#ED7D31',
          },
          {
            type: 'bar',
            name:'拒绝出席次数',
            data: this.xdatatwo,
            color: '#5B9BD5',
          }
        ],
        // color: '#5B9BD5'
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
