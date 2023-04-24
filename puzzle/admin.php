
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <style>
        
    </style>
</head>
<body style="background:linear-gradient(rgba(0,0,0,0.10),rgba(0,0,0,0.7)), url('chess.jpg');background-repeat: no-repeat; background-attachment: fixed;background-size: cover;background-color: black;position:fixed;">
    <div class="row">
            <div class="col">
           <img src="lo.png" style="margin-left:100px ; margin-top: 100px; width: 100px;
      height: 100px;margin-bottom:400px;
      object-fit: cover;overflow-y: hidden;position: relative;bottom:300px;right:80px;top:30px;">
      <img src="tittle.png" style="margin-left:100px ; margin-top: 0px;
       max-width:100%;
    height:auto;margin-bottom:400px;
      object-fit: cover;overflow-y: hidden;position: relative;bottom:450px;right:30px">
            </div>
            <div class="col" style="padding-right: 100px;padding-left: 550px;padding-top: 100px;position: relative;right:900px;top:150px;">
              <form action ="log.php" method="post">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label" style="color: white;">Admin Email</label>
                  <input type="email" class="form-control" name="Email" id="exampleInputEmail1" aria-describedby="emailHelp">
                  <div id="emailHelp" class="form-text"style="color: white;">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label" style="color: white;">Password</label>
                  <input type="password" name="Password" class="form-control" id="exampleInputPassword1">
                </div>  
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1"style="color: white;">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" name="bt">LOGIN</button>
              </form></div>
        </div>
      </div></div>
      
</div>
</body>
</html>