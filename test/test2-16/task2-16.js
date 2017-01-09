window.onload = function()
{
    var aqiData = {};
    var aqicity = document.getElementById("aqi-city-input")
    var aqinun = document.getElementById("aqi-value-input")

    /**
     * 从用户输入中获取数据，向aqiData中增加一条数据
     * 然后渲染aqi-list列表，增加新增的数据
     */
    function addAqiData() {
        var city = aqicity.value.trim();
        var num = aqinun.value.trim();
        var c =  /^[A-Za-z\u4E00-\u9FA5]+$/;
        var n = /^\d+$/;

        if (!c.test(city)) {
            alert("城市名必须为中英文字符")
            return;
        }
        if (!num.match(n)) {
            alert("空气质量指数必须为整数！")
            return;
        }

        aqiData[city] = num;

    }

    /**
     * 渲染aqi-table表格
     */
    function renderAqiList() {
        var aqitable = document.getElementById("aqi-table");
        //var table = "<tr><td>城市</td><td>空气质量</td><td>操作</td> </tr>";
        //for(var key in aqiData){
        //    table += "<tr><td>"+ city +"</td><td>"+aqiData[city]+"</td><td><button class='del'>删除</button></td></tr>";
        //}
        //aqi.innerHTML = table;
        var items = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
        for (var city in aqiData) {
            items += "<tr><td>" + city + "</td><td>" + aqiData[city] + "</td><td><button data-city='"+city+"'>删除</button></td></tr>"
        }
        aqitable.innerHTML = city ? items : "";
    }

    /**
     * 点击add-btn时的处理逻辑
     * 获取用户输入，更新数据，并进行页面呈现的更新
     */
    function addBtnHandle() {
        addAqiData();
        renderAqiList();
    }

    /**
     * 点击各个删除按钮的时候的处理逻辑
     * 获取哪个城市数据被删，删除数据，更新表格显示
     */
    function delBtnHandle(city) {
        // do sth.
        delete aqiData[city]
        renderAqiList();
    }

    function init() {

        // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

        // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
        document.getElementById("add-btn").onclick = addBtnHandle;
//        var delbu = document.getElementsByClassName("del")
        document.getElementById("aqi-table").addEventListener("click", function (e) {
            if (e.target.nodeName.toLowerCase() === 'button') {
                delBtnHandle.call(null, e.target.dataset.city);
                //alert(e.target.dataset.city)
            }
        })


    }

    init();
}