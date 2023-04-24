<!DOCTYPE html>
<html lang="en">
<head>
   
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</head>
<body  style="background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5)),url('register.jpg');background-attachment: fixed ;background-size: cover;background-repeat: no-repeat;">
    
      <div style=" font-weight:bold;padding-left: 100px;padding-top: 150px ">
        <form action ="process.php" method="post"  class="row g-3" style="display: inline;">
          <div class="col-md-6" style="padding-right: 300px;">
              <label for="input" class="form-label"  style="color: beige;">User Name</label>
              <input type="text" name="UName" class="form-control" id="inputEmail4">
            </div>
            <div class="col-md-6" style="padding-right: 300px;">
              <label for="inputEmail4" class="form-label" style="color: beige;">Email</label>
              <input type="email"  name="Email" class="form-control" id="inputEmail4">
            </div>
            <div class="col-md-6"  style="padding-right: 300px;">
              <label for="inputPassword4" class="form-label"  style="color: beige;">Password</label>
              <input type="password" name="Password"class="form-control" id="inputPassword4">
            </div>
            <div class="col-md-6"  style="padding-right: 300px;">
              <label for="inputPassword5" class="form-label"  style="color: beige;">Confirm Password</label>
              <input type="password" name="CPassword" class="form-control" id="inputPassword5">
            </div>
            
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck" style="color: beige;">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary" name="btn">Sign in</button>
            </div>
          </form>   
      </div>
    </div>
</body>
</html>