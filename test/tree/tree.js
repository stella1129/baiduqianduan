/**
 * Created by admin on 2016/12/13.
 */
window.onload=function(){
var button = document.getElementsByTagName("input");
var root = document.getElementsByClassName("root")[0];
var divList = [];
timer = null;
function addEvent(element,event,listner){
    if(element.addEventListener){
        element.addEventListener(event,listner,false);
    }
    else if(element.attachEvent){
        element.attachEvent("on"+event,listner);
    }
    else{
        element["on"+event]=listner
    }
}
//根--->左--->右
function first(node){
    if(!(node==null)){
        divList.push(node);
        first(node.children[0]);
        first(node.children[1]);
    }
}
//左--->根--->右
function middle(node){
    if(!(node==null)){
        middle(node.children[0]);
        divList.push(node);
        middle(node.children[1])
    }
}

//左--->右--->根
function last(node){
    if(!(node==null)){
        last(node.children[0]);
        last(node.children[1]);
        divList.push(node)
    }
}

function changeColor(){
    var i = 0;
    divList[0].style.backgroundColor="red";
timer = setInterval(function(){
    if(i<divList.length){
        i++;
        divList[i-1].style.backgroundColor = "white";
        divList[i].style.backgroundColor = "red";
    }
    else{
        timer = clearInterval(timer);
        divList[divList.length-1].style.backgroundColor = "white"
    }
},1000)
}

function reset(){
    divList=[];
    clearInterval(timer);

}
addEvent(button[0],"click",function(){
    console.log("xianxu");
    reset();
    first(root);
    changeColor();
});
addEvent(button[1],"click",function(){
    reset()
    middle(root)
    changeColor()
});
addEvent(button[2],"click",function(){
    reset()
    last(root)
    changeColor()
});

    addEvent(button[3],'click',function(){
        timer = clearInterval(timer)
    })
}