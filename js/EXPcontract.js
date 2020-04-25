var firstCount = 0 ;
var secoundCount = 0;

// variable pay
var objectCrypto ;
var ETHperbaht ;
var bahtperETH;
var ETHpay;


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

promiseSetAddress.then(function() {
    $(window).load(function () {
        // api ผ่าน https://cors-anywhere.herokuapp.com/https 
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = "https://api.bitkub.com/api/market/ticker?fbclid=IwAR0UlQvvyg50jEu-WKAEiKvL0vP1dWe2m1KtHjBBdW5sY1ukU1uDOtIWnMk"; // site that doesn’t send Access-Control-*
            fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(response => response.text())
            .then((contents) => {//console.log(contents);
                objectCrypto = JSON.parse(contents);
                ETHperbaht = objectCrypto.THB_ETH.last;
                bahtperETH = 1 / ETHperbaht
                ETHpay = bahtperETH * 4000;
                console.log(ETHperbaht);
                // แสดงจำนวนเงินที่ต้องจ่าย
                $("#ETHpay").html('&nbsp' + ETHpay.toFixed(4) + '&nbspETH/ปี');
                $("#ETHbaht").html('&nbsp' + bahtperETH + '&nbspETH');
                $("#bthpay").html('<button type="button" class="btn btn-primary" onclick="buttonPay()"> จ่ายเงินต่ออายุ 1 ปี </button>');
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
        
    });
});

// จ่ายเพื่อต่อสัญญา 1 ปี
function buttonPay() {
    var r = confirm("จะต่ออายุสัญญา 1 ปี ใช่ไหม?");
    // เพิ่มข้อมูลผู้ใช้
    if (r == true) { 
        contract.getLastPay(function (error, result) {
            contract.paying(ETHpay * 1000000000000000000, result[0].c, new Date().getTime(), plusOneYear(result[2].c),{value: ETHpay * 1000000000000000000}, (err, res) => { //Have Error
                if (err) {
                    console.log(err);
                }
            });
        $("#loading").html('<div class="loader"></div>'); 
        });
    }

    //ดูว่าจ่ายเสร็จรึยัง
    setInterval(function () {
        contract.getLastPay(function (error, result) {
            secoundCount = result[0].c[0];
            if (secoundCount > firstCount) {
                console.log('success');
                $("#successAlert").html("<div class='alert alert-success' role='alert'>ต่ออายุสำเร็จ</div>");
                contract.getLastPay(function (error, result) {
                    // แสดงวันหมดอายุสัญญา
                    $("#expDate").html(convertTimestampToDate(result[2].c));
                    $("#loading").html(''); 
                    });
                //location.href="EXPcontract.php";
            } else {
                console.log('not yet');
            }
        });
    }, 5000);

}