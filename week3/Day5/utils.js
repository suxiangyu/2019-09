// utils  这个js提供一些我们常用的方法
var utils = {
    getCss: function (ele, attr) {
        // getCss(box,'width') 获取box的 width 属性值
        // getCss(box,'background') 获取box的 width 属性值
        // px rem em pt  含有这些的字符串  我们用 parseFloat处理
        var reg = /^[-+]?\d+(\.\d+)?(px|rem|em|pt)?$/
        var obj = getComputedStyle(ele, null);
        var res = obj[attr]; // 有可能是 100px
        if (reg.test(res)) {
            return parseFloat(res)
        }
        return res;
    },
    setCss: function (ele, attr, val) {
        var reg = /width|heigth|padding|margin|left|rigth|top|bottom/i;
        if (reg.test(attr)) {
            ele.style[attr] = parseFloat(val) + 'px'
        } else {
            ele.style[attr] = val;
        }
    },
    offset: function (ele) {
        // 获取ele到body的偏移量
        var l = ele.offsetLeft,
            t = ele.offsetTop
        var temp = ele.offsetParent;
        while (temp) {
            l += temp.offsetLeft + temp.clientLeft;
            t += temp.offsetTop + temp.clientTop;
            temp = temp.offsetParent;
        }
        return {
            l, t
        }
    },
    winH:function () {
        return  document.documentElement.clientHeight || document.body.clientHeight;    
    }
}