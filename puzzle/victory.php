<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link rel="stylesheet" href="mystyle.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script>
function myFunction() {
  document.getElementById('t1').src='open.png';

}


</script>
<?php
session_start();
$x=$_COOKIE['score'];
echo "<script>alert('$x')</script>"
?>
  </head>
<body class="bg" style="  background-attachment: fixed;">

<div>

  <img class="tc" type="button" onclick="myFunction()" id="t1" src='Picsart_23-04-22_18-04-20-308.png'style="POSITION:FIXED;">
  <body>
 <div class="waviy" STYLE="MARGIN-TOP:950PX;MARGIN-RIGHT:30PX;color:black;">
   <span style="--i:1;color:black;">C</span>
   <span style="--i:2;color:black;">L</span>
   <span style="--i:3;color:black;">I</span>
   <span style="--i:4;color:black;">C</span>
   <span style="--i:5;color:black;">K</span>
   <span style="--i:7;color:black;"> </span>
   <span style="--i:3;color:black;">O</span>
   <span style="--i:3;color:black;">N</span>
   <span style="--i:7;color:black;"> </span>   
   <span style="--i:7;color:black;"> </span>

   <span style="--i:7">B</span>
   <span style="--i:7">O</span>
   <span style="--i:7">X</span>
   <span style="--i:7"> </span>

   <span style="--i:6">T</span>
   <span style="--i:7">O</span>
   <span style="--i:7"> </span>
   <span style="--i:8;color:black;">O</span>
   <span style="--i:1;color:black;">P</span>
   <span style="--i:2;color:black;">E</span>
   <span style="--i:3;color:black;">N</span>
   <!-- <span style="--i:4">C</span>
   <span style="--i:5">K</span>
   <span style="--i:6">T</span>
   <span style="--i:7">O</span>
   <span style="--i:8">O</span> -->
   <form method="post" action="SCORE.php"><button name='btn' class="btn btn-primary" style="position:relative;left:700px;bottom:50px;"></button></form>
  </div>
</body>
</div>
<p class='tap'></p>
  </body>
</html>