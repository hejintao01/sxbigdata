<template>
  <!-- 专家专业分布 -->
  <div class="minbox">
    <div class="mincharts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'major',
  data() {
    return {
      chartInstance: null,
      list: null,
      alldata: null,
      currentpage:1,//当前显示页数
      totalpage:0,//共几页
      timeId:null,//定时器标识
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    this.list = window.parent.exec(formID, "DBNamedQuery('SpecialityDistribute')");
    // X,Y轴赋值
    this.alldata = JSON.parse(JSON.stringify(this.list)).allRows.map(el => {
      return el.vals
    })
    console.log('专家专业分布', this.alldata);
    // 每五条显示一页
    this.totalpage = this.alldata % 5 == 0 ? this.alldata.length / 5 : this.alldata.length / 5 + 1
  },
  mounted() {
    this.initChart()
    this.getData()
  },
  destroyed() {
    clearInterval(this.timeId)
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
      // 对图表对象进行鼠标事件的监听
      this.chartInstance.on('mouseover',()=>{
        clearInterval(this.timeId)
      })
      this.chartInstance.on('mouseout',()=>{
        this.startInterval()
      })
    },
    // 处理数据并更新
    getData() {
      this.updateData()
      // 启动定时器
      this.startInterval()
    },
    // 更新数据
    updateData() {
      let start = (this.currentpage -1) * 5
      let end = this.currentpage * 5
      let value = this.alldata.slice(start,end)
      let xdata = value.map((el)=>{
        return el[1]
      })
      let ydata = value.map((el)=>{
        return el[0]
      })
      const option = {
        title: {
          text: '专家专业分布',
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
          left: '15%'
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
        yAxis: {
          type: 'category',
          data: ydata,
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
        xAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: 13.78,
            fontStyle: 'normal',
            fontFamily: 'PingFang SC',
            fontWeight: 500,
            lineHeight: 15,
            margin: 9.38,
          },
        },
        series: [
          {
            type: 'bar',
            data: xdata,
            barWidth: 16,
            itemStyle: {
              normal: {
                barBorderRadius: [0, 7, 7, 0]
              }
            }
          },
        ],
        color: '#5B8FF9'
      }
      this.chartInstance.setOption(option)
    },
    // 数据展示定时器
    startInterval(){
      if(this.timeId){
        clearInterval(this.timeId)
      }
      this.timeId = setInterval(()=>{
        this.currentpage ++
        if(this.currentpage > this.totalpage){
          this.currentpage = 1
        }
        this.updateData()
      },3000)
    }
  }
}
</script>
