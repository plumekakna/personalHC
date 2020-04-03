promiseSetAddress.then(function() {
    $(window).load(function () {
       
            // แสดงจำนวนเงินที่ต้องจ่าย
            $("#ETHpay").html('&nbsp' + payETH + '&nbspETH/ปี');
            $("#ETHbaht").html('&nbsp' + ETHToBaht + '&nbspETH');
        
        
    });


});