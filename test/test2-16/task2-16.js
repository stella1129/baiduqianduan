window.onload = function()
{
    var aqiData = {};
    var aqicity = document.getElementById("aqi-city-input")
    var aqinun = document.getElementById("aqi-value-input")

    /**
     * ���û������л�ȡ���ݣ���aqiData������һ������
     * Ȼ����Ⱦaqi-list�б���������������
     */
    function addAqiData() {
        var city = aqicity.value.trim();
        var num = aqinun.value.trim();
        var c =  /^[A-Za-z\u4E00-\u9FA5]+$/;
        var n = /^\d+$/;

        if (!c.test(city)) {
            alert("����������Ϊ��Ӣ���ַ�")
            return;
        }
        if (!num.match(n)) {
            alert("��������ָ������Ϊ������")
            return;
        }

        aqiData[city] = num;

    }

    /**
     * ��Ⱦaqi-table���
     */
    function renderAqiList() {
        var aqitable = document.getElementById("aqi-table");
        //var table = "<tr><td>����</td><td>��������</td><td>����</td> </tr>";
        //for(var key in aqiData){
        //    table += "<tr><td>"+ city +"</td><td>"+aqiData[city]+"</td><td><button class='del'>ɾ��</button></td></tr>";
        //}
        //aqi.innerHTML = table;
        var items = "<tr><td>����</td><td>��������</td><td>����</td></tr>";
        for (var city in aqiData) {
            items += "<tr><td>" + city + "</td><td>" + aqiData[city] + "</td><td><button data-city='"+city+"'>ɾ��</button></td></tr>"
        }
        aqitable.innerHTML = city ? items : "";
    }

    /**
     * ���add-btnʱ�Ĵ����߼�
     * ��ȡ�û����룬�������ݣ�������ҳ����ֵĸ���
     */
    function addBtnHandle() {
        addAqiData();
        renderAqiList();
    }

    /**
     * �������ɾ����ť��ʱ��Ĵ����߼�
     * ��ȡ�ĸ��������ݱ�ɾ��ɾ�����ݣ����±����ʾ
     */
    function delBtnHandle(city) {
        // do sth.
        delete aqiData[city]
        renderAqiList();
    }

    function init() {

        // ���������add-btn��һ������¼������ʱ����addBtnHandle����

        // ��취��aqi-table�е�����ɾ����ť���¼�������delBtnHandle����
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