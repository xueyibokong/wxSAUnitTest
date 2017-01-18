// map.js
var app = getApp();
var API = require('../../common/API');
var  selfLatitude = 39.93056,selfLongitude = 116.4355;
Page({
  data: {
    controls: [{
      id: 1,
      iconPath: '/image/localtion.png',
      position: {
        left: 15,
        top:app.globalData.systemInfo.windowHeight - 15,
        width: 35,
        height: 35
      },
      clickable: true
    },{
      id: 1,
      iconPath: '/image/myLocaltion.png',
      position: {
        left: app.globalData.systemInfo.windowWidth/2 -18,
        top:app.globalData.systemInfo.windowHeight/2+18,
        width: 35,
        height: 35
      },
      clickable: true
    }]
  },
  regionchange(e) {
    var self = this;
    if(e.type == "end"){
      self.mapCtx.getCenterLocation({
        success: function(res){
              try{
                 self.getData(res);
              }catch(e){
                 self.mideData(res);
              }
        }
      })
    }
  },
  markertap(e) {
    console.log(e)
  },
  controltap(e) {
    var self = this;
    switch(e.controlId){
        case 1: 
        self.moveLocation();
        break;
    }
  },
  onLoad : function(ops){
    var self = this;
    self.mapCtx = wx.createMapContext("map");
  }, 
  moveLocation : function(){
    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx.moveToLocation();
  },
  onReady : function(){
    var self = this;
    setTimeout(function(){
      self.mapCtx.moveToLocation();
    },1000) 
  },

  //数据来源
  mideData : function(res){
    selfLatitude = res.latitude;
    selfLongitude = res.longitude;
    var markers = [];
    var num = Math.floor(10*Math.random());
    if(num < 3){
      num = 3;
    }
    for(let i = 0;i < num; i++){
      var item = {
          iconPath: "/image/axye_marker.png",
          id: 4,
          width: 19,
          height: 25
      }
      if(i%2 == 0){
        item.latitude = selfLatitude + Math.random()/100;
        item.longitude = selfLongitude + Math.random()/100;
      }else{
        item.latitude = selfLatitude - Math.random()/100;
        item.longitude = selfLongitude - Math.random()/100;
      }
      markers.push(item);
    }
    self.setData({
      markers : markers
    });
  },
  getData : function(e){
    selfLatitude = String(e.latitude);
    selfLongitude = String(e.longitude);
    console.log(selfLatitude,selfLongitude)
    var self = this; 
    var markers = [];
    var outitem = {
        iconPath: "/image/axye_marker.png",
        id: 4,
        width: 19,
        height: 25
    }
    API.request({
        url: "http://wxit.test.bank.ecitic.com/MsmbV3/rest/framework/smapp/31",
        method : "POST",
        "CPLAT" : selfLatitude.slice(0,selfLatitude.indexOf(".")+5),
        "CPLNG" : selfLongitude.slice(0,selfLongitude.indexOf(".")+5),
        "QUERYSCOPE" : "3500",
        "h5_dc" : "BANKQUERY_ON"
    }).then(function(res){
        // success
        res.data.data.data.resultlist.forEach(function(item,index,arr){
            item = Object.assign(outitem,item);
            item.latitude = Number(item.BRANCHLAT);
            item.longitude = Number(item.BRANCHLNG);
            markers.push(item);
        })
        self.setData({
          markers : markers
        });
    },function(){

    })
  }
})
