<template>
  <div class="mapView">
    <div id="main"></div>
  </div>
</template>

<script>
import gooJson from "../../assets/data.json";

export default {
  name: "MapView",
  data() {
    return {};
  },
  mounted() {
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
            shadowColor:'reb(58,115,192)',
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
          label:{
            normal:{
                show:true,
                textStyle:{
                    color:'#fff'
                }
            },
            emphasis:{
                textStyle: {
                  color: 'reg(183,185,14)'
                }
            }
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
                areaColor: 'rgb(46,229,206)',
                bordeWidth:0.1
            }
          },
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style lang="scss" scoped>
.mapView {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>
