<template>
  <!-- 投诉事项分布 -->
  <div class="box">
    <div class="charts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'matter',
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
      this.chartInstance = this.$echarts.init(this.$refs.chart)
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
          text: '投诉事项分布',
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
        series: [
          {
            type: 'pie',
            radius: '50%',
            data: [
              { value: 35, name: '事项1',  },
              { value: 25, name: '事项2',  },
              { value: 12, name: '事项3',  },
              { value: 35, name: '事项4',  },
              { value: 25, name: '事项5',  },
              { value: 12, name: '其他',  },
            ],
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
