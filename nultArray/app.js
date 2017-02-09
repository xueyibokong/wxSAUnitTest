//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var self = this;
    wx.getSystemInfo({
      success: function(res) {
        self.globalData.systemInfo = res;
      }
    })
  },
  globalData:{
    userInfo:null
  }
})
