<template>
  <!-- 供应商构成 -->
  <div class="box">
    <div class="charts" ref="constitutechart">
    </div>
  </div>
</template>
<script>


export default {
  name: 'constitute',
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
      this.chartInstance = this.$echarts.init(this.$refs.constitutechart)
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
          text: '供应商构成',
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
          bottom:'10%',
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
              { value: 45, name: '国企', itemStyle: { color: '#5b9bd5' } },
              { value: 55, name: '私营企业',    itemStyle: { color: '#ed7d31' }  },
            ],
            center: ['50%','50%'],
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
