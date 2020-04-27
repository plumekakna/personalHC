var userInsurance = 0;
var countUser;
var allUser = {};
var x = 1;

promiseSetAddress.then(function () {
    $(window).load(function () {
        contract.userLenght(function (error, result) {
            countUser = result.c;
            console.log(countUser);
            while (countUser > 0) {
                contract.userHaveInsurance(userInsurance, function (err, res) {
                    if (res[1].c > new Date().getTime()) {
                            $('#x').append('<tr><td>' + x + '</td><td>' + res[2] + "&nbsp&nbsp" + res[3] + '</td><td>' + convertTimestampToDate(res[1]) + '</td></tr>');
                            allUser[userInsurance] = '<tr><td>' + res[2] + "&nbsp&nbsp" + res[3] + '</td><td>' + res[1] + '</td></tr>';
                            x ++;         
                    }              
                });
                userInsurance++;
                countUser--;

            }
        });
    });   
});