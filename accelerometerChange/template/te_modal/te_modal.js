let Modal = {
    getThisPage : function(){
        let pageList = getCurrentPages();
        return pageList[pageList.length - 1]
    },
    showToast : function (text,time){
        let t = time || 3000;
        let self = Modal.getThisPage();
        self.hideToast = Modal.hideToast
        self.setData({
          show : true,
          text : text
        });
        clearTimeout(wx.selfModalt);
        wx.selfModalt = setTimeout(function(){
            self.setData({
                show : false
            });
        },t)
    },
    hideToast:function(){
        let self = Modal.getThisPage()
        clearTimeout(wx.selfModalt);
        self.setData({
            show : false
        });
    }
}
module.exports = Modal