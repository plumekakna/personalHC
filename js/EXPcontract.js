var firstCount = 0 ;
var secoundCount = 0;


promiseSetAddress.then(function() {
    $(window).load(function () {
        contract.getLastPay(function (error, result) {
            // แสดงวันหมดอายุสัญญา
            $("#expDate").html(convertTimestampToDate(result[2].c));
            
            // เก็บ id ล่าสุดครั้งแรก
            firstCount = result[0].c[0];
            console.log(firstCount);
            });

        
    });
});

// จ่ายเพื่อต่อสัญญา 1 ปี
$("#paying").click(function () {
    contract.getLastPay(function (error, result) {
        contract.paying(payETH * 1000000000000000000, result[0].c, new Date().getTime(), plusOneYear(result[2].c),{value: payETH * 1000000000000000000, gas: 1000000}, (err, res) => { //Have Error
            if (err) {
                console.log(err);
            }
        });
    });

    setInterval(function () {
        contract.getLastPay(function (error, result) {
            secoundCount = result[0].c[0];
            if (secoundCount > firstCount) {
                console.log('success');
            } else {
                console.log('not yet');
            }
        });
    }, 5000);
});

