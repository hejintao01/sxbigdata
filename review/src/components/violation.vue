<template>
  <!-- 违规行为现状分析 -->
  <div class="box">
    <div class="charts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'violation',
  data() {
    return {
      chartInstance: null,
      data: null,
      reason: ['中途退出次数', '迟到次数', '早退次数', '中途出入次数'],
      pieList: null,
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    this.list = window.parent.exec(formID, "DBNamedQuery('StatusQuoOfViolations')");
    console.log('违规行为现状分析this.list', this.list);
    // 赋值
    this.data = this.list.allRows[0].vals.map(el => {
      return el.c[0]
    })
    console.log("数据库值this.data", this.data);
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
    // 处理数据
    getData() {
      // 饼图对数据处理
      this.pieList = [];
      let arr =[]
      this.data.forEach((el,index) => {
        if(0<index&&index<5){
          arr.push(el)
        }
      });
      console.log(arr);
      for (var i = 0; i < this.data.length; i++) {
          var d = new Object();
          d.name = this.reason[i];
          d.value =arr[i];
          this.pieList.push(d)
      }
      console.log('分析this.pieList', this.pieList);
      this.updateData()
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: '违规行为现状分析',
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
          left: 'right',
          y: 'center',
          textStyle: {
            color: '#FFFFFF'
          }
        },
        color: ['#A5A5A5', '#FFC000', '#5B9BD5', '#ED7D31'],
        series: [
          {
            type: 'pie',
            radius: '50%',
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
