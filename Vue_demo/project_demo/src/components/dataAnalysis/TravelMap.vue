<template>
  <div class="trav-map">
    <div id="main"></div>
  </div>
</template>

<script>
import gooJson from "../../assets/data.json";
import { travel } from "../../api/api";

export default {
  name: "TraveMapView",
  data() {
    return {};
  },
  methods: {
    draw(points,linesData) {
      let myChart = this.$echarts.init(document.getElementById("main"));
      this.$echarts.registerMap("china", gooJson); //注册可用地图
      let option = {
        backgroundColor: "rgb(121,145,209)",
        geo: {
          map: "china",
          aspectScale: 0.75,
          zoom: 1.1,
          itemStyle: {
            normal: {
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "#09132c",
                  },
                  {
                    offset: 1,
                    color: "#274d68",
                  },
                ],
                globalCoord: true,
              },
              shadowColor: "reb(58,115,192)",
              shadowOffsetX: 10,
              shadowOffsetY: 11,
            },
          },
          regions: [
            {
              name: "南海诸岛",
            },
          ],
        },
        series: [
          {
            type: "map",
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                },
              },
              emphasis: {
                textStyle: {
                  color: "reg(183,185,14)",
                },
              },
            },
            zoom: 1.1,
            map: "china",
            itemStyle: {
              normal: {
                backgroundColor: "rgb(147,235,248)",
                bordeWidth: 1,
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgb(31,54,150)",
                    },
                    {
                      offset: 1,
                      color: "rgb(89,128,142)",
                    },
                  ],
                  globalCoord: true,
                },
              },
              emphasis: {
                areaColor: "rgb(46,229,206)",
                bordeWidth: 0.1,
              },
            },
          },
          //   关于地图散点图
          {
            type: "effectScatter", //散点图
            coordinateSystem: "geo",
            showEffectOn: "render",
            symbolSize: 10, //散点大小
            zlevel: 1,
            data: points,
            rippleEffect: {
              period: 15,
              scale: 4,
              brushType: "fill",
            },
          },
        //   关于地图线路设置
          {
            type: 'lines',
            zlevel:2,
            effect:{
                show: true,
                period:4,
                symbol:'arrow',
                symbolSize:7,
                trailLength:0.4
            },
            lineStyle:{
                normal: {
                    color:'#1DE9B6',
                    width:1,
                    opacity:0.1,
                    curveness:0.3
                }
            },
            data:linesData,
          }
        ],
      };
      myChart.setOption(option);
    },
  },
  created() {
    travel().then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        let { points, linesData } = res.data.data;

        this.draw(points,linesData)
        console.log(linesData);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.trav-map {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>
