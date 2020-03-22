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

// register
    $("#buttonRegister").click(function() {
        console.log("click Register");
        if ($("#password").val() == $("#cpassword").val()) { 
            console.log("password match");
            contract.checkRegister(function(err, result) {
                if (result == false) {
                    var r = confirm("ข้อมูลถูกต้องแล้วใช่ไหม?");
                    // เพิ่มข้อมูลผู้ใช้
                    if (r == true) {              
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
                            (err, res) => { //Have Error
                            if (err) {
                                console.log(err);
                            }
                        //$("#errmsgRegister").html('<span class="badge badge-primary">Loading...</span>');
                        $("#errmsgRegister").html('<div class="loader"></div>');
                        sessionStorage.setItem("Login", 'true');
                        sessionStorage.setItem("password", $('#password').val());
                        console.log('add success');
                        });
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
    });


// เก็บ Session still login เมื่อทำการ Login
$('#clickLogin').click(function() {
    contract.checkLogin($('#userLogin').val(),  function(err, result) {
        sessionStorage.setItem("Login", result);
        console.log(sessionStorage.getItem("Login"));
        if (sessionStorage.getItem("Login") == "true") {
            sessionStorage.setItem("password", $('#userLogin').val());
            location.href='index.html';
        } else {
            $("#errmsgLogin").html('<span class="badge badge-danger">รหัสผ่านไม่ถูกต้อง</span>');
        }
    });   
});
 
// รอ event สำหรับ register โหลดจนบันทึกข้อมูลให้เสร็จ แล้วไปยังหน้า detail บุคคล
var addDetailUserEvent = contract.addUserEvent({}, 'lastest');
addDetailUserEvent.watch(function(error, result) {
    if (!error) {
        location.href="detailPersonal.html";
    } else {
        console.log(error);
    }
});


