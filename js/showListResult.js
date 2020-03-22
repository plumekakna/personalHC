//แสดงผลการตรวจให้เลือก
promiseSetAddress.then(function () {
    contract.showListResult(function (err, result) {
        var x = parseInt(result);
        while (x > 0) {
                contract.getResultUserPerId1(x, function (err, res) {
                    console.log(res[0]);
                    $('#listResult').append('<tr><th scope="row"><a href="showOneResult.html"' + ' onclick=' + '"' + 'localStorage.setItem(' + "'" + 'idOneresult' + "','" + res[0] + "')" + '">' + convertTimestampToDate(res[1]) + '</a></th></tr>');      
                });         
            x--;       
        }
    });
});