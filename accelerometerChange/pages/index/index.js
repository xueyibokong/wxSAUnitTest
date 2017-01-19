let winW,winH
wx.getSystemInfo({
  success: function(res) {
    winW = res.windowWidth
    winH = res.windowHeight
  }
})
Page({
  data : {
    w : winW,
    h : winH,
    width: winW*1.25,
    height:winH*1.25,
    marginL:-winW*0.25/2,
    marginT:-winH*0.25/2,
    x : 0,
    y : 0,
    x1: 0,
    y1: 0
  },
  onLoad : function(){
    const self = this;
    const speed = 50;
    
    wx.onAccelerometerChange(function(res){
        //x轴手机以左边为边垂直于地面为（-1），向反则为（1）；
        // console.log(res.x)
        //y轴手机以底部为边垂直于地面为（-1），向反则为（1）；
        // console.log(res.y)
        //z轴正面朝上（-1），背面朝上（1），从四个方西由正向反都会是此值增加
        // console.log(res.z)  
        self.setData({
          x : (-res.x*speed).toFixed(2),
          y : (res.y*speed).toFixed(2),
          x1 : (-res.x*speed*2).toFixed(2),
          y1 : (res.y*speed*2).toFixed(2)
        })
        //console.log(res.x.toFixed(2),res.y.toFixed(2))
    })
  },
  onHide : function(){
    
  }
})