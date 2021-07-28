<template>
  <!-- 代理机构违规行为分析 -->
  <div class="box">
    <div class="charts" ref="Violationschart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'Violations',
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
      this.chartInstance = this.$echarts.init(this.$refs.Violationschart)
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
          text: '代理机构违规行为分析',
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
          y: 'center',
          right:'0%',
          itemWidth:12,
          itemHeight:12,
          textStyle: {
            color: '#FFFFFF',
            fontWeight: 300,
            fontSize: 13   //文字的字体大小
          }
        },
        series: [
          {
            type: 'pie',
            radius: '68%',
            data: [
              { value: 15, name: '违规行为1', itemStyle: { color: '#5b9bd5' } },
              { value: 29, name: '违规行为2',    itemStyle: { color: '#ed7d31' }  },
              { value: 25, name: '违规行为3',    itemStyle: { color: '#a5a5a5' }  },
              { value: 4, name: '违规行为4',    itemStyle: { color: '#ffc000' }   },
              { value: 13, name: '违规行为5',     itemStyle: { color: '#4472c4' }  },
              { value: 14, name: '其他',     itemStyle: { color: '#70ad47' }  },
            ],
            center: ['38%','50%'],
            label: {
              normal: {
                show: true,
                position: 'inner',
                formatter: '{d}%',
                textStyle: {
                  fontWeight: 350,
                  fontSize: 20    //文字的字体大小
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
