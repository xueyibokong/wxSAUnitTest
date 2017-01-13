export var FUN = {
    msg : "这是本工程公用方法", 
    gpsSub : function(clat,clon){
        var clat = clat + '';
        var clon = clon + '';
        return {
            lat : clat.substring(0,clat.indexOf("."))+clat.substr(clat.indexOf("."),5),
            lon : clon.substring(0,clon.indexOf("."))+clon.substr(clon.indexOf("."),5)
        }
    },
    emptyObj : function(obj){
        for(let x in obj){
            return 1
        }
        return 0
    },
    extendObj : function(obj1,obj2){
        obj1 = obj1 || {}
        obj2 = obj2 || {}
        if(this.emptyObj(obj1) == 0){
            return obj2
        }else if(this.emptyObj(obj2) == 0){
            return obj1
        }
        for(let x in obj1){
            for(let y in obj2){
                if(y === x){
                    obj1[x] = obj2[y]
                }else {
                    obj1[y] = obj2[y]
                }
            }
        }
        return obj1
    }  
}