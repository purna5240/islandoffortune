<?php
    require_once "connection.php";
    session_start();
    if(isset($_POST['bt']))
    {
        // $uname = isset($_POST['uname']);

        // $email = mysqli_real_escape_string($con,$_POST['email']);
        // $pass = mysqli_real_escape_string($con,$_POST['pass']);
        // $cpass = mysqli_real_escape_string($con,$_POST['cpass']);
    
        $Email=$_POST['Email'];
        $pass=$_POST['Password'];
        $_SESSION["MAIL"] = $Email;
        
       
        $sql="SELECT * FROM registerform where email='$Email'";   
        $result=$pdo->query($sql);
      $x=$result->fetch(PDO::FETCH_ASSOC);
      echo $x["username"];  
      echo $pass;
      echo $x["password"];
        //header("location:1.html");   
        if($pass==$x["password"])
        {
            
            if($x["usertype"]=="admin")
            {
                header("location:adminlogin.php");
            }
            else{
                header("location:help.php"); 
            // }
            }        
        }
        else
        {
           echo "Password Incorrect";
        }
    }
    
    ?>  