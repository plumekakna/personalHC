// แสดงชื่อ
$(window).load(function () {
    contract.getUser (function(err , res){
        $("#names").html(res[3] + "&nbsp&nbsp" + res[4]);
    });
});

// บันทึกผลการตรวจ
$('#buttonaddresult').click(function () {
    contractResult.addResultUser(
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
});

// เอาค่าที่เก็บแปลงเป็นทศนิยม 2 ตำแหน่ง แล้วไปคูณร้อย เพื่อเปลี่ยนเป็นจำนวนเต็ม
function multiply100(_input) {
    var twoDecimal = parseFloat(_input).toFixed(2);
    return (twoDecimal * 100);
}

// คำนวณค่า BMI
function BMIcalculate(_weight, _height) {
    return (_weight / ((_height * 100) ** 2));
}
