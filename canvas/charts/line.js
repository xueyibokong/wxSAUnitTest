export default function dragLine (canvasid,ops){
    const self = this;
    const margin = 25,startY = self.data.cHeight-margin,endX = self.data.cWidth - margin
    const lenX = ops.xAxis.length,lenY = ops.yAxis.length
    let startX = margin
    //获取到y轴最大值，通过此值决定startX的值
    let maxY = ops.yAxis.maxValue();
    function setMaxY(num){
        if(maxY < lenY*(num*10)){
            maxY = lenY*(num*10)
            return
        }else{
            setMaxY(num+1)
        }
    }
    setMaxY(1)
    startX = margin+(5*String(maxY).length)
    const marginX = (self.data.cWidth-startX-margin)/(lenX-1),marginY = (self.data.cHeight-margin*2)/(lenY-1)
    const ctx = wx.createCanvasContext(canvasid)
    const fontsize = 12,lineheight = fontsize/3,textalign = fontsize/4
    let pointlist = [];

    //样式
    ctx.setStrokeStyle('black')
    ctx.setLineWidth(1)
    ctx.setFontSize(fontsize)
    //draw坐标
    _linesegment(()=>{
        _moveToStart()
        ctx.lineTo(startX,margin)
        _moveToStart()
        ctx.lineTo(endX,startY)
    })
    //Y轴刻度
    let sY = startY
    ops.yAxis.map((item,i)=>{  
        _linesegment(()=>{
            ctx.setStrokeStyle('#1987c7')
            ctx.fillText(maxY/lenY*i,startX-(String(maxY/lenY*i).length+1)*(fontsize/2),sY+lineheight)
            ctx.moveTo(startX,sY);
            ctx.lineTo(startX-fontsize/3,sY)
        }) 
        if(i != 0){
            _linesegment(()=>{
            ctx.setStrokeStyle('#efefef')
            ctx.moveTo(startX,sY);
            ctx.lineTo(endX,sY)
            })
        }
        sY -= marginY 
    })
    //X轴刻度
    let sX = startX
    _linesegment(()=>{
        ctx.setStrokeStyle('#dc6800')
        ops.xAxis.map((item,i)=>{ 
            ctx.fillText(item,sX-textalign,startY+fontsize+lineheight)
            ctx.moveTo(sX,startY);
            ctx.lineTo(sX,startY+fontsize/3)
            sX += marginX
        })
    })
    //折线
    let scaleY = (self.data.cHeight-margin*2)/maxY
    console.log(scaleY)
    _linesegment(()=>{
        ctx.setStrokeStyle('red')
        sX = startX
        ops.yAxis.map((item,i)=>{
            ctx.lineTo(sX,startY-item*scaleY)
            sX += marginX
        })
        console.log(1)
    },()=>{
        ctx.lineTo(endX,startY)
        ctx.closePath()
        ctx.setFillStyle('rgba(109,214,32,.2)') 
        ctx.fill()  
        console.log(2)
    }) 
    //绘制作
    ctx.draw() 

    function _moveToStart(){
        //移动到原点
        ctx.moveTo(startX,startY);
    }
    function _linesegment(call1,call2){
        //线条段落绘制
        ctx.beginPath()
        call1()
        ctx.stroke()
        call2 = call2 || function(){}
        call2()
    }
}