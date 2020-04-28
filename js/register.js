var firstCountRegis = 0;
// variable pay
var objectCrypto ;
var ETHperbaht ;
var bahtperETH;
var ETHpay;

//แสดง address ของผู้ใช้
promiseSetAddress.then(function() {
    $(window).load(function () {
        if (typeof web3.eth.defaultAccount != 'undefined') {
            contract.getUserP1(function(err, res){
                $("#namesUser").html(res[3] + '&nbsp&nbsp' + res[4]);       
            });

            $("#addressUser").html(web3.eth.accounts[0]);
        
        } else {
            $("#addressUser").html("กรุณาเชื่อมต่อ MetaMask");
        }
    });

    //ตรวจสอบและแสดงข้อความว่าเคยสมัครแล้วหรือยัง ถ้าสมัครแล้วจะ return ค่าเป็น true
    $(window).load(function () {
        contract.checkRegister(function(err, result) {
            if (result == false) {
                // แสดงบนหน้า Login
                $("#msgLogin").html("คุณยังไม่เป็นสมาชิก");
            } else {
                // แสดงบนหน้า register
                $("#msgRegister").html("คุณเป็นสมาชิกแล้ว");
            }
        });
    });
});   


// เก็บ Session still login เมื่อทำการ Login
$('#clickLogin').click(function() {
    contract.checkLogin($('#userLogin').val(),  function(err, result) {
        localStorage.setItem("Login", result);
        console.log(localStorage.getItem("Login"));
        if (localStorage.getItem("Login") == "true") {
            localStorage.setItem("password", $('#userLogin').val());
            location.href='index.html';
        } else {
            $("#errmsgLogin").html('<span class="badge badge-danger">รหัสผ่านไม่ถูกต้อง</span>');
        }
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
                $("#bthRegister").html('<button type="button" id="buttonRegister" class="btn btn-primary" onclick="buttonRegister()">จ่ายเงินและสมัครสมาชิก </button>');
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
        
    });
});


// function register
function buttonRegister() {
    console.log("click Register");
    if ($("#password").val() == $("#cpassword").val()) { 
        console.log("password match");
        contract.checkRegister(function(err, result) {
            if (result == false) {
                var r = confirm("ข้อมูลถูกต้องแล้วใช่ไหม?");
                // เพิ่มข้อมูลผู้ใช้
                if (r == true) { 
                    // เช็คอายุเกินการสมัคร > 17 && < 61
                    if (calculateAge(convertDateToTimestamp($("#birthDate").val())) > 17 && calculateAge(convertDateToTimestamp($("#birthDate").val())) < 61) {
                        $("#bthRegister").html('<button type="button" id="buttonRegister" class="btn btn-primary" onclick="buttonRegister()" disabled>กำลังดำเนินการ... </button>');
                        $("#errmsgRegister").html('<div class="loader"></div>');
                        if (!err) {
                            contract.addUser(
                                $('#password').val(), 
                                $('#gender').val(), 
                                $('#fname').val(), 
                                $('#lname').val(), 
                                $('#address').val(), 
                                convertDateToTimestamp($("#birthDate").val()), 
                                $('#disease').val(), 
                                $('#medicine').val(),
                                $('#phoneNumber').val(),
                                ETHpay * 1000000000000000000,
                                new Date().getTime(),
                                plusOneYear(new Date().getTime()),
                                $('#idCard').val(), 
                                {value: ETHpay * 1000000000000000000},                              
                                (err, res) => { //Have Error
                                if (err) {
                                    console.log(err);
                                    clearInterval(registering);
                                    $("#bthRegister").html('<button type="button" id="buttonRegister" class="btn btn-primary" onclick="buttonRegister()">จ่ายเงินและสมัครสมาชิก </button>');
                                    $("#errmsgRegister").html('');
                                }
                            //$("#errmsgRegister").html('<span class="badge badge-primary">Loading...</span>');
                            
                            localStorage.setItem("Login", 'true');
                            localStorage.setItem("password", $('#password').val());
                            console.log('add success');
                            });
                        } else {
                            console.log('error');
                        }
                     

                            
     
                    

                    // เช็คเพื่อเปลี่ยนหน้า ทุกๆ 5 วินาที หลังสมัครเสร็จ
                     var registering = setInterval(function(){ 
                        contract.getUserP1(function(error, result) {
                            firstCountRegis = result[1].c[0];
                        });
                        if (firstCountRegis > 0) {
                            location.href="index.html";
                        } else {
                            console.log('not yet');
                        }
                    }, 5000);
                    } else {
                        $("#errmsgRegister").html('<br><span class="badge badge-danger">อายุคุณไม่อยู่ในเกณฑ์การสมัคร (มากกว่า 60 ปี หรือน้อยกว่า 18 ปี)</span>');
                    }
                }
            } else {
                // แสดงข้อความว่าเคยสมัครแล้ว
                $("#errmsgRegister").html('<br><span class="badge badge-danger">คุณเคยสมัครแล้ว</span>');
            }
        });
    } else {
        $("#errmsgRegister").html('<span class="badge badge-danger">รหัสผ่านไม่ตรงกัน</span>');
        console.log("password not match");
    }  
}  
