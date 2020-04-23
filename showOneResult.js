//แสดงข้อมูลผลตรวจในหน้า showOneResult
promiseSetAddress.then(function () {
  $(window).load(function () {
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

    });
    
    contract.compareHbA1c(localStorage.getItem('idOneresult'), function(err, result){
        $('#HbA1cResult').html(convertResult(result.c));
    });

    contract.comparePressure(localStorage.getItem('idOneresult'), function(err, result){
  $('#pressureResult').html(convertResult(result.c));
    });

    contract.compareTG(localStorage.getItem('idOneresult'), function(err, result){
  $('#TGResult').html(convertResult(result.c));
    });

    contract.compareLDL(localStorage.getItem('idOneresult'), function(err, result){
  $('#LDLResult').html(convertResult(result.c));
    });

    contract.compareHDL(localStorage.getItem('idOneresult'), function(err, result){
  $('#HDLResult').html(convertResult(result.c));
    });

    contract.compareAlbumin(localStorage.getItem('idOneresult'), function(err, result){
  $('#AlbuminResult').html(convertResult(result.c));
    });

    contract.compareBmi(localStorage.getItem('idOneresult'), function(err, result){
  $('#BMIResult').html(convertResult(result.c));
    });

  });
});