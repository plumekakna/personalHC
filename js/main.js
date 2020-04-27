// ตัวแปร contract
var contract;
// กำหนดค่าตัวแปรแบบ Promise
const promiseSetAddress = new Promise(function(resovle, reject) {
        //Check providers
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(window.ethereum)
            window.ethereum.enable().catch(error => {
            // User denied account access
            console.log(error); 
        });
        console.log("Use Metamask");
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
            console.log("Use Localhost7545");
        }

        // Set account
        web3.eth.defaultAccount = web3.eth.accounts[0];

        // Set ABI
        var contractAbi = web3.eth.contract([
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "addResultrEvent",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "int256",
                        "name": "_FPG",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "_HbA1C",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "_pressureHigh",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "_pressureLow",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "_TG",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "_LDL",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "_HDL",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "_BMI",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "_Albumin",
                        "type": "int256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_height",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_weight",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_medicine",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_resultDate",
                        "type": "uint256"
                    }
                ],
                "name": "addResultUser",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_passwordUser",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_genderUser",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_fnameUser",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_lnameUser",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_addressUser",
                        "type": "string"
                    },
                    {
                        "internalType": "int256",
                        "name": "_dateUser",
                        "type": "int256"
                    },
                    {
                        "internalType": "string",
                        "name": "_diseaseUser",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_medicineUser",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_phoneUser",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_datePay",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_EXPdate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_idCard",
                        "type": "string"
                    }
                ],
                "name": "addUser",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "fname",
                        "type": "string"
                    }
                ],
                "name": "addUserEvent",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_datePay",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_EXPdate",
                        "type": "uint256"
                    }
                ],
                "name": "paying",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "checkHaveLastResult",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_password",
                        "type": "string"
                    }
                ],
                "name": "checkLogin",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "checkRegister",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "compareAlbumin",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "compareBmi",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "compareFPG",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "compareHbA1c",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "compareHDL",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "compareLDL",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "comparePressure",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "compareTG",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "countUser",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getLastPay",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getResultUserLast",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "getResultUserPerId1",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "getResultUserPerId2",
                "outputs": [
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "getResultUserPerId3",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getUserP1",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "int256",
                        "name": "",
                        "type": "int256"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getUserP2",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "receiver",
                "outputs": [
                    {
                        "internalType": "address payable",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "returnIdLastResult",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "showListResult",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "userHaveInsurance",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "userLenght",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ]);
    // Set Address Transection
    contract = contractAbi.at('0x0517BC06FdA45Fc7802cBbF312Dad8c94C0a8aC3');



    //resovle
    resovle('success');  
})
.then(function() {
        $(window).load(function () {
            if (localStorage.getItem("Login") == 'true' && localStorage.getItem("password") != 'null') {
                contract.checkLogin(localStorage.getItem("password"), function(err, result) {
                    localStorage.setItem("Login", result);
                    contract.getUserP1(function(err, result) {
                        if (localStorage.getItem("Login") == "true"){
                        $('#stillLogin').html("คุณคือ&nbsp" + result[3] + "&nbsp<a href='index.html' onclick='localStorage.removeItem(" + '"' + "Login" + '"' + ");localStorage.removeItem(" + '"' + "password" + '"' + ");'" + ">logout</a>");
                        } else {
                            //ลบ session password
                            localStorage.removeItem("password");
                            $('#stillLogin').html('<button type="button" class="btn btn-outline-dark" onclick="location.href=' + "'" + 'login.html' + "'" + '">Login</button>&nbsp<button type="button" class="btn btn-outline-dark" onclick="location.href=' + "'" + 'contract.html' + "'" + '">Register</button>');
                        }
                    });  
                });     
            } else {
                $('#stillLogin').html('<button type="button" class="btn btn-outline-dark" onclick="location.href=' + "'" + 'login.html' + "'" + '">Login</button>&nbsp<button type="button" class="btn btn-outline-dark" onclick="location.href=' + "'" + 'contract.html' + "'" + '">Register</button>');
            }
            console.log(web3.eth.defaultAccount);
            
        });
});




//คำนวนอายุจาก timestamp
function calculateAge(_x) {
    var datenow = new Date();
    var age = datenow.getTime() - _x;
    return (Math.floor(age/(1000*60*60*24*365.25)));
}

// แปลง Date ให้เป็น timestamp
function convertDateToTimestamp(_time) {
    var nDate = new Date(_time);
    return (nDate.getTime());
}

// ฟังก์ชันหารด้วย 100
function divide100(_val) {
    return (_val / 100);
}
// ฟังก์ชันหารด้วย 100 แปลงค่า 0 1 2
function convertResult(_num123) {
    if (_num123 == 0){
        return ('<span style="color:orange">ต่ำกว่ามาตราฐาน </span>')
    }
    else if (_num123 == 1) {
        return ('<span style="color:green">ปกติ </span>')
    }
    else {
        return ('<span style="color:red">สูงกว่ามาตราฐาน </span>')
    }
}

// แปลง timestamp เป็น วันที่
function convertTimestampToDate(_timestamp) {
    var d = new Date(parseInt(_timestamp));
    var dString = d.toString();
    var d = dString.substring(8, 10);
    var m = dString.substring(4, 7);
    var y = parseInt(dString.substring(11, 15)) + 543;
    var month = {
        'Jan': 'มกราคม',
        'Feb': 'กุมภาพันธ์',
        'Mar': 'มีนาคม',
        'Apr': 'เมษายน',
        'May': 'พฤษภาคม',
        'Jun': 'มิถุนายน',
        'Jul': 'กรกฎาคม',
        'Aug': 'สิงหาคม',
        'Sep': 'กันยายน',
        'Oct': 'ตุลาคม',
        'Nov': 'พฤษจิกายน',
        'Dec': 'ธันวาคม'
    };
    return (d + '&nbsp' + month[m] + '&nbspพ.ศ.&nbsp' + y);
}

// บวก 1 ปี
function plusOneYear(_timestamp) {
    var a = new Date(parseInt(_timestamp));
    var day = a.getDate();
    var month = a.getMonth() + 1; 
    var year = a.getFullYear();
    var nextYear = a.getFullYear() + 1;
    var fulldateNextYear = month.toString() + "/" + day.toString() + "/" + nextYear.toString();
    var toTimestampNextYear = new Date(fulldateNextYear);
    var timeStampNextYear = toTimestampNextYear.getTime();    
    return(timeStampNextYear);
}


