// canvas.js
let windowWidth = 0
wx.getSystemInfo({
  success (result) {
    windowWidth = result.windowWidth
  }
})
Page({
  data : {
    cWidth : "100%",
    cHeight : 200
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    // 在onLoad中调用
    this.bezierLine('firstCanvas', {
        xAxis: [0,1, 2, 3, 4, 5, 6, 7],
        yAxis: [0,11, 33, 22, 32, 14, 15, 20]
    });
    this.line('secondCanvas', {
        xAxis: [0,1, 2, 3, 4, 5, 6, 7],
        yAxis: [0,11, 33, 22, 32, 14, 15, 20]
    });
  },
  bezierLine (canvasId, options) {
      let a = windowWidth / (options.xAxis.length-1)
      let data = []
      options.xAxis.map((item, i) => {
        data.push([i * a, 200 - options.yAxis[i]])
      })
      data.unshift(data[0])
      data.push(data[data.length - 1])
      const ctx = wx.createCanvasContext(canvasId)
      ctx.beginPath()
      data.map((item, i) => {
      const a = 0.25
      const b = 0.25
      if (i == 0 || i == data.length - 1) {
        // do nothing
      } else if (i == 1) {
        ctx.moveTo(item[0], item[1])
      } else {
        const a1 = data[i - 1][0] + a * (data[i][0] - data[i - 2][0])
        const a2 = data[i - 1][1] + b * (data[i][1] - data[i - 2][1])
        const b1 = data[i][0] - b * (data[i + 1][0] - data[i - 1][0])
        const b2 = data[i][1] - b * (data[i + 1][1] - data[i - 1][1])
        ctx.bezierCurveTo(a1, a2, b1, b2, item[0], item[1])
      }
      })
      ctx.setLineWidth(1)
      ctx.setStrokeStyle('red')
      ctx.stroke()
      ctx.draw()
  },
  line (canvasId, options) {
    const ctx = wx.createCanvasContext(canvasId)
    ctx.beginPath()
    ctx.setLineWidth(1)
    ctx.setStrokeStyle('#dc6800')
    options.xAxis.forEach((item,i)=>{
      ctx.lineTo(windowWidth/options.xAxis[options.xAxis.length-1]*item,200 - options.yAxis[i])
    })
    ctx.stroke()
    ctx.lineTo(windowWidth,200)
    ctx.closePath()
    ctx.setFillStyle('rgba(109,214,32,.2)')
    ctx.fill()
    ctx.setFillStyle('red')
    ctx.setShadow(10, 50, 50, 'blue')
    ctx.fillRect(10, 10, 150, 75)
    ctx.draw();
  }
})