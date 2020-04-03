<?php

// call Url for get ETH to Baht
$html=file_get_contents("https://coinyep.com/th/ex/ETH-THB");

// compare
preg_match("/<small id='coinyep-reverse2'>(.*)<\/small>/", $html, $match);
$pagetitle = $match[1];
//print_r($match);

// convert value to float
$ETH = str_replace('ETH', "", substr($pagetitle, 8));
$ETHToBaht = (float) $ETH;

?>

<script>
// php to js
var ETHToBaht =  <?php echo $ETHToBaht; ?>;
var payETH = ETHToBaht * 4000;
console.log(payETH);
</script>


<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Personal Healthcare</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--Bootstrap v4.3.1-->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <!--Fonts-->
        <link href="https://fonts.googleapis.com/css?family=Maitree:500&display=swap" rel="stylesheet">
		<!--Main  CSS-->
        <link rel="stylesheet" href="css/main.css">
        <!--main js-->
        <script src="js/checkStillLogin.js"></script>
    </head>
    <body class="bg-light">
        <!-- Nav -->
        
		<nav class="navbar navbar-expand-md bg-white navbar-light border-bottom p-3 sticky-top">           
            <div class="container mg_nav">
                <!-- Brand -->
                <a class="navbar-brand" href="index.html"><b>Personal Healthcare</b> </a>
                
                 <!-- Toggler/collapsibe Button -->
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span class="navbar-toggler-icon"></span>
			</button>
			  		  
			    <!-- Navbar links -->
			    <div class="col-md-auto ml-3 navbar-collapse collapse" id="collapsibleNavbar">
				<ul class="navbar-nav">
					<li class="nav-item">
					  	<a class="nav-link" href="index.html">หน้าแรก</a>
					</li>
					<li class="nav-item">
					  	<a class="nav-link" href="detailPersonal.html">ข้อมูลส่วนตัว</a>
					</li>
					<li class="nav-item">
					  	<a class="nav-link" href="resultUser.html">ผลการตวจ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="addresult.html">เพิ่มผลการตรวจ</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="EXPcontract.php">อายุสัญญา</a>
              </li>
                </ul>

                </div>
               
            
                <div  class="navbar-collapse collapse justify-content-end" id="collapsibleNavbar"> 
                    <ul class="nav">
                        <li class="nav-item" id="stillLogin">
                                
                        </li>                        
                        
                    </ul>
                </div>                     
        </nav>
        

        <!--Body-->
        <div class="container bg-white border mg_body" style="margin-top:1%; padding: 2%; text-align: center;">
            <div class="mb-3" style="text-align: center;">
                <h2>อายุสัญญา</h2>
            </div>                
            
            <div class="mb-3" style="text-align: center;">
                <b>วันหมดอายุ</b> : <span id="expDate"></span>             
            </div>
            <div class="mb-3" style="text-align: center;">
                <table class="table table-bordered text-center">
                    <tbody>
                    <tr class="table-warning">
                        <th scope="row">จำนวน Ether ที่ต้องจ่าย</th>
                        <td id="ETHpay"></td>
                    </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-center">
                   <small style="color:red;">* 1 บาท = <span id="ETHbaht"></span></small>
                </div>
                <div class="d-flex justify-content-center pb-2">
                   <small style="color:red;">** ไม่รวมค่า gas</small>
                </div>     
                
                <div class="d-flex justify-content-center">
                    <button type="button" id="paying" class="btn btn-primary">จ่ายเงินต่ออายุ 1 ปี </button>
                </div> 
            </div>
            
            
        </div>
        <!--jQuery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <!--Web3-->
        <script src="js/web3.min.js"></script>
        <!--Boostrap js-->
        <script src="js/bootstrap.min.js"></script>
        <!--main js-->
        <script src="js/main.js"></script>
        <!--ETHshow js-->
        <script src="js/ETHshow.js"></script>
        <!--EXP js-->
        <script src="js/EXPcontract.js"></script>
    </body>
</html>