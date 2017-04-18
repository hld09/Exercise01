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

      $food1 = $_POST["food1"];
      $food2 = $_POST["food2"];
      $food3 = $_POST["food3"];

      $ID = $_POST["userID"];

      $sql = "UPDATE food SET ID ='$ID', food1 ='$food1',food2 ='$food2',food3 ='$food3' WHERE ID='$ID'";

      $mysqli->query($sql);

      echo "From what I see, your favorite foods are: ($food1, $food2, $food3)";
    ?>
    </p>

  <a href="index.html">Return to login if you would like to alter your choices</a>
  </body>
</html>
