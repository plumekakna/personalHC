// เตือนวันหมดอายุสัญญา
promiseSetAddress.then(function() {
    $(window).load(function () {
        contract.getLastPay(function (error, result) {
            if (result[2].c < new Date().getTime()) {
                $('#EXPwarn').html('<div class="container bg-white border mg_body" style="margin-top:1%; padding: 2%; text-align: center; color: red;"><b>สัญญาหมดอายุแล้ว</b></div>');
            }
        });
    });
});   