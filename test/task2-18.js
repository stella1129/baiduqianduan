window.onload=function() {
    var a = [];
    var num = document.getElementById("number-input");
    var le_in = document.getElementsByClassName("left-in")[0];
    var ri_in = document.getElementsByClassName("right-in")[0];
    var le_out = document.getElementsByClassName("left-out")[0];
    var ri_out = document.getElementsByClassName("right-out")[0];
    le_in.addEventListener("click", jug1);
    ri_in.addEventListener("click", jug2);
    le_out.addEventListener("click", jug3);
    ri_out.addEventListener("click", jug4);
    function jug1() {
        var va = num.value.trim();
        if (!va.match(/^[0-9]+$/)) {
            alert("baby,请输入数字,好吗?");
        }
        else {
            leftIn()
            show()
        }
    }

    function jug2() {
        var va = num.value.trim();
        if (!va.match(/^[0-9]+$/)) {
            alert("baby,请输入数字,好吗?");
        }
        else {
            rightIn();
            show();
        }
    }

    function jug3() {
        var va = num.value.trim();
        if (!va.match(/^[0-9]+$/)) {
            alert("baby,请输入数字,好吗?");
        }
        else {
            leftOut();
            show();
        }
    }

    function jug4() {
        var va = num.value.trim();
        if (!va.match(/^[0-9]+$/)) {
            alert("baby,请输入数字,好吗?");
        }
        else {
            rightOut();
            show();
        }
    }

//function where(){
//    switch(y){
//        case"1":
//            leftIn();
//        case"2":
//            rightIn();
//        case "3":
//            leftOut();
//        case "4":
//            rightOut();
//
//
//    }

    function leftIn() {
        //        alert("u good")
        var va = num.value.trim();
        a.unshift(va);
        return a;
    }

    function rightIn() {
        var va = num.value.trim();
        a.push(va);
        return a;
    }

    function leftOut() {
        var va = num.value.trim();
        a.shift(va);
        return a;
    }

    function rightOut() {
        var va = num.value.trim();
        a.pop(va);
        return a;
    }

    function show() {
        var showb = document.getElementById("showbar");
        str = '';
        console.log(a);
        for(var x in a) {
            console.log('22222'+a[x])
            str += "<div class='block' style='background-color: red;width: 30px;height: 30px' >" + parseInt(a[x]) + "</div>"
        }
        showb.innerHTML = str;
        addDelEvent()

    }

    function addDelEvent() {
        var showb = document.getElementById("showbar");
        for (var cur = 0; cur < showb.childNodes.length; cur++) {
            //这里要使用闭包，否则永远绑定到指定div上的delete函数的参数永远等于跳出时的cur值(length);
            showb.childNodes[cur].addEventListener("click", function(cur) {
                console.log("进入点击事件")
                return function(){return a.del(cur)};
            }(cur));
        }
    }
    function del(index){
        console.log("aaaaaaaaaaaaaaa");
        a.splice(index,1);
        show()
    }
}
