// map.js
Page({
  onLoad : function(e){
      var self = this; 
      wx.getLocation({
        type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
        success: function(res){
          // success
          self.setData({
              markers: [{
                iconPath: "/image/axye_marker.png",
                id: 0,
                latitude: 39.93256,
                longitude: 116.4255,
                width: 19,
                height: 25,
                title:"123"
              },{
                iconPath: "/image/axye_marker.png",
                id: 1,
                latitude: 39.93050,
                longitude: 116.4305,
                width: 19,
                height: 25
              },{
                iconPath: "/image/axye_marker.png",
                id: 2,
                latitude: 39.93006,
                longitude: 116.4455,
                width: 19,
                height: 25
              },{
                iconPath: "/image/axye_marker.png",
                id: 3,
                latitude: 39.92006,
                longitude: 116.4405,
                width: 19,
                height: 25
              },{
                iconPath: "/image/axye_marker.png",
                id: 4,
                latitude: 39.94056,
                longitude: 116.4425,
                width: 19,
                height: 25
              }]
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
      latitude: "39.915174",
      longitude: "116.403905",
      width: 19,
      height: 25
    }]
  },
  
  onReady : function(e){
      this.map = wx.createMapContext("map");
      this.map.moveToLocation();
  }
 
})