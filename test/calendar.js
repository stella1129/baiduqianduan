/**
 * Created by admin on 2016/12/19.
 */

window.onload= function () {
    var date
    var earliest;
    var latest;
    var pickDay = new Date();
    function addEvent(element,event,listener){
        if (element.addEventListener){
            element.addEventListener(event,listener,false)
        }
        else if(element.attachEvent){
            element.attachEvent("on"+event,listener)
        }
        else{
            element["on"+event]=listener
        }
    }


    //日历对象
    var calendar = {
        monthLabel:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
        dateToString:function(date){
            return date.toJSON().slice(0,10); //获取日期
    },
    //生成日历
        showtheMonth: function () {
            //生成年月表格
            var date = this.dateToString(this.pickDay);
            var insert = "<input type='text' id='Input' value='"+date+"'>"
            insert +="<div id='calenderPane1'><header><input type='button' id='lastMonth'>"+"<h3>"+this.monthLabel[this.pickDay.getMonth()]+"<span>" + this.pickDay.getFullYear() +"</span></h3>"+"<input type='button' id='nextMonth'></header>";
            insert += "<header><p>Mon</p><p>Tue</p><p>Wed</p><p>Thu</p><p>Fri</p><p>Sat</p><p>Sun</p></header>";
            //生成每天表格
            insert +="<div style='display: flex;flex-wrap: wrap'>"
            insert +="</div></div>";
            var nextDay = new Date(this.pickDay); //当天
            nextDay.setDate(1);                  //当月1号
            var nextDayWeek = nextDay.getDay(); //当月1号的星期
            var fixWeek = [6,0,1,2,3,4,5,6];
            nextDay.setDate(1 - fixWeek[nextDayWeek]); //nextDay:当张表格的第一个日期
            for(var i=0;i<42;i++){
                var dateString = this.dateToString(nextDay);
                if(!this.inScope(nextDay,this.earliest,this.latest)){

                }
            }





 },
        inputCheck:function(){
            var input = document.getElementById("Input");
            var pattern = /^\d(3)-\d(2)-\d(2)$/
            if(pattern.test(input.value.trim())){
                return true
            }
        },
        inScope:function(checkdate,earliest,latest){
            if(typeof checkdate=="string"){
                checkdate = new Date(checkdate);;
            }
            if(earliest&&latest&&(checkdate<=latest)&&(checkdate>=ealiest)){
                return true;
            }else{
                return false;
            }
        },
        init: function () {
            this.showtheMonth();
        }
    }

    calendar.init();
}

