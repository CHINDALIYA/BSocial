<?php
$conn= mysqli_connect("localhost","root","");
if(isset($_POST['index_btn'])){
$username=$_POST['logname'];
$emaill=$_POST['logemail'];
$passward=$_POST['logpass'];
?>
