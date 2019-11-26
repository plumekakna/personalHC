//เช็ตว่ามีการ login อยู่ไหม ถ้าไม่มีให้ไปหน้า login
if (sessionStorage.getItem("Login") == 'true' && sessionStorage.getItem("password") != 'null') {
    console.log('can see');     
} else {
    location.href='login.html';
}

