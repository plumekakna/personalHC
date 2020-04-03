var firstCount = 0 ;
var secoundCount = 0;

// แสดงชื่อ
promiseSetAddress.then(function() {
    $(window).load(function () {
        contract.getUserP1 (function(err , res){
            $("#names").html(res[3] + "&nbsp&nbsp" + res[4]);
        });

        contract.returnIdLastResult(function(error, result) {
            firstCount = result.c[0];
            console.log(firstCount);
        });
    });
});

// บันทึกผลการตรวจ
$('#buttonaddresult').click(function () {
    var r = confirm("ข้อมูลถูกต้องแล้วใช่ไหม?");
    if (r == true) {
        contract.addResultUser(
            multiply100($('#fpgvalue').val()),
            multiply100($('#hbavalue').val()), 
            multiply100($('#preshighvalue').val()), 
            multiply100($('#preslowvalue').val()),
            multiply100($('#tgvalue').val()), 
            multiply100($('#ldlvalue').val()), 
            multiply100($('#hdlvalue').val()), 
            multiply100(BMIcalculate($('#weivalue').val(), $('#heivalue').val())),
            multiply100($('#albvalue').val()),
            multiply100($('#heivalue').val()),
            multiply100($('#weivalue').val()),
            $('#medvalue').val(),
            convertDateToTimestamp($('#datevalue').val()),
            (err, res) => { //Have Error
                if (err) {
                    console.log(err);
                }   
            });
            $("#errmsgAddResult").html('<div class="loader"></div>');

            // เช็คเพื่อเปลี่ยนหน้า ทุกๆ 5 วินาที
            setInterval(function(){ 
                contract.returnIdLastResult(function(error, result) {
                    secoundCount = result.c[0];
                    console.log(secoundCount);
                });
                if (secoundCount > firstCount) {
                    localStorage.setItem('idOneresult', secoundCount);
                    location.href="showOneResult.html";
                } else {
                    console.log('not yet');
                }
        }, 5000);
    }
    
});

// event ไว้เก็บจำนวนผลการตรวจ
var addResultUserEvent = contract.addResultrEvent({}, {fromBlock:0, toBlock: 'latest'});
addResultUserEvent.watch(function(error, result) {
    if (!error) {
        //location.href="index.html";
    } else {
        console.log(error);
    }
});

// เอาค่าที่เก็บแปลงเป็นทศนิยม 2 ตำแหน่ง แล้วไปคูณร้อย เพื่อเปลี่ยนเป็นจำนวนเต็ม
function multiply100(_input) {
    var twoDecimal = parseFloat(_input).toFixed(2);
    return (twoDecimal * 100);
}

// คำนวณค่า BMI
function BMIcalculate(_weight, _height) {
    _w = parseFloat(_weight);
    _h = parseFloat(_height);
    _bmi = _w / ((_h / 100) ** 2);
    return (_bmi);
}


