<?php
    require_once "connection.php";
    session_start();
    if(isset($_POST['btn']))
    {
      header("location:introduction1.php");
}     
    ?>