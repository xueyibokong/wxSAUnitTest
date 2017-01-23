const app = getApp();
const winW = app.globalData.systemnfo.windowWidth
import dragLine from '../../charts/line'
Page({
  data : {
    cWidth : winW,
    cHeight : 200
  },
  onLoad : function(){
    this.change("mycanvas")
    this.dragLine('firstCanvas',{
        xAxis: [ 2, 3, 4, 5, 6, 7, 8, 9],
        yAxis: [70, 20, 33, 82, 15, 67, 34, 56]
    });
    this.dragLine('secondCanvas',{
        xAxis: [0, 1, 2, 3, 4, 5, 6, 7],
        yAxis: [0, 20, 33, 82, 15, 67, 34, 56]
    })
  },
  dragLine : dragLine
  ,
  onShareAppMessage: function () {
    return {
      title: 'chart_line',
      desc: '用于呈现折现数据的图标',
      path: '/pages/touchcanvas/touchcanvas'
    }
  }
  ,
  change : function(canvasid){
    setInterval(()=>{
       var data = {
         xAxis : [],
         yAxis : []
       }
       let num = 10*Math.random().toFixed(1);
       if(num < 3){
         num = 3
       }
       for(let i = 0; i < num;i++){
          data.xAxis.push(i);
          data.yAxis.push(100*Math.random().toFixed(1))
       }
       
       this.dragLine(canvasid,data);
    },1000)
  }
})