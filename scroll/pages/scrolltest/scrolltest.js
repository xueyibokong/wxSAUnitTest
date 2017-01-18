
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    list : [{text:1},{text:1},{text:1},{text:1},{text:1},{text:1},{text:1},{text:1},{text:1}]
  },
  upper: function(){
    wx.showToast({
      title:"刷新"
    })
  },
  lower : function(){
    wx.showToast({
      title:"加载更多"
    })
  }
})