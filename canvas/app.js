//app.js
import FUN,{addProto} from "FUN"
App({
  onLaunch: function () {
    const self = this;
    //获取设备信息
    wx.getSystemInfo({
      success: function(res) {
        self.globalData.systemnfo = res;
      }
    })
    //初始化一些原型拓展
    addProto()
  },
  globalData:{
    userInfo:null
  }
})