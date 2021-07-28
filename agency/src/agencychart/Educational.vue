<template>
  <!-- 本省代理机构成员学历分布 -->
  <div class="box">
    <div class="charts" ref="Educationalchart">

    </div>
  </div>
</template>
<script>
export default {
  name: 'Educational',
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
      this.chartInstance = this.$echarts.init(this.$refs.Educationalchart)
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
          text: '本省代理机构成员学历分布',
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
            fontSize: 15   //文字的字体大小
          }
        },
        series: [
          {
            type: 'pie',
            radius: '70%',
            data: [
              { value: 5, name: '大专以下', itemStyle: { color: '#5b9bd5' } },
              { value: 10, name: '大专',    itemStyle: { color: '#ed7d31' }  },
              { value: 60, name: '本科',    itemStyle: { color: '#a5a5a5' }  },
              { value: 20, name: '硕士',    itemStyle: { color: '#ffc000' }   },
              { value: 5, name: '博士',     itemStyle: { color: '#4472c4' }  },
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
