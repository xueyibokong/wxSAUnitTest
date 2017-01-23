export default {
    title : "公用方法"
}
//原型拓展
export function addProto(){
    Array.prototype.maxValue = function () {
        return Math.max.apply({},this)
    }
}