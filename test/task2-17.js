
window.onload = function() {
    function randomnum(x) {
        var returndata = {};//返回的数据
        var date = new Date("2016-01-01");
        var dataStr = '';
        for (var i = 0; i < 91; i++) {
            var year = date.getFullYear();
            var day = date.getDate();
            day = day < 10 ? "0" + day : day;
            var mouth = date.getMonth() + 1;
            mouth = mouth < 10 ? "0" + mouth : mouth;
            var y = year + "-" + mouth + "-" + day;
            //console.log(y)
            dataStr = y;
            date.setDate(date.getDate() + 1);
            returndata[dataStr] = x;
        }
        //console.log(returndata);
        return returndata;

    }

    var aqiData = {
        "北京": randomnum(100),
        "上海": randomnum(50),
        "深圳": randomnum(300),
        "青岛": randomnum(200)
    }
// console.log(aqiData);


//随机取色
    function getRandomColor() {
        return "#" +
            (function (color) {
                return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)]) && (color.length == 6) ? color : arguments.callee(color)
            })('')
    }


    function initGraTimeForm() {
        var a = document.getElementsByName("gra-time");
        [].forEach.call(a, function (x) {
            x.addEventListener('click', getTimeChange)
        })
    }

    var pageInf = {
        pagetime: "day",
        pagecity: ''
    }

    function getTimeChange() {
        //判断是否发生年月日变化
        var timeNow = getTimeNow();
        if (timeNow == pageInf["pagetime"]) {
            return;
        } else {
            initAqiChartData();
            renderChart()
        }

    }

    function getTimeNow() {
        var t = document.getElementsByName("gra-time");
        var timeNow = '';
        [].forEach.call(t, function (x) {
            if (x.checked)
                timeNow = x.value;
        });
        return timeNow;
    }


    function initCitySelector() {
        //读取aqiData中的城市，然后设置id为city-select的下拉列表中的选项
        var c = document.getElementById("city-select");
        var str = '';
        for (var city in aqiData) {
            str += "<option value='" + city + "'>" + city + "</option>"
        }
        //console.log(str)
        c.innerHTML = str;
        c.addEventListener("change", getCityChange);
    }

    function getCityChange() {
        //判断是否发生城市变化
        var cityNow = document.getElementById("city-select").value;
        if (cityNow == pageInf["pagecity"]) {
            return;
        } else {
            initAqiChartData();
            renderChart()
        }

    }

    var chartData = {};

    function initAqiChartData() {
        // 将原始的源数据处理成图表需要的数据格式
        // 处理好的数据存到 chartData 中
        var t = getTimeNow();
        var c = document.getElementById("city-select").value;
        pageInf['pagetime'] = t;
        pageInf['pagecity'] = c;
        switch (t) {
            case "day":
                chartData = aqiData[c];
                break;
            case "week":
                chartData = {};
                var qq = aqiData[c];
                var count = 0, total = 0, week = 1, date, weekDay;
                for (var dat in qq) {
                    date = new Date(dat);
                    weekDay = date.getDay();
                    if (weekDay == 6) {
                        count++;
                        total += aqiData[c][dat];
                        chartData["week" + week] = Math.round(total / count);//count 不能用7
                        count=0;
                        total = 0;
                        week++;
                        console.log("week"+":"+chartData);
                    } else {
                        count++;
                        total += aqiData[c][dat];
                    }

                }
                //chartData["week" + week] = Math.round(total / count);
                console.log("weeeeeeeeeeeeeeeeeeeeeeek"+":"+chartData);
                break;
            case "month":
                chartData = {};
                var w = aqiData[c]
                var count = 0, total = 0, month = -1, date;
                for (var dat in aqiData[c]) {
                    date = new Date(dat);
                    monthday = date.getDate();
                    if (month == -1) {
                        month = date.getMonth() + 1
                    }else if (date.getMonth() + 1 !== month) {
                        chartData["month" + month] = Math.round(total/count);
                        month = date.getMonth() + 1;
                        count = 0;
                        total = 0;

                    }
                    count++;
                    total += aqiData[c][dat];
                }

                break;
        }
        console.log(chartData);
    }

    function renderChart() {
        var str = '';
        for (var v in chartData) {
            str += "<div class='box " + pageInf['pagetime'] + "'>"
            str += "<div class='histogram' style='height: " + chartData[v] + "px;background-color:" + getRandomColor() + "' title='" + v + ":" + chartData[v] + "'></div>"
            str += "</div>";
        }
        document.getElementsByClassName("aqi-chart-wrap")[0].innerHTML = str;
    }

    function init() {
        initGraTimeForm();
        initCitySelector();
        initAqiChartData();
    }

    init();
}