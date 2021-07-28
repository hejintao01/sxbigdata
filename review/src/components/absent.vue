<template>
  <!-- 评审缺席原因分析 -->
  <div class="minbox">
    <div class="mincharts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'absent',
  data() {
    return {
      chartInstance: null,
      list: null,
      xdata: null,
      ydata: null,
      pieList: null,
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('AbsenceOfJudges')");
    this.list = JSON.parse(JSON.stringify(arr))
    console.log('评审缺席原因分析this.list', this.list);
    // X,Y轴赋值
    this.xdata = this.list.allRows.map(el => {
      return el.vals[1]
    })
    this.ydata = this.list.allRows.map(el => {
      return el.vals[2]
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
      // 饼图对数据处理
      this.pieList = [];
      for (let i = 0; i < this.xdata.length; i++) {
        var d = new Object();
        d.name = this.xdata[i];
        d.value = this.ydata[i];
        this.pieList.push(d)
      }
      this.updateData()
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: '评审缺席原因分析',
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
        tooltip: {
          trigger: 'item',
          formatter: '{b}:{d}%'
        },
        legend: {
          orient: 'vertical',
          right: 'left',
          y: 'center',
          textStyle: {
            color: '#FFFFFF'
          }
        },
        color: ['#61DDAA', '#5B8FF9', '#FFD36C', '#65789B'],
        series: [
          {
            type: 'pie',
            data: this.pieList,
            radius: '65%',
            center: ['45%', '50%'],
            label: {
              normal: {
                show: true,
                position: 'inner',
                formatter: '{d}%',
                textStyle: {
                  fontWeight: 'normal',
                  fontSize: 14,   //文字的字体大小
                  fontStyle: 'normal',
                  fontFamily: 'PingFang SC',
                  lineHeight: 12
                },
              }
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
