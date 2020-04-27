// แสดงข้อมูลส่วนตัว
promiseSetAddress.then(function() {
    $(window).load(function () {
        // แสดงข้อมูลส่วนตัว User Part1
        contract.getUserP1(function(err, res){
            $('#genders').html(res[2]);
            $("#names").html(res[3] + "&nbsp&nbsp" + res[4]);
            $('#dates').html(convertTimestampToDate(res[5].c));
            $("#age").html(calculateAge(res[5].c) + '&nbspปี'); 
            $("#addresss").html(res[6]);
            $("#diseass").html(res[7]);
            $("#medics").html(res[8]);
        });
        // แสดงข้อมูลส่วนตัว User Part2
        contract.getUserP2(function(err, res){
            $("#phones").html(res[0]);
            $("#idcard").html(res[1]);
        });

        // แสดงวันหมดอายุสัญญา
        contract.getLastPay(function (error, result) {            
            $("#expDate").html(convertTimestampToDate(result[2].c));
            });
    });
});

