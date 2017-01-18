
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    list : [{text:1},{text:1},{text:1},{text:1},{text:1},{text:1},{text:1},{text:1},{text:1}]
  },
  onPullDownRefresh: function(){
    wx.showToast({
      title:"刷新"
    })
    setTimeout(function(){
      wx.stopPullDownRefresh()
    },3000)
   
  },
  onReachBottom : function(){
    wx.showToast({
      title:"加载更多"
    })
  }
})