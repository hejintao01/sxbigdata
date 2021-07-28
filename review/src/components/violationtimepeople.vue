<template>
  <!-- 违规次数top10专家 -->
  <div class="frbox">
    <div class="frcharts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'violationtimepeople',
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
    this.list = window.parent.exec(formID, "DBNamedQuery('ExpertTop10Violations')");
    console.log('违规次数top10专家this.list', this.list);
    // X,Y轴赋值
    this.xdata = JSON.parse(JSON.stringify(this.list)).allRows.map(el => {
      return el.vals[1]
    })
    this.ydata = JSON.parse(JSON.stringify(this.list)).allRows.map(el => {
      return el.vals[6]
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
          text: '违规次数top10专家',
          textStyle: {
            color: '#FFFFFF',
            fontSize: 16,
            fontStyle: 'normal',
            fontFamily: 'PingFang SC',
            fontWeight: 500,
            lineHeight: 16
          },
          left: 'left',
          padding: [24, 0, 0, 24]
        },
        grid:{
          left:'15%'
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
          data:this.xdata,
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: 13.78,
            fontStyle: 'normal',
            fontFamily: 'PingFang SC',
            fontWeight: 500,
            lineHeight: 15,
            margin: 9.38,
          },
          axisTick: {
            alignWithLabel: true,
            show: false
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.151934)',
              width: 0.5,
              type: 'solid'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.65)',
            width: 0.5,
            type: 'solid'
          },
        },
        series: [
          {
            type: 'bar',
            data: this.ydata
          }
        ],
        color: '#61DDAA'
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
<style scoped>
.frbox {
  margin: 1.25rem .625rem;

  width: 57.625rem;
  height: 24.375rem;
  left: 0;
  top: 0;
  border: 0.0625rem solid #2b2c68;
  box-shadow: 0px 0.5625rem 1.75rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background: #1a1b4e;
}
.frcharts {
  left: 0px;
  top: 0px;
  width: 57.625rem;
  height: 24.375rem;
}
</style>