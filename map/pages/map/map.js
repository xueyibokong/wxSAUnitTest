// map.js
var app = getApp();
import {GPS} from "../../GPS";
import {FUN} from "../../FUN";
console.log(GPS);
console.log(FUN);
Page({
  onLoad : function(e){
      var self = this; 
      wx.getLocation({
        type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
        success: function(res){
          // success
          var p = GPS.bd_encrypt(res.latitude,res.longitude);
          p = FUN.gpsSub(p.lat,p.lon);
          //数据请求
          wx.request({
            url: "http://wxit.test.bank.ecitic.com/MsmbV3/rest/framework/smapp/31",
            data: {
                "CPLAT"       : p.lat,
                "CPLNG"       : p.lon,
                "QUERYSCOPE"  : "1500",
                "h5_dc"       : "BANKQUERY_ON"
            },
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res){
              var list = res.data.data.data.resultlist;
              var cMarkers = [];
              list.forEach(function(item,index,arr){
               cMarkers.push({
                  iconPath: "/image/axye_marker.png",
                  id: index,
                  latitude: Number(item.BRANCHLAT),
                  longitude: Number(item.BRANCHLNG),
                  width: 19,
                  height: 25
               })
              })
              console.log(cMarkers)
              self.setData({
                markers : cMarkers
              })
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
        },
        fail: function() {
          // fail
          wx.showModal({
            title: '提示',
            content: '定位失败',
            success: function(res) {
              
            }
          })
        },
        complete: function() {
          // complete
        }
      })
  },
  data: {
    markers: [{
      iconPath: "/image/axye_marker.png",
      id: 0,
      latitude: 39.915174,
      longitude: 116.403905,
      width: 19,
      height: 25
    }],
    controls: [{
      id: 1,
      iconPath: '/image/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  controltap(e) {
    console.log(e.controlId)
    if(e.controlId == 1){
      this.moveToLocation();
    }
  },
  onReady : function(e){
      this.moveToLocation();
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  moveToLocation() {
    this.mapC = wx.createMapContext("map");
    this.mapC.moveToLocation();
  }
})