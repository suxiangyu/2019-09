var reg = /\d/;
console.log(reg.test('你好')); // false    // 查看后边的字符串中有没有  满足正则的字符
console.log(reg.test('你好234234')); // true
console.log(reg.test('你好2'));      // true
console.log(reg.test('0你好'));      // true
console.log(reg.test('你9好'));      // true

var reg2 = /\D/;
console.log(reg2.test('你好'));       // true
console.log(reg2.test('你好234234')); // true
console.log(reg2.test('你好2'));      // true
console.log(reg2.test('0你好'));      // true
console.log(reg2.test('你9好'));      // true
console.log(reg2.test('666'));        // false

console.log('======================================================================================================')
var reg3 = /\w/;  // 数字 字母 下划线 
console.log(reg3.test('你好'));       // false
console.log(reg3.test('你好234234')); // true
console.log(reg3.test('你好2'));      // true
console.log(reg3.test('0你好'));      // true
console.log(reg3.test('你9好'));      // true
console.log(reg3.test('666'));        // true
console.log(reg3.test('a你好'));      // true
console.log(reg3.test('你_好'));      // true

console.log('======================================================================================================')
var reg3 = /\W/;  // 数字 字母 下划线 
console.log(reg3.test('你好'));       // true
console.log(reg3.test('你好234234')); // true
console.log(reg3.test('你好2'));      // true
console.log(reg3.test('0你好'));      // true
console.log(reg3.test('你9好'));      // true
console.log(reg3.test('666'));        // false
console.log(reg3.test('a你好'));      // true
console.log(reg3.test('你_好'));      // true

console.log('======================================================================================================')
var reg4 = /^\d/; // 以数字开头
console.log(reg4.test('你好'));       // false
console.log(reg4.test('你好234234')); // false
console.log(reg4.test('你好2'));      // false
console.log(reg4.test('0你好'));      // true
console.log(reg4.test('你9好'));      // false
console.log(reg4.test('666'));        // true
console.log(reg4.test('a你好'));      // false
console.log(reg4.test('你_好'));      // false

console.log('======================================================================================================')
var reg5 = /\d$/; // 以数字结尾
console.log(reg5.test('你好'));       // false
console.log(reg5.test('你好235234')); // true
console.log(reg5.test('你好2'));      // true
console.log(reg5.test('0你好'));      // false
console.log(reg5.test('你9好'));      // false
console.log(reg5.test('666'))       // true
console.log(reg5.test('a你好'));      // false
console.log(reg5.test('你_好'));      // false

var reg5 = /^\d$/; // 以数字开头，并且以这个数字结尾， 也就是只能一个数字

var reg6 = /./; // 点在正则中代表除了换行以外的所有字符 \.才代表 点本身
console.log(reg6.test('123')); // true
var reg6 = /\./;
console.log(reg6.test('123')); // false
console.log(reg6.test('12.3'));// true

var reg7 = /[ab]/; // 字符串中含有a或b
console.log(reg7.test('ahello')); // true
console.log(reg7.test('hello'));  // false
console.log(reg7.test('hello b')); // true
console.log(reg7.test('hello ab'));// true

// 能匹配 数字 和 字母的正则
var reg8 = /[0-9a-zA-Z]/
var reg8 = /[0-9A-Za-z]/

var reg9 = /18|19/ // 包含18或者19  
console.log(reg9.test('1819'))

var reg10 = /^18|19$/ // 以18开头或者19结尾

// 以1开头 中间是8或1 以9结尾
var reg11 = /^1(8|1)9$/  // 利用分组()实现的4

var reg13 = /hello(?=qqq)/ // 包含hello 后边必须是qqq
console.log(reg13.text('helloqqq'))



