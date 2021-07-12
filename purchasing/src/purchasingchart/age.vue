<template>
  <!-- 采购经理成员年龄构成 -->
  <div class="box">
    <div class="charts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'age',
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
          text: '采购经理成员年龄构成',
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
              { value: 35, name: '20-30岁', itemStyle: { color: '#A5A5A5' } },
              { value: 25, name: '30-40岁', itemStyle: { color: '#FFC000' } },
              { value: 12, name: '40-50岁', itemStyle: { color: '#5B9BD5' } },
              { value: 28, name: '50-60岁', itemStyle: { color: '#ED7D31' } },
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
