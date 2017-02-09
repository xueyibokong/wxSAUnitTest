// pages/index/index.js
Page({
  data:{
    I : 0,
    list : [{
        title : "ONE",
        innerL : [{
          id : "001",
          text : "AAA",
          choosed:false
        },{
          id : "002",
          text : "BBB",
          choosed:false
        }]
    },{
        title : "TWO",
        innerL : [{
          id : "003",
          text : "AAA",
          choosed:false
        },{
          id : "004",
          text : "BBB",
          choosed:false
        }]
    }],
    chooseL : []
  },
  getI : function(e){
    let self = this
    let index = e.currentTarget.dataset.i
    let cData = {};
    let ls = [];
    self.data.list[index].innerL.forEach(function(item,i){
       if(i == self.data.I){
          item.choosed = true
          self.data.chooseL[index] = item.id
       }else{
          item.choosed = false
       }
       ls.push(item)
       cData.chooseL = self.data.chooseL
       cData["list["+index+"].innerL"] = ls
    })
    self.setData(cData)    
  },
  choose : function(e){
    let self = this;
    self.setData({
      I : e.currentTarget.dataset.index
    })
  },
  submit : function(){
    let self = this
    console.log(self.data.chooseL)
  }
})