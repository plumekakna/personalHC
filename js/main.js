// ตัวแปร contract
var contract;
var contractResult;
const promoiseSetAddress = new Promise(function(resovle, reject) {
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
                "name": "getUser",
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
                    }
                ],
                "payable": false,
                "stateMutability": "view",
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
                        "internalType": "uint256",
                        "name": "_dateUser",
                        "type": "uint256"
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
                    }
                ],
                "name": "addUser",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
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
            }
        ]);
    // Set Address Transection
    contract = contractAbi.at('0x15953c8a9dd0a433A5856877af02d6E0422cdcf9');

    //ABI Result
    var contractAbiResult = web3.eth.contract([
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
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_x",
				"type": "uint256"
			}
		],
		"name": "getResultUser",
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
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);

    // Set Address Transection Result
    contractResult = contractAbiResult.at('0x86606C046393ccA66e81E8Bd3Bdd8F31d6d36CAB');
    //resovle
    resovle('success');   
})
.then(function() {
        $(window).load(function () {
            if (sessionStorage.getItem("Login") == 'true' && sessionStorage.getItem("password") != 'null') {
                contract.checkLogin(sessionStorage.getItem("password"), function(err, result) {
                    sessionStorage.setItem("Login", result);
                    contract.getUser(function(err, result) {
                        if (sessionStorage.getItem("Login") == "true"){
                        $('#stillLogin').html("คุณคือ&nbsp" + result[3] + "&nbsp<a href='index.html' onclick='sessionStorage.removeItem(" + '"' + "Login" + '"' + ");sessionStorage.removeItem(" + '"' + "password" + '"' + ");'" + ">logout</a>");
                        } else {
                            //ลบ session password
                            sessionStorage.removeItem("password");
                            $('#stillLogin').html('<button type="button" class="btn btn-outline-dark" onclick="location.href=' + "'" + 'login.html' + "'" + '">Login</button>&nbsp<button type="button" class="btn btn-outline-dark" onclick="location.href=' + "'" + 'register.html' + "'" + '">Register</button>');
                        }
                    });  
                });     
            } else {
                $('#stillLogin').html('<button type="button" class="btn btn-outline-dark" onclick="location.href=' + "'" + 'login.html' + "'" + '">Login</button>&nbsp<button type="button" class="btn btn-outline-dark" onclick="location.href=' + "'" + 'register.html' + "'" + '">Register</button>');
            }
            console.log(web3.eth.defaultAccount);
            console.log("Navbar");
        });
});






// แปลง Date ให้เป็น timestamp
function convertDateToTimestamp(_time) {
    var nDate = new Date(_time);
    return (nDate.getTime());
}
