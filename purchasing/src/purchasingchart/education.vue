<template>
  <!-- 采购经理成员学历构成 -->
  <div class="box">
    <div class="charts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'education',
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
    let arr = window.parent.exec(formID, "DBNamedQuery('PurchasingManagerDegree')");
    this.list = JSON.parse(JSON.stringify(arr))
    console.log('采购经理成员学历构成', this.list);
    // X,Y轴赋值
    this.xdata = this.list.allRows.map(el => {
      return el.vals[0]
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
          text: '采购经理成员学历构成',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF'
          },
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
        color:['#A5A5A5','#FFC000','#5B9BD5','#ED7D31','pink'],
        series: [
          {
            type: 'pie',
            radius: '50%',
            center:['45%','50%'],
            data: this.pieList,
            label: {
              normal: {
                show: true,
                position: 'inner',
                formatter: '{d}%',
                textStyle: {
                  fontWeight: 300,
                  fontSize: 16    //文字的字体大小
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
