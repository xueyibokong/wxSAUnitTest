export default {
    title : "公用方法"
}
//原型拓展
export function addProto(){
    Array.prototype.maxValue = function () {
        console.log(this)
        return Math.max.apply({},this)
    }
}