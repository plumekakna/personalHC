pragma solidity ^0.5.8;

// Contract User !!!!!!!!!!!!!!!!!!!!!!!
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
        int dateUser;
        string diseaseUser;
        string medicineUser;
        string phoneUser;
        
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
        int _dateUser,
        string memory _diseaseUser,
        string memory _medicineUser,
        string memory _phoneUser
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
        user[msg.sender].phoneUser = _phoneUser;
        
        countUser.push(msg.sender) -1;
        
        emit addUserEvent(_fnameUser);
        
    }
    
    //get user details part1
    function getUserP1() public view returns (
        address, 
        uint, 
        string memory,
        string memory, 
        string memory, 
        int, 
        string memory, 
        string memory, 
        string memory
        ) {
        return (
            msg.sender,
            user[msg.sender].idUser, 
            user[msg.sender].genderUser,
            user[msg.sender].fnameUser,  
            user[msg.sender].lnameUser, 
            user[msg.sender].dateUser, 
            user[msg.sender].addressUser, 
            user[msg.sender].diseaseUser, 
            user[msg.sender].medicineUser
            );
    }
    
    //get user details part2
    function getUserP2() public view returns (string memory) {
        return (user[msg.sender].phoneUser);
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


// Contract Result !!!!!!!!!!!!!!
contract Result is personalUser {
    
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
        uint timesPerYear;
        bool insurance;
        
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
    
    // event add Result
    event addResultrEvent(uint id);
    
    // check last result have? 
    function checkHaveLastResult() public view returns (bool) {
            if (resultUser[msg.sender][1].keep == true) {
                return (true);  // if have return true
            } 
    }
    
    // get last result user
    function getResultUserLast() 
    public view 
    returns (
        uint,
        int,
        int,
        int,
        int,
        int,
        int,
        int,
        int,
        int,
        uint,
        uint,
        string memory
        ) {
            uint _x = 1;
            while (true) {
                if (resultUser[msg.sender][_x].keep == true) {
                    _x++;
                } else {
                    break;
                }
            }
            return (
                resultUser[msg.sender][_x-1].resultDate,
                resultUser[msg.sender][_x-1].FPG,
                resultUser[msg.sender][_x-1].HbA1C,
                resultUser[msg.sender][_x-1].pressure.pressureHigh,
                resultUser[msg.sender][_x-1].pressure.pressureLow,
                resultUser[msg.sender][_x-1].fat.TG,
                resultUser[msg.sender][_x-1].fat.LDL,
                resultUser[msg.sender][_x-1].fat.HDL,
                resultUser[msg.sender][_x-1].BMI,
                resultUser[msg.sender][_x-1].Albumin,
                resultUser[msg.sender][_x-1].height,
                resultUser[msg.sender][_x-1].weight,
                resultUser[msg.sender][_x-1].medicine
                );
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
                
                // count times per year
                if (resultUser[msg.sender][_x - 1].timesPerYear < 4) {
                    resultUser[msg.sender][_x].timesPerYear = resultUser[msg.sender][_x - 1].timesPerYear + 1;
                } else {
                    resultUser[msg.sender][_x].timesPerYear = 1;
                }
                
                // compare for insurance
                if (compareFPG(_x) == 1
                && compareHbA1c(_x) == 1
                && comparePressure(_x) == 1
                && compareTG(_x) == 1
                && compareLDL(_x) == 1
                && compareHDL(_x) == 1 
                && compareAlbumin(_x) == 1
                ) {
                    resultUser[msg.sender][_x].insurance = true;
                } else {
                    resultUser[msg.sender][_x].insurance = false;
                }
                
                emit addResultrEvent(_x);
                break;
            } else {
                _x++;
            }
           
        }
        
    }
    
        //count result for show list 
        function showListResult() public view returns(uint) {
            uint _x = 1;
            while (true) {
                if (resultUser[msg.sender][_x].keep == true) {
                    _x++;
                } else {
                    break;
                }
            }
            _x = _x - 1;
            return(_x);
        }
        
    // Get result User   
    // get result per id user (part1)
    function getResultUserPerId1(uint _id) 
    public view 
    returns (
    uint,
        uint,
        int,
        int,
        int,
        int
        ) {
            return (
                resultUser[msg.sender][_id].idResult,
                resultUser[msg.sender][_id].resultDate,
                resultUser[msg.sender][_id].FPG,
                resultUser[msg.sender][_id].HbA1C,
                resultUser[msg.sender][_id].pressure.pressureHigh,
                resultUser[msg.sender][_id].pressure.pressureLow
                );
    }
    
     // get result per id user (part2)
    function getResultUserPerId2(uint _id) 
    public view 
    returns (
        int,
        int,
        int,
        int,
        int
        ) {
            return (
                resultUser[msg.sender][_id].fat.TG,
                resultUser[msg.sender][_id].fat.LDL,
                resultUser[msg.sender][_id].fat.HDL,
                resultUser[msg.sender][_id].BMI,
                resultUser[msg.sender][_id].Albumin
                );
    }
    
    
    // get result per id user (part3)
    function getResultUserPerId3(uint _id) 
    public view 
    returns (
        uint,
        uint,
        string memory
        ) {
            return (
                resultUser[msg.sender][_id].height,
                resultUser[msg.sender][_id].weight,
                resultUser[msg.sender][_id].medicine
                );
    }
    
   
    // Compare Result !!!!!!
    /*
    0 = lower
    1 = good
    2 = higher
    
    *** คูณ100
    */
    
    // FPG
    function compareFPG(uint _id) public view returns(uint) {
        uint _result;
        int _value = resultUser[msg.sender][_id].FPG;
        if (_value < 12000) {
            _result = 0;
        } else if (_value > 14000) {
            _result = 2;
        } else {
            _result = 1;
        }
        return (_result);
    }
    
    // HbA1c
    function compareHbA1c(uint _id) public view returns(uint)  {
        uint _result;
        int _value = resultUser[msg.sender][_id].HbA1C;
        if (_value < 700) {
            _result = 1;
        } else {
            _result = 2;
        }
        return (_result);
    }
    
    // pressure
    function comparePressure(uint _id) public view returns(uint) {
        uint _result;
        int _value1 = resultUser[msg.sender][_id].pressure.pressureHigh;
        int _value2 = resultUser[msg.sender][_id].pressure.pressureLow;
        if (_value1 < 13000 && _value2 < 8000) {
            _result = 1;
        } else {
            _result = 2;
        }
        return (_result);
    }
    
    // TG
    function compareTG(uint _id) public view returns(uint)  {
        uint _result;
        int _value = resultUser[msg.sender][_id].fat.TG;
        if (_value < 700) {
            _result = 1;
        } else {
            _result = 2;
        }
        return (_result);
    }
    
    // LDL
    function compareLDL(uint _id) public view returns(uint) {
        uint _result;
        int _value = resultUser[msg.sender][_id].fat.LDL;
        if (_value < 10000) {
            _result = 1;
        } else {
            _result = 2;
        }
        return (_result);
    }
    
    // HDL
    function compareHDL(uint _id) public view returns(uint) {
        uint _result;
        int _value = resultUser[msg.sender][_id].fat.LDL;
        string memory _gender = user[msg.sender].genderUser;
        string memory _male = 'ชาย';
        if (keccak256(abi.encodePacked(_gender)) == keccak256(abi.encodePacked(_male))) {
            if (_value > 4000) {
                _result = 1;
            } else {
                _result = 0;
            }
        } else {
            if (_value > 5000) {
                _result = 1;
            } else {
                _result = 0;
            }
        }
        return(_result);
    }
    
    // Albumin
    function compareAlbumin(uint _id) public view returns(uint) {
        uint _result;
        int _value = resultUser[msg.sender][_id].Albumin;
        if (_value < 3000) {
            _result = 1;
        } else {
            _result = 2;
        }
        return(_result);
    }

    // BMI    
    function compareBmi(unit_id) public view returns(nint){
        uint _result;
        int _value = resultUser[msg.sender][_id].BMI;
        if (_value < 1850){
            _result = 0;
        } else if (_value > 2300){
            result = 2;
        } else {
            result = 1;
        }
        return (_result);
    }
   
}


