//แสดงผลการตรวจให้เลือก
var forSort = {};
var y = 0;
promiseSetAddress.then(function () {
    $(window).load(function () {
        contract.showListResult(function (err, result) {
            var x = parseInt(result);
            y = parseInt(result);

            while (x > 0) {
                    contract.getResultUserPerId1(x, function (err, res) {
                        forSort[parseInt(res[0])] = '<tr><th scope="row"><a href="showOneResult.html"' + ' onclick=' + '"' + 'localStorage.setItem(' + "'" + 'idOneresult' + "','" + res[0] + "')" + '">' + convertTimestampToDate(res[1]) + '</a></th></tr>' ;
                        //$('#listResult').append('<tr><th scope="row"><a href="showOneResult.html"' + ' onclick=' + '"' + 'localStorage.setItem(' + "'" + 'idOneresult' + "','" + res[0] + "')" + '">' + convertTimestampToDate(res[1]) + '</a></th></tr>');      
                    });         
                x--;       
            }

            setTimeout(function () { 
            FS(y);
            }, 1000);
             

            
 
        });
    });   
});


function FS(y) {
    while (y > 0) {
        $('#listResult').append(forSort[y]);
        y--;
    }
}