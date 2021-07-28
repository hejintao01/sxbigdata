<template>
  <!--采购效益分析  -->
  <div class="box">
    <div class="charts" ref="radarchart">

    </div>
  </div>
</template>
<script>
import dataTool  from 'echarts/extension/dataTool'
export default {
  name: 'system',
  data() {
    return {
      chartInstance: null,
      list: [],
      plotdata: [],
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('ApplicationCapability')");
    console.log('支撑系统应用能力', this.list);
    // X,Y轴赋值
    this.list = JSON.parse(JSON.stringify(arr)).allRows.map(el => {
      return el.vals[2]
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
    // 处理数据
    getData() {
      this.updateData()
    },
    // 更新数据
    updateData() {
      console.log('echarts.dataTool', this.$echarts.dataTool)
      let data = this.$echarts.dataTool.prepareBoxplotData([this.list]);
      console.log("data",data);
      const option = {
        title: {
          text: '支撑系统应用能力',
          left: 'center',
          padding: [15, 0, 10, 0],
          textStyle: {
            color: '#FFFFFF',
          }
        },
        // 提示框
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        grid: {
          show: true,
          left: "12%",
          borderWidth: 1,
          borderColor: '#FFFFFF',
        },
        xAxis: {
          type: "category", //'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
          splitLine:{show:false},
          axisTick:{
            show:false
          }
        },
        yAxis: {
          splitLine:{show:false},
          axisLabel: {
            color: "#FFFFFF",
          },
          axisLine: {
            color: "#FFFFFF",
          },
          axisTick:{
            show:false
          }
        },
        series: [
          {
            name: "支撑系统应用能力", //箱线图
            type: "boxplot",
            hoverAnimation: true,
            itemStyle: {
              borderColor: "#FFFFFF", //boxplot图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
            },
            data: data.boxData,
          },
          {
            name: "异常值", //异常值
            type: "scatter", //分散
            data: data.outliers,
          },
        ],
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
<style scoped>
.box {
  /* flex: 1; */
  /* margin: 20px 15px; */
  margin: 1.25rem 0.9375rem;
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