<?php
$connect=mysqli_connect("localhost","root","","eu") or die("connection Failed");
if(empty($_POST['save']))
{
    $username=$_POST['username'];
    $password = $_POST['password'];
    $query="select * from users where username='$username' and password='$password'";
    $result=mysqli_query($connect,$query);
    $count=mysqli_num_rows($result);
    if($count>0)
    {
        header("location:index.php");
    }
    else{
        echo '<script>alert("Login not successful. Please check your credentials."); window.location = "login.php";</script>';

    }
   
}
?>