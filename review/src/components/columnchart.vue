<template>
  <!-- 专家学历分布 -->
  <div class="minbox">
    <div class="mincharts" ref="chart">

    </div>
  </div>
</template>
<script>


export default {
  name: 'columnchart',
  data() {
    return {
      chartInstance: null,
      list: null,
      ydata: null,
      xdata: null,
      plantCap: [
      ],
    }
  },
  created() {
    var formID = this.GetRequest("formID");
    // 将yigo查询的值赋值给list
    this.list = window.parent.exec(formID, "DBNamedQuery('ProfessionalEducation')");
    // X,Y轴赋值
    this.ydata = JSON.parse(JSON.stringify(this.list)).allRows.map(el => {
      return el.vals[0]
    })
    this.xdata = JSON.parse(JSON.stringify(this.list)).allRows.map(el => {
      return el.vals[1]
    })
    this.plantCap = []
    for (let i = 0; i < this.xdata.length; i++) {
      var d = new Object();
      d.tip = this.xdata[i];
      d.num = this.ydata[i];
      this.plantCap.push(d)
    }
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
    // 数据处理
    getData() {
      this.updateData()
    },
    // 更新数据
    updateData() {
      let datalist = [
        {
          offset: [1, 20],
          symbolSize: 84,
          opacity: 0.8,
          color: '#E786D7',
          label: {
            normal: {
              textStyle: {
                fontSize: 22,
                lineHeight: 17,
                color: '#FFFFFF',
                padding: [5, 0, 0, 0],
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 500
              },
            },
          },
        },
        {
          offset: [16, 65],
          symbolSize: 105,
          opacity: 0.8,
          color: '#FFD56A',
          label: {
            normal: {
              textStyle: {
                fontSize: 24,
                lineHeight: 14,
                color: '#FFFFFF',
                padding: [5, 0, 0, 0],
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 500
              },
            },
          },
        },
        {
          offset: [46, 40],
          symbolSize: 124,
          opacity: 0.8,
          color: '#3A3DCB',
          label: {
            normal: {
              textStyle: {
                fontSize: 26,
                lineHeight: 17,
                color: '#FFFFFF',
                padding: [5, 0, 0, 0],
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 500
              },
            },
          },
        },

        {
          offset: [70, 70],
          symbolSize: 98,
          opacity: 0.8,
          color: '#4683FF',
          label: {
            normal: {
              textStyle: {
                fontSize: 18,
                lineHeight: 17,
                color: '#FFFFFF',
                padding: [5, 0, 0, 0],
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 500
              },
            },
          },
        },
        {
          offset: [80, 20],
          symbolSize: 64,
          opacity: 0.8,
          color: '#1CC7D0',
          label: {
            normal: {
              textStyle: {
                fontSize: 12,
                lineHeight: 17,
                color: '#FFFFFF',
                padding: [5, 0, 0, 0],
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 500
              },
            },
          },
        },
      ];
      var datas = [];
      for (var i = 0; i < this.plantCap.length; i++) {
        var item = this.plantCap[i];
        var itemToStyle = datalist[i];
        datas.push({
          name:
            item.num +
            // "人" + //气泡的百分比,
            "\n" +
            "\n" +
            ((item.tip)),
          value: itemToStyle.offset,
          symbolSize: itemToStyle.symbolSize,
          opacity: itemToStyle.opacity,
          label: itemToStyle.label,
          itemStyle: {
            normal: {
              color: itemToStyle.color,
              opacity: itemToStyle.opacity,
              borderWidth: "2",
              borderColor: item.color,
              borderType: "solid",
            },
          },
        });
      }
      const option = {
        title: {
          text: '专家学历分布',
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
        grid: {
          show: false,
          top: 50,
          bottom: 10,
          containLabel: true,
        },
        xAxis: [
          {
            gridIndex: 0,
            type: "value",
            show: false,
            min: 0,
            max: 100,
            nameLocation: "middle",
            nameGap: 5,
          },
        ],
        yAxis: [
          {
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: "middle",
            nameGap: 30,
          },
        ],
        series: [
          {
            name: "其他",
            type: "scatter",
            symbol: "circle",
            dataLabels: {
              allowOverlap: true,
            },
            data: datas,
          },
          {
            name: "大专",
            type: "scatter",
            symbol: "circle",
            data: datas,
          },
          {
            name: "本科",
            type: "scatter",
            symbol: "circle",
            data: datas,
          },
          {
            name: "硕士",
            type: "scatter",
            symbol: "circle",
            data: datas,
          },
          {
            name: "博士",
            type: "scatter",
            symbol: "circle",
            symbolSize: 120,
            label: {
              normal: {
                show: true,
                formatter: "{b}",
                color: "#fff",
                textStyle: {
                  fontSize: 7,
                  fontFamily: "BoldCondensed",
                },
              },
            },
            data: datas,
          },
        ],
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>