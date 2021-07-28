<template>
  <!-- 代理项目规模分析 -->
  <div class="box">
    <div class="charts" ref="columnchartoverchart"></div>
  </div>
</template>
<script>
export default {
  name: "columnchartover",
  data() {
    return {
      chartInstance: null,
      list: null,
      xdata:null,
      ydata:null,
    };
  },
  mounted() {
    this.initChart();
    this.getData();
  },
  methods: {
    // 初始化echartsInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.columnchartoverchart);
    },
    // 获取数据
    getData() {
      // 加强接口渲染
      // const {data:ret} = await this.$http.get('')
      const data = [
        { name: "1", value: "1" },
        { name: "2", value: "2" },
      ];
      console.log(data);
      this.list = data;
      this.updateData();
    },
    // 更新数据
    updateData() {
      const option = {
        title: {
          text: " 代理项目规模分析",
          left: "center",
          padding: [15, 0, 10, 0],
          textStyle: {
            color: "#FFFFFF",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#283b56",
            },
          },
        },
        legend: {
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#FFFFFF",
          },
          itemHeight: 8,
          itemGap: 10,
          icon: "roundRect",
          data: ["项目数", "金额"],
        },
        xAxis: [
          {
            type: "category",
            data: [
              "代理机构A",
              "代理机构B",
              "代理机构C",
              "代理机构D",
              "代理机构E",
              "代理机构F",
              "代理机构G",
            ],
            axisLabel: {
              rotate: 30,
              interval: 0,
              textStyle: {
                color: "#FFFFFF",
                fontSize: "10",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#FFFFFF",
              },
            },
            axisTick: {
              alignWithLabel: true,
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            //name: '项目数',
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              alignWithLabel: true,
              show: false,
            },
            axisLabel: {
              color: "#FFFFFF",
            },
            max: 160,
            min: 0,
          },
          {
            type: "value",
            // name: '金额',
            //	                        axisLabel: {
            //	                            formatter: '{value} °C'
            //	                        },
            max: 20,
            min: 0,
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              alignWithLabel: true,
              show: false,
            },
            axisLabel: {
              color: "#FFFFFF",
            },
          },
        ],
        series: [
          {
            name: "项目数",
            type: "bar",
            data: [120, 132, 145, 153, 121, 130, 142],
            color: "#5b9bd5",
            barWidth: 15,
          },
          {
            name: "金额",
            type: "line",
            yAxisIndex: 1,
            data: [17, 15, 16, 17, 18, 15, 22],
            color: "#ed7d31",
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 3,
              },
            },
          },
        ],
      };
      this.chartInstance.setOption(option);
    },
  },
};
</script>
