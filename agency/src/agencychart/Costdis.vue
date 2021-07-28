<template>
<!-- 代理各项费用分布 -->
  <div class="box">
    <div class="charts" ref="Costdischart">
    </div>
  </div>
</template>
<script>


export default {
  name: 'Costdis',
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
      this.chartInstance = this.$echarts.init(this.$refs.Costdischart)
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
          text: '代理各项费用分布',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF'
          }
        },
        legend: {
        x: 'center',
        y: 'bottom',
        itemGap: 15,
        icon:'roundRect',
        itemHeight:15,
        itemWidth:15,
           textStyle:{
               color: '#FFFFFF'
                      },
        data: [ '代理费','代理项目金额','评审费'],
    },
       grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
       },
    dataset: {
        dimensions: ['product', '代理费', '代理项目金额', '评审费'],
        source: [
            {product: '2016年', '代理费': 2000, '代理项目金额': 800, '评审费': 2000},
            {product: '2017年', '代理费': 3000, '代理项目金额': 3000, '评审费': 800},
            {product: '2018年', '代理费': 5000, '代理项目金额': 6000, '评审费': 500},
            {product: '2019年', '代理费': 3000, '代理项目金额': 7000, '评审费': 1200},
            {product: '2020年', '代理费': 4000, '代理项目金额': 2800, '评审费': 1800}
        ]
    },
     xAxis: {
        type: 'category',
          axisLine:{
            lineStyle:{
             color:'#FFFFFF',
            }
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
      axisLabel: {
            color: '#FFFFFF'
          },
           axisTick: {
        alignWithLabel: true,
        show:false,
    },
       splitLine :{
            show:false
          },
          axisLine: {
            show: false
          },
       min:0,
          max:8000,
          },
    series: [
        {
          type: 'bar',
           barWidth : 13,
            symbolSize: 0,
              color:'#5b9bd5',
             lineStyle :{
              width:3,
            }
          },
        {
          type: 'bar',
           barWidth : 13,
            symbolSize: 0,
             color:'#ed7d31',
             lineStyle :{
              width:3,
            }
          },
        {
          type: 'bar',
           barWidth : 13,
            symbolSize: 0,
            color:'#a5a5a5',
             lineStyle :{
              width:3,
            }
          }
    ]
};
      this.chartInstance.setOption(option)
    }
  }
}
</script>
