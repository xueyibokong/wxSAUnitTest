// pages/index/index.js
let app = getApp();
let socketOpen = false;
let inputValue = "";
Page({
  data:{
    thevalue: "",
    msglist : []
  },
  onLoad:function(options){
    const that = this;
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      //链接
      wx.connectSocket({
        url: 'ws://www.flydiv.com:8888/',
        data:{
          nickName: that.data.userInfo.nickName,
          avatarUrl: that.data.userInfo.avatarUrl
        },
        header:{ 
          'content-type': 'application/json'
        },
        method:"GET"
      });
      //打开'
      wx.onSocketOpen(function(res) {
        socketOpen = true
        console.log("------open-----")
      })
      //接收
      wx.onSocketMessage(function(data) {
        that.data.msglist.push(JSON.parse(data.data));
        inputValue = "";
        that.setData({
          thevalue: "",
          msglist : that.data.msglist
        })
        console.log("------onmsg-----")
      })
    })
  },
  input : function(e){
    inputValue = e.detail.value
  },
  send : function(e){
    const that = this;
    if((e.detail.value || inputValue) == ""){
      return;
    }
    if(socketOpen){
      wx.sendSocketMessage({
       "data" : JSON.stringify({
          "content" : e.detail.value || inputValue,
          "avatarUrl" : that.data.userInfo.avatarUrl
       })
      })
    }else{
      wx.showToast({
        icon : "loading",
        title : "未打开WS！"
      })
    }
  }
})