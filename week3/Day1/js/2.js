// 封装一个类数组转数组的方法
var olis = document.getElementsByTagName('li');
Object.prototype.trans = function () {
    //  this 就是我们要去转化的类数组
    return [...this];
    return Array.from(this)
    return [].slice.call(this)
}
var olis = olis.trans();

// 从数组或者类数组中随机筛选几项 返回一个由筛选组成的新数组
Object.prototype.rm = function (n) {
    // this.length  和  n的情况
    if (n > this.length) {
        throw new Error('删除个数不合法')
    }
    // 随机筛选n项
    // splice  筛选  某一(Math.round(Math.random()*(this.length-1)))项
    // splice的操作需要执行n项
    let ary = [];
    let temp = [...this];
    for (var i = 0; i < n; i++) {
        let m = Math.round(Math.random() * (temp.length - 1));
        ary = ary.concat(temp.splice(m, 1));
    }
    return ary;
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].rm(5)) // 随机筛选了两项  返回值是筛选的项组成的新数组

Array.prototype.unique = function () {
    // 双for去重  每一轮都用当前项跟后边每一项比较，相等 就把后面的项删除，注意数组塌陷
    // 对象去重  利用对象的属性名不能重复的特点
    // indexOf lastIndexOf 合起来使用的去重：看当前项的indexOf 和 lastIndexOf 是否相等；相等说明不重复
    var temp = new Set(this);
    return [...temp];
}

String.prototype.getParame = function (key) {
    var str = this.split('?')[1];
    var ary = str.split('&');
    var obj = {};
    ary.forEach((item) => {
        // item 是一些 'a=12' 'b=13' 之类的 字符串
        var arr = item.split('=');
        obj[arr[0]] = arr[1];
    })
    if (key) {
        return obj[key];
    }
    return obj;
}
var str = "https://www.baidu.com/s?wd=%E6%B0%B4%E6%9E%9C%E6%9E%9C%E5%86%BB%E5%81%9A%E6%B3%95&rsv_spt=1&rsv_iqid=0xbfbb356600000e18&issp=1&f=3&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=ts_2&rsv_sug3=4&rsv_sug1=3&rsv_sug7=100&rsv_sug2=1&prefixsug=sggd&rsp=2&inputT=3234&rsv_sug4=3235"
console.log(str.getParame('id'));
console.log(str.getParame('a'));
console.log(str.getParame('b'));
console.log(str.getParame());
