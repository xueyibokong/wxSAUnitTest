const app = getApp();
const winW = app.globalData.systemnfo.windowWidth
import dragLine from '../../charts/line'
Page({
  data : {
    cWidth : winW,
    cHeight : 200
  },
  onLoad : function(){
    this.dragLine('mycanvas',{
        xAxis: [0, 1, 2, 3, 4, 5, 6, 7],
        yAxis: [0, 60, 33, 22, 32, 14, 15, 20]
    });
  },
  dragLine : dragLine
})