//แสดงข้อมูลผลตรวจในหน้า showOneResult
promiseSetAddress.then(function () {
    contract.getResultUserPerId1(localStorage.getItem('idOneresult'), function(err, result) {
        $('#dateOneResult1').html('วันที่ ' + convertTimestampToDate(result[1]));
        $('#dateOneResult').html(convertTimestampToDate(result[1]));
        $('#FPGOneResult').html(divide100(result[2]) + '&nbspมก./ดล.');
        $('#HbA1cOneResult').html(divide100(result[3]) + '&nbsp%');
        $('#pressureOneResult').html(divide100(result[4]) + '/' + divide100(result[5]) + '&nbspมม./ปรอท');
    });

    contract.getResultUserPerId2(localStorage.getItem('idOneresult'), function(err, result) {
        $('#TGOneResult').html(divide100(result[0]) + '&nbspมก./ดล.');
        $('#LDLOneResult').html(divide100(result[1]) + '&nbspมก./ดล.');
        $('#HDLOneResult').html(divide100(result[2]) + '&nbspมก./ดล.');
        $('#BMIOneResult').html(divide100(result[3]));
        $('#AlbuminOneResult').html(divide100(result[4]) + '&nbspมก./ลิตร.');
        
    });
    
    contract.getResultUserPerId3(localStorage.getItem('idOneresult'), function(err, result) {
        $('#HeightOneResult').html(divide100(result[0]) + '&nbspซม');
        $('#WeightOneResult').html(divide100(result[1]) + '&nbspกก');
        $('#MedicineOneResult').html(result[2]);
        
    });

    contract.compareFPG(localStorage.getItem('idOneresult'), function(err, result){
        $('#FPGResult').html(convertResult(result.c));
        $('#HbA1cResult').html(convertResult(result.c));
        $('#pressureResult').html(convertResult(result.c));
        $('#pressureResult').html(convertResult(result.c));
        $('#TGResult').html(convertResult(result.c));
        $('#LDLResult').html(convertResult(result.c));
        $('#HDLResult').html(convertResult(result.c));
        $('#AlbuminResult').html(convertResult(result.c));
        $('#BMIResult').html(convertResult(result.c));
        console.log(result);
  })
    
    
});

   


