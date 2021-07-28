<template>
<!-- 采购经理画像 -->
  <div class="box">
    <div class="charts" ref="radarchart">
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
    let arr = window.parent.exec(formID, "DBNamedQuery('RankingOfRadar')");
    console.log('采购经理画像', arr);
    // 赋值
    let arr2 = arr.allRows.map(el => {
      return el.vals
    })
    let arr3 = JSON.parse(JSON.stringify(arr2))
    arr3[0].slice(2, 7).forEach(e => {
      this.list.push(e)
    })
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
      let res = ''
      res = JSON.parse(JSON.stringify(this.list))
      console.log("采购经理绘图数据",res);
      const option = {
        title: {
          text: '采购经理画像',
          textStyle: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 18,
          },
          left: 'center',
          padding: [15, 0, 10, 0]
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
        grid:{
          left:'15%'
        },
      radar: {
        indicator: [  
          { name: '任职资格\n\n能力'},
          { name: '基本业务\n\n能力'},
          { name: '专业胜任\n\n能力'},
          { name: '实践创新\n\n能力'},
          { name: '成长传承\n\n能力'},
        ],
          axisLine: {
          show: false,
          },
        name: {
          color: '#ffffff',
          },
          radius:'70%',
      },
      series: [
        {
          type: 'radar',
          name:'采购经理画像',
          data: [
            {
              value: res,
            }
          ],
          lineStyle: {
            color: '#5B9BD5'
          },
        }
      ],
      }
      this.chartInstance.setOption(option,true)
      let size = this.chartInstance
      window.onresize = function () {
        size.resize();
      }
  }
}
}
</script>
<style>
.box {
  /* flex: 1; */
  /* margin: 20px 15px; */
  margin: 1.25rem .9375rem;
  /* width: 25%;
  height: 25%; */
  width: 27.5rem;
  height: 33.125rem;
  border: 1px solid black;
  background: linear-gradient(#0079d0, #004576);
}
.charts {
  width: 27.5rem;
  height: 33.125rem;
}
</style>
