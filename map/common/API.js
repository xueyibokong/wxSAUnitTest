let API = {
    request : function(param){
        let url = param.url;
        let method = param.method;
        delete param.url;
        delete param.method;
        return new Promise(function(resolve,reject){
            wx.request({
                url: url,
                data: Object.assign({},param),
                method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                // header: {}, // 设置请求的 header
                success: function(res){
                    // success
                    resolve(res);
                },
                fail: function(e) {
                    // fail
                    reject(e)
                }
            })
        })
    }
}
module.exports = API;