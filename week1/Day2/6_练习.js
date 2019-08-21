//----------------------------
    console.log(a);    // undefined
    var a=12;
    function fn(){
        console.log(a);  // undefined
        var a=13;
    }
    fn();
    console.log(a)     // 12

    //-------
    console.log(a);        // undefined
    var a=12;
    function fn(){
          console.log(a);    // 12
          a=13
    }
    fn();
    console.log(a)          // 13
    //----------------
    var foo=1;
    function bar(){      
        if(!foo){
            var foo=10;         
        }
        console.log(foo);   // 10
    }
    bar();
    console.log(foo)        // 1

//----------------------------

    var n=13;
    function fn(n){
       alert(n);       // 13
       var n=14;      //  14
       alert(n);
    }
    fn(n);
    console.log(n)   // 13
//----------------------------
    var n = 13;
    function fn(){
         n = 15;
         console.log(n);   // 15
    }
    fn();
    alert(n);     // 15
//----------------------------
    var n = 10;
    function outer(){
        var n = 15;
        function inner(){
            function center(){
                alert(n);   // 15
            }
            center();
        }
        inner();
    }
    outer()
//-----------------------------
    var n=0;
    function a(){
        var n=10;
        function b(){
            n++;
            alert(n);  // 11
        }
        b();
    }
    a();
    alert(n);
//--------------------------
    console.log(num,str);   // undefined  undefined
    var num = 18;           
    var str = "lily";
    function fn2(){
        console.log(str,num);  // lily  undefined
        num = 19;
        str = "candy";
        var num = 14;
        console.log(str,num);  //  candy     14
    }
    fn2();
    console.log(str,num);   // candy 18
//----------------------------------------------------
    alert(a);                      // undefined
    console.log("a" in window);    // true
    if(!("a" in window)){
        var a = 10;
    }
    alert(a);       // undefined

    console.log(fn);          // undefined
    if(9==8){
        function fn(){
            alert(2);
        }
    }
//    ---------------------------------
    f = function(){return true};
    g = function(){return false};
    (function (){
        console.log(g);      // false
        if(g()&&[]==![]){
            f = function f(){return false};
            function g(){return true};
        }
    })();
    alert(f());   // true
    alert(g())   // false