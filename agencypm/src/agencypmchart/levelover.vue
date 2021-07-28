<template>
<!-- 代理机构项目经理画像历年水平趋势分析 -->
  <div class="box">
    <div class="charts" ref="leveloverchart">

    </div>
  </div>
</template>
<script>
export default {
  name: 'levelover',
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
      this.chartInstance = this.$echarts.init(this.$refs.leveloverchart)
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
      const option = {
    title: {
        text: ' 代理机构项目经理画像历年水平趋势分析',
        left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF'
          }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    xAxis: [
                   {
                       type: 'category',
                       data: ['2015年', '2016年', '2017年', '2018年', '2019年','2020年'],
                       axisLabel:{
              textStyle: {
                    color:'#FFFFFF',
                    fontSize:'10'
                    },
               },
          axisLine:{
            lineStyle:{
             color:'#FFFFFF',
            }
      },
      axisTick: {
        alignWithLabel: true,
        show:false,
    },
                       splitLine: {
                           show: false
                       }
                   }

               ],
     yAxis: [
                   {
                       type: 'value',
                       //name: '项目数',
                       axisLine: {
            show: false
          },
          splitLine :{
            show:false
          },
          axisTick: {
        alignWithLabel: true,
        show:false
          },
          axisLabel:{
            color:'#FFFFFF'
          },
                        max: 100,
            min: 0,
                   },
               ],
    series: [
                   {
                       name: '项目数',
                       type: 'line',
                       data: [45, 55, 75, 62, 90,52], 
          					color:'#5b9bd5',
                            showSymbol:false,
                            lineStyle:{
                         normal:{
                           width:3.5
                         }
                       },
                   },
               ]
};
      this.chartInstance.setOption(option)
    }
  }
}
</script>
