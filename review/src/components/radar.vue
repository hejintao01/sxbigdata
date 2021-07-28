<template>
  <!-- 评审专家画像 -->
  <div class="minbox">
    <div class="mincharts" ref="radarchart">
    </div>
  </div>
</template>
<script>


export default {
  name: 'columnchart',
  data() {
    return {
      chartInstance: null,
      list: []
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('RadarImageAndPortraitRanking')");
    let arr1 = JSON.parse(JSON.stringify(arr))
    // 赋值
    let arr2 = arr1.allRows.map(el => {
      return el.vals
    })
    arr2[0].slice(4, 9).forEach(e => {
      this.list.push(e)
    })
    console.log('评审专家画像this.list', this.list);
  },
  mounted() {
    this.initChart()
    this.getData()
  },
  methods: {
    // 获取yigo中的数据
    GetRequest(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return decodeURIComponent(r[2]);
      }
      else {
        return null;
      }
    },
    // 初始化echartsInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.radarchart)
    },
    // 数据处理
    getData() {
      this.updateData()
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: '评审专家画像',
          textStyle: {
            color: '#FFFFFF',
            fontSize: 16,
            fontStyle: 'normal',
            fontFamily: 'PingFang SC',
            fontWeight: 500,
            lineHeight: 16
          },
          left: 'left',
          padding: [24, 0, 0, 24]
        },
        // 提示框
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        grid: {
          left: '15%'
        },
        radar: {
          indicator: [
            { name: '专业水平', max: 10 },
            { name: '价值水平', max: 10 },
            { name: '成长水平', max: 10 },
            { name: '信用水平', max: 10 },
            { name: '偏好水平', max: 10 },
          ],
          axisLine: {
            show: false,
          },
          // 网格线数
          splitNumber: 7,
          name: {
            color: ' rgba(255, 255, 255, 0.7)',
            fontSize: 13.8,
            fontStyle: 'normal',
            fontFamily: 'PingFang SC',
            fontWeight: 500,
            lineHeight: 16
          },
          radius: '65%',
          splitLine: {
            lineStyle: {
              color: ['#737373']
            }
          },
          // 隐藏网格填充颜色
          splitArea: {
            show: false
          }
        },
        series: [
          {
            type: 'radar',
            name: '专家画像',
            data: [
              {
                value: this.list,
              }
            ],
            opacity: 0.24,
            lineStyle: {
              color: '#FF8A65'
            },
            symbol: 'none', //去掉折线图中的节点
            areaStyle: {
              color: '#FF8A65'
            }
          }
        ],
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
<style>

</style>
