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
                        contract.getUserP1(function (e, r) {
                            $('#x').append('<tr><td>' + x + '</td><td>' + r[3] + "&nbsp&nbsp" + r[4] + '</td><td>' + convertTimestampToDate(res[1]) + '</td></tr>');
                            allUser[userInsurance] = '<tr><td>' + r[3] + "&nbsp&nbsp" + r[4] + '</td><td>' + res[1] + '</td></tr>';
                            x ++;
                        });         
                    }              
                });
                userInsurance++;
                countUser--;

            }
        });
    });   
});