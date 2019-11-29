// แสดงข้อมูลส่วนตัว
promoiseSetAddress.then(function() {
    $(window).load(function () {
        contract.getUser (function(err , res){
            $('#genders').html(res[2]);
            $("#names").html(res[3] + "&nbsp&nbsp" + res[4]);
            $("#dates").html(calculateAge(res[5].c)); 
            $("#addresss").html(res[6]);
            $("#diseass").html(res[7]);
            $("#medics").html(res[8]);
        });
    });
});

//คำนวนอายุจาก timestamp
function calculateAge(_x) {
    var datenow = new Date();
    var age = datenow.getTime() - _x;
    return (Math.floor(age/(1000*60*60*24*365.25)));
}