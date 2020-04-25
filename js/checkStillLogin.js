//เช็ตว่ามีการ login อยู่ไหม ถ้าไม่มีให้ไปหน้า login
if (localStorage.getItem("Login") == 'true' && localStorage.getItem("password") != 'null') {
    console.log('can see');     
} else {
    location.href='login.html';
}

