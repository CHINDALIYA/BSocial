<?php
$servername = "localhost";
$username = "root"; // Default username for WampServer
$password = ""; // Default password is blank
$dbname = "signup";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Set PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

$conn= mysqli_connect("localhost","root","");
if(isset($_POST['index_btn'])){
$username=$_POST['logname'];
$email=$_POST['logemail'];
$passward=$_POST['logpass'];
?>