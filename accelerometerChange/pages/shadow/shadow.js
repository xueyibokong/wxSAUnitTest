// pages/shadow/shadow.js
Page({
  data:{
    list : [{
      name : "红玫瑰",
      msg   : "我爱你",
      bottom:-35,
      lineH : 89,
      x : 10,
      y : 10
    },{
      name : "康乃馨 ",
      msg   : "母爱",
      bottom:-35
    },{
      name : "郁金香",
      msg   : "魅惑、爱之寓言",
      bottom:-35
    },{
      name : "波斯菊",
      msg   : "纯情、永远快活",
      bottom:-35
    },{
      name : "水仙花",
      msg   : "尊敬",
      bottom:-35
    },{
      name : "白山茶",
      msg   : "真爱、真情",
      bottom:-35
    }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  touchS : function(e){
    let index = e.target.id;
    let cData = {};
    cData['list['+index+'].bottom'] = 0
    this.setData(cData)
  },
  touchE : function(e){
    let index = e.target.id;
    let cData = {};
    cData['list['+index+'].bottom'] = -35
    setTimeout(()=>{
      this.setData(cData)
    },800)
  }
})