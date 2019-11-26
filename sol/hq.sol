pragma solidity ^0.5.8;

contract personalUser{
    // struct data User
    struct User {
        address addressWalletUser;
        uint256 idUser;
        string passwordUser;
        string genderUser;
        string fnameUser;
        string lnameUser;
        string addressUser;
        uint dateUser;
        string diseaseUser;
        string medicineUser;
    }
    
    //count user
    address [] public countUser;
    
    // mapping user data
    mapping(address=>User) user;
    
    // event
    event addUserEvent(string fname);
    
    
    // user register
    function addUser(
        string memory _passwordUser, 
        string memory _genderUser,
        string memory _fnameUser, 
        string memory _lnameUser,
        string memory _addressUser,
        uint _dateUser,
        string memory _diseaseUser,
        string memory _medicineUser
        ) 
        public  {
        user[msg.sender].addressWalletUser = msg.sender;
        user[msg.sender].idUser = countUser.length + 1 ;
        user[msg.sender].passwordUser = _passwordUser;
        user[msg.sender].genderUser = _genderUser;
        user[msg.sender].fnameUser = _fnameUser;
        user[msg.sender].lnameUser = _lnameUser;
        user[msg.sender].addressUser = _addressUser;
        user[msg.sender].dateUser = _dateUser;
        user[msg.sender].diseaseUser = _diseaseUser;
        user[msg.sender].medicineUser = _medicineUser;
        
        countUser.push(msg.sender) -1;
        
        emit addUserEvent(_fnameUser);
        
    }
    
    //get user details
    function getUser() public view returns (
        address, 
        uint, 
        string memory,
        string memory, 
        string memory, 
        uint, 
        string memory, 
        string memory, 
        string memory) {
        return (
            msg.sender,
            user[msg.sender].idUser, 
            user[msg.sender].genderUser,
            user[msg.sender].fnameUser,  
            user[msg.sender].lnameUser, 
            user[msg.sender].dateUser, 
            user[msg.sender].addressUser, 
            user[msg.sender].diseaseUser, 
            user[msg.sender].medicineUser);
    }
    
    // check register
    function checkRegister() public view returns (bool) {
        for(uint i=0;i<countUser.length;i++){
            if (msg.sender == countUser[i]) {
                return (true);
            }
        }
    }
    
    //check login compare password
    function checkLogin(string memory _password) public view returns(bool) {
        for(uint i=0;i<countUser.length;i++){
            if (msg.sender == countUser[i]) {
                if (keccak256(abi.encodePacked(user[msg.sender].passwordUser)) == keccak256(abi.encodePacked(_password)))
                return (true);
            }
        }
    }
    
}

contract Result {
    
    // struct result
    struct ResultUser{
        uint idResult;
        int FPG;
        int HbA1C;
        Pressure pressure;
        Fat fat;
        int BMI;
        int Albumin;
        uint height;
        uint weight;
        string medicine;
        uint resultDate;
        bool keep;
        
    }
    
    // struct Pressure
    struct Pressure{
        int pressureHigh;
        int pressureLow;
    }
    
    // struct fat sub of resultUser
    struct Fat{
        int TG;
        int LDL;
        int HDL;
    }
    
    // mapping
    mapping (address => mapping(uint => ResultUser)) resultUser;
    
    
    // get result user
    function getResultUser(uint _x) public view returns (uint, int) {
        return (resultUser[msg.sender][_x].idResult, resultUser[msg.sender][_x].FPG);
    }
    
    // add Result User
    function addResultUser(
        int _FPG,
        int _HbA1C,
        int _pressureHigh,
        int _pressureLow,
        int _TG,
        int _LDL,
        int _HDL,
        int _BMI,
        int _Albumin,
        uint _height,
        uint _weight,
        string memory _medicine,
        uint _resultDate
    ) public {
        uint _x = 1;
        while (true) {
            if (resultUser[msg.sender][_x].keep == false) {
                resultUser[msg.sender][_x].idResult = _x;
                resultUser[msg.sender][_x].FPG = _FPG;
                resultUser[msg.sender][_x].HbA1C = _HbA1C;
                resultUser[msg.sender][_x].pressure.pressureHigh = _pressureHigh;
                resultUser[msg.sender][_x].pressure.pressureLow = _pressureLow;
                resultUser[msg.sender][_x].fat.TG = _TG;
                resultUser[msg.sender][_x].fat.LDL = _LDL;
                resultUser[msg.sender][_x].fat.HDL = _HDL;
                resultUser[msg.sender][_x].BMI = _BMI;
                resultUser[msg.sender][_x].Albumin = _Albumin;
                resultUser[msg.sender][_x].height = _height;
                resultUser[msg.sender][_x].weight = _weight;
                resultUser[msg.sender][_x].medicine = _medicine;
                resultUser[msg.sender][_x].resultDate = _resultDate;
                resultUser[msg.sender][_x].keep = true;
                break;
            } else {
                _x++;
            }
           
        }
    }
    
}