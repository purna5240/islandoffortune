<?php
    require_once('connection.php');
    session_start();
    if(isset($_POST['btn']))
    {
        // $uname = isset($_POST['uname']);

        // $email = mysqli_real_escape_string($con,$_POST['email']);
        // $pass = mysqli_real_escape_string($con,$_POST['pass']);
        // $cpass = mysqli_real_escape_string($con,$_POST['cpass']);
        $uname= $_POST['UName'];
        $email=$_POST['Email'];
        $pass=$_POST['Password'];
        $cpass=$_POST['CPassword'];
        $_SESSION["MAIL"] = $Email;
        //echo $uname;
        if($pass==$cpass)
        {

           
        $sql="INSERT INTO `registerform`(`username`, `email`, `password`) VALUES ('$uname','$email','$pass')";     
        $result=$pdo->query($sql);
        header("location:help.php"); 
    }
        else
        {
           echo  "not";
        }
    }
    ?>  