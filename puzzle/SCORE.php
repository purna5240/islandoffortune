<?php
    require_once "connection.php";
    session_start();
   
    if(isset($_POST['btn']))
    {
    $Email= $_SESSION["MAIL"] ;
    $score=$_COOKIE['score'];
    $sql="UPDATE `registerform` SET `score`='$score' WHERE email='$Email'";
    $stmt=$pdo->query($sql);
    header("location:userlogin.php");

    }     
    ?>