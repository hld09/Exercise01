<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Create User</title>
  </head>
  <body>
    <p>
    <?
      $host = "localhost";
      $user = "root";
      $password = "";

      $mysqli = new mysqli($host, $user, $password, "exercise05");

      if ($mysqli->connect_errno) {
        die("Error: " . $mysqli->connect_errno);
      }
      
      $ID = rand(1000000,9999999);
      $name = $_POST["name"];
      $pass = $_POST["pass"];
      $sql = "INSERT INTO users (ID, name, pass) VALUES ('$ID','$name', '$pass')";
      $sql2 = "INSERT INTO food (ID) VALUES ('$ID')";

      $mysqli->query($sql);
      $mysqli->query($sql2);

      echo "Your account ($name, $pass) has successfully been created.";
      echo "Your ID number: ($ID) has been created.";
    ?>
    </p>

  <a href="index.html">Return home</a>
  </body>
</html>
