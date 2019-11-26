// เช็คยัง login อยู่รึเปล่า
$(window).load(function () {
if (sessionStorage.getItem("Login") == 'true' && sessionStorage.getItem("password") != 'null') {
    contract.checkLogin(sessionStorage.getItem("password"), function(err, result) {
        sessionStorage.setItem("Login", result);
        contract.getUser(function(err, result) {
            if (sessionStorage.getItem("Login") == "true"){
            $('#stillLogin').html("คุณคือ&nbsp" + result[3] + "&nbsp<a href='index.html' onclick='sessionStorage.removeItem(" + '"' + "Login" + '"' + ");sessionStorage.removeItem(" + '"' + "password" + '"' + ");'" + ">logout</a>");
            } else {
                //ลบ session password
                sessionStorage.removeItem("password");
                $('#stillLogin').html('<button type="button" class="btn btn-outline-dark" onclick="location.href=' + "'" + 'login.html' + "'" + '">Login</button>&nbsp<button type="button" class="btn btn-outline-dark" onclick="location.href=' + "'" + 'register.html' + "'" + '">Register</button>');
            }
        });  
    });     
} else {
    $('#stillLogin').html('<button type="button" class="btn btn-outline-dark" onclick="location.href=' + "'" + 'login.html' + "'" + '">Login</button>&nbsp<button type="button" class="btn btn-outline-dark" onclick="location.href=' + "'" + 'register.html' + "'" + '">Register</button>');
}
});