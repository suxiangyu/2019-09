//1、
var str= "我是MT";
test();
function test() {
    console.log(str);      // undefined
    var str= "哈哈哈";
    console.log(str);    // "哈哈哈"
}
console.log(str);       // "我是MT"

//2、
console.log(a);       // undefined
a=12;
function fn(a){     
    console.log(a);    // undefined
    a=13   
}
fn();
var a;
console.log(a);     // 12

//3、
function test(){
    if("a" in window){
        var a = 10;
    }
    console.log(a);  // undefined
}
test();

//4、
var a = 1;
function fn() {
    console.log(a);   // undefined
    var a = 5;
    console.log(a); // 5
    a++;
    var a ;
    fn3();
    fn2();
    console.log(a);   // 1
    function fn2() {
        console.log(a); // 6
        a = 20;
    }
}
function fn3() {
    console.log(a);  // 20
    a = 200;
};
fn();
console.log(a);    // 200


//5、
var n = 10;
function outer(){
    var n = 15;
    function inner(n){
        console.log(n)     // 15
        function center(){
            n++;
            console.log(n);  // 16
        }
        center();
    }
    inner(n);  
}
outer();

//6、
var n = 10;
function outer(){
    n = 15;
    function inner(){
        console.log(n++);   // 15   a++ 和 ++a的相同点都是给a+1，不同点是a++是先参加程序的运行再+1，
     //   而++a则是先+1再参加程序的运行。
        function center(){
            n+=2;
            console.log(n);  // 18
        }
        center();
    }
    inner();
};
outer();
console.log(n)    // 18
 


//----------------------------------------------------
alert(a);                          // undefined
console.log("a" in window);       // true
if(!("a" in window)){
    var a = 10;
}
alert(a);             // undefined

console.log(fn);      // undefined
if(9==8){
    function fn(){
        alert(2);
    }
}
//    ---------------------------------
f = function(){return true};
g = function(){return false};
(function (){
    console.log(g);    // undefined
    if(g()&&[]==![]){
        f = function f(){return false};
        function g(){return true};
    }
})();
alert(f());
alert(g())