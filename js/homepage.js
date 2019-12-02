// แสดงผลการตรวจล่าสุดในหน้า index
promoiseSetAddress.then(function() {
    $(window).load(function () {
        // ใช้ฟังก์ชันเช็คว่ามีผลการตรวจไหม
        contractResult.checkHaveLastResult(function(err, result) {
            if (result) {
                // เรียกข้อมูลผลการผลการตรวจล่าสุด
                contractResult.getResultUserLast(function(err, result) {
                    $('#showDateResult').html(convertTimestampToDate(result[0]));
                    $('#showFPGResult').html(divide100(result[1]) + '&nbspมก./ดล.');
                    $('#showHbA1CResult').html(divide100(result[2]) + '&nbsp%');
                    $('#showPressureResult').html(divide100(result[3]) + '/' + divide100(result[4]) + '&nbspมม./ปรอท');
                    $('#showTGResult').html(divide100(result[5]) + '&nbspมก./ดล.');
                    $('#showLDLResult').html(divide100(result[6]) + '&nbspมก./ดล.');
                    $('#showHDLResult').html(divide100(result[7]) + '&nbspมก./ดล.');
                    $('#showBMIResult').html(divide100(result[8]));
                    $('#showAlbuminResult').html(divide100(result[9]) + '&nbspมก./ลิตร.');
                    $('#showHeightResult').html(divide100(result[10]) + '&nbspซม.');
                    $('#showWeightResult').html(divide100(result[11]) + '&nbspกก.');
                    $('#showMedicineResult').html(result[12]);              
                });
            } else {
                $('#lastResult').html('<h3>ไม่มีผลการตรวจล่าสุด</h3>');
            }
        });
    });   
}); 




