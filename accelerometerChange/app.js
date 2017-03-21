//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    let Modal =  require("./template/te_modal/te_modal")
    wx.selfModal = Modal
  },
  getUserInfo:function(cb){
   
  },
  globalData:{
    userInfo:null
  }
})