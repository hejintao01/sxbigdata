<template>
  <!-- 违规行为现状分析 -->
  <div class="minbox">
    <div class="mincharts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'violation',
  data() {
    return {
      chartInstance: null,
      data: null,
      reason: ['中途退出次数', '迟到次数', '早退次数', '中途出入次数'],
      // pieList: null,
      pieList:[
              {name:'中途退出次数',value:10},
              {name:'迟到次数',value:40},
              {name:'早退次数',value:30},
              {name:'中途出入次数',value:20}
              ]
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    let arr = window.parent.exec(formID, "DBNamedQuery('StatusQuoOfViolations')");
    this.list = JSON.parse(JSON.stringify(arr))
    console.log('违规行为现状分析', this.list);
    // 赋值
    this.data = this.list.allRows[0].vals.map(el => {
      return el
    })
    console.log("数据库值this.data", this.data);
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
      this.chartInstance = this.$echarts.init(this.$refs.chart)
    },
    // 处理数据
    getData() {
      // 饼图对数据处理
      this.pieList = [];
      let arr =[]
      this.data.forEach((el,index) => {
        if(0<index&&index<5){
          arr.push(el)
        }
      });
      console.log(arr);
      for (var i = 0; i < this.data.length; i++) {
          var d = new Object();
          d.name = this.reason[i];
          d.value =arr[i];
          this.pieList.push(d)
      }
      console.log('分析this.pieList', this.pieList);
      this.updateData()
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: '违规行为现状分析',
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
          right: 'left',
          y: 'center',
          textStyle: {
            color: '#FFFFFF'
          }
        },
        color: ['#5889F0', '#FE5558', ' #72CEFC', '#FFD572','#5DD3A5','#FF67C2'],
        series: [
          {
            type: 'pie',
            radius: ['30%','65%'],
            center:['45%','50%'],
            data: this.pieList,
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
