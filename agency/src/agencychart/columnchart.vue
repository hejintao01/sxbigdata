<template>
<!-- 本省代理机构业绩排名 -->
  <div class="box">
    <div class="charts" ref="columnchartchart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'columnchart',
  data() {
    return {
      chartInstance: null,
      list: null
    }
  },
  mounted() {
    this.initChart()
    this.getData()
  },
  methods: {
    // 初始化echartsInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.columnchartchart)
    },
    // 获取数据
    getData() {
      // 加强接口渲染
      // const {data:ret} = await this.$http.get('')
      const data = [{ name: '1', value: '1' }, { name: '2', value: '2' }]
      console.log(data);
      this.list = data
      this.updateData()
    },
    // 更新数据
    updateData() {
      const tabname = this.list.map((el) => {
        return el.name
      })
      const tabvalue = this.list.map((el) => {
        return el.value
      })
      const option = {
        title: {
          text: '本省代理机构业绩排名',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF'
          }
        },
        legend: {
        x: 'center',
        y: 'bottom',
        itemGap: 6,
        icon:'roundRect',
        itemHeight:15,
           textStyle:{
               color: '#FFFFFF'
                      },
        data: [ '通信','土建'],
    },
       grid: {
        left: '3%',
        right: '4%',
        bottom: '20%',
        containLabel: true
       },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
          },
          min:0,
          max:25,
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#FFFFFF'
          },
           axisTick: {
        alignWithLabel: true,
        show:false,
    },
    },
    yAxis: {
        type: 'category',
        data: ['代理机构E', '代理机构D', '代理机构C', '代理机构B', '代理机构A'],
        axisLabel: {
            color: '#FFFFFF'
          },
           axisTick: {
        alignWithLabel: true,
        show:false,
    },
          axisLine:{
            lineStyle:{
             color:'#FFFFFF',
            }
      },
    },
    series: [
      {
            name: '通信',
            type: 'bar',
            data: [0, 16, 0, 20, 0],
            barWidth : 10,
            symbolSize: 0,
              color:'#ed7d31',
             lineStyle :{
              width:3,
            }
        },
         {
            name: '土建',
            type: 'bar',
             data: ['13', '0', '17', '0', '22'],
            barWidth : 10,
            showSymbol:false,
            symbolSize: 0,
              color:'#5b9bd5',
              lineStyle :{
              width:3,
            }
        },
        ]
};
      this.chartInstance.setOption(option)
    }
  }
}
</script>
