<template>
<!-- 全省供应商分级分布 -->
  <div class="box">
    <div class="charts" ref="Hierarchicalchart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'Hierarchical',
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
      this.chartInstance = this.$echarts.init(this.$refs.Hierarchicalchart)
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
        text: ' 全省供应商分级分布',
        left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF'
          }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
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
                       data: ['A级供应商', 'B级供应商', 'C级供应商', 'D级供应商'],
                       axisLabel:{
              rotate:30,
              interval:0,
              textStyle: {
                    color:'#FFFFFF',
                    fontSize:'12'
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
                        max: 250,
            min: 0,
                   },
               ],
    series: [
                   {
                       name: '项目数',
                       type: 'bar',
                       data: [30, 135, 200, 60], 
          					color:'#5b9bd5',
                     barWidth : 30,
                   },
               ]
};
      this.chartInstance.setOption(option)
    }
  }
}
</script>
