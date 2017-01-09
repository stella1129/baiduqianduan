/**
 * Created by admin on 2016/12/6.
 */
//不同浏览器绑定事件
window.onload=function(){

    function addEvent(element, event, listener) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, false);
        }
        else if (element.attachEvent) {
            element.attachEvent("on" + event, listener);
        }
        else {
            element["on" + event] = listener;
        }
    }
//给数组里每个数添加事件
    function each(arr,fn){
        for(var x in arr){
            fn(arr[x])
        }
    }


    var container = document.getElementById("showbar");
    var inPut = document.getElementById("number-input");
    var buttonList = document.getElementsByTagName("button");
    var queue = {
        str:[],
        isEmpty:function(){
            return(this.str.length == 0);
        },

        leftIn: function (num) {

            this.str.unshift(num);
            this.paint();
        },
        leftOut: function () {
            if(!this.isEmpty()){
                //console.log(this.str.shift());
                alert(this.str.shift());
                //console.log("aaaaaaaaa"+this.str)
                this.paint()
            }
            else{
                alert("empty")
            }
        },
        rightIn: function (num) {

            this.str.push(num);
            this.paint();
        },

        rightOut: function () {
            if(!this.isEmpty()){
                alert(this.str.pop())
                this.paint();}
            else{
                alert('empty')
            }
        },

        paint: function () {
            console.log("jinruhuatu")
            var str = ''
           // each(this.str,function(a){str +='<div>'+parseInt(a)+'</div>'})
            each(this.str,function(a){
                str +='<div style="height: '+5*parseInt(a)+'px; width:20px" ></div>'
            })
            container.innerHTML=str;
            addDivDelEvent()
        },

        deleteID: function (id) {
            console.log(id);
            this.str.splice(id,1);
            this.paint()
        }


    }

    function addDivDelEvent(){
        for(var cur = 0;cur<=container.childNodes.length;cur++){
            addEvent(container.childNodes[cur],"click",function(cur){
                return function(){return queue.deleteID(cur)}
            }(cur))
        }
    }

    function bubbleSort(){
        var i= 0,j=0;
        var arr = queue.str;
        console.log(arr);
        var Clock= setInterval(function(){
            if(i>arr.length){
                Clock = clearInterval(Clock);
            }
            if(i == arr.length-1-j){
                i++;
                j=0;
            }
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]= temp;
                queue.paint()
            }
            j++;

        },100)


    }

    function random(){

        var arr = [];
        for(var i = 0;i<=9;i++){
            arr.push(
                parseInt(10*Math.random())+1

            )
            queue.str =arr;
            console.log(arr)

        }
        queue.paint()
    }


    addEvent(buttonList[0],"click",function(){
        var va = inPut.value.trim();
        if(va.match(/^[0-9]+$/)){
            queue.leftIn(va);
        }else{
            alert("please enter number")
        }
    })

    addEvent(buttonList[1],"click",function(){
        var va = inPut.value.trim();
        if(va.match(/^[0-9]+$/)){
            queue.rightIn(va);
        }else{
            alert("please enter number")
        }
    })

    addEvent(buttonList[2],"click",function(){queue.leftOut()});
    addEvent(buttonList[3],"click",function(){queue.rightOut()});
    addEvent(buttonList[4],"click",bubbleSort);
    addEvent(buttonList[5],"click",random);
}
