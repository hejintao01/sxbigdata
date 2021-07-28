<template>
<!-- 代理机构项目经理考试分析 -->
  <div class="box">
    <div class="charts" ref="PMExaminationchart">
    </div>
  </div>
</template>
<script>


export default {
  name: 'PMExamination',
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
      this.chartInstance = this.$echarts.init(this.$refs.PMExaminationchart)
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
        text: ' 代理机构项目经理考试分析',
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
                       data: ['代理机构A', '代理机构B', '代理机构C', '代理机构D', '代理机构E','代理机构F', '代理机构G'],
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
                        max: 88,
            min: 68,
                   },
               ],
    series: [
                   {
                       name: '项目数',
                       type: 'bar',
                       data: [78, 81, 83, 80, 75,86,81], 
          					color:'#5b9bd5',
                     barWidth : 20,
                   },
               ]
};
      this.chartInstance.setOption(option)
    }
  }
}
</script>
