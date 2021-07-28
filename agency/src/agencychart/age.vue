<template>
  <!-- 代理机构成员年龄构成 -->
  <div class="box">
    <div class="charts" ref="agechart"></div>
  </div>
</template>
<script>
export default {
  name: "age",
  data() {
    return {
      chartInstance: null,
      list: null,
    };
  },
  mounted() {
    this.initChart();
    this.getData();
  },
  methods: {
    // 初始化echartsInstance对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.agechart);
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
      const tabname = this.list.map((el) => {
        return el.name;
      });
      const tabvalue = this.list.map((el) => {
        return el.value;
      });
      const option = {
        title: {
          text: "代理机构成员年龄构成",
          left: "center",
          padding: [15, 0, 10, 0],
          textStyle: {
            color: "#FFFFFF",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}:{d}%",
        },
        legend: {
          orient: "vertical",
          right: "0%",
          y: "center",
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: "#FFFFFF",
            fontWeight: 300,
            fontSize: 15, //文字的字体大小
          },
        },
        series: [
          {
            type: "pie",
            radius: "70%",
            data: [
              { value: 10, name: "20-30岁", itemStyle: { color: "#5b9bd5" } },
              { value: 40, name: "30-40岁", itemStyle: { color: "#ed7d31" } },
              { value: 35, name: "40-50岁", itemStyle: { color: "#a5a5a5" } },
              { value: 15, name: "50-60岁", itemStyle: { color: "#ffc000" } },
            ],
            center: ["38%", "50%"],
            label: {
              normal: {
                show: true,
                position: "inner",
                formatter: "{d}%",
                textStyle: {
                  fontWeight: 350,
                  fontSize: 20, //文字的字体大小
                },
              },
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      this.chartInstance.setOption(option);
      // setTimeout(function () { // window.onresize = function () { // twChart.resize(); //} //}, 200)
    },
  },
};
</script>
