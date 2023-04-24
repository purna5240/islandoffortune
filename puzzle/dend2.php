<?php
    require_once "connection.php";
    session_start();
    if(isset($_POST['btn']))
    {
        
      header("location:question5.php");
}
       
    ?>