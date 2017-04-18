<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Insert Food </title>
  </head>
  <body>
    <p>
    <?
      session_start();
      $host = "localhost";
      $user = "root";
      $password = "";

      $mysqli = new mysqli($host, $user, $password, "exercise05");

      if ($mysqli->connect_errno) {
        die("Error: " . $mysqli->connect_errno);
      }

      $name = $_POST["name"];
      $pass = $_POST["pass"];

      $query = "SELECT * FROM Users WHERE User = '$user' AND Password = '$pass' LIMIT 1";

      echo "Hello ($name). Welcome! Tell me a little about yourself. Below you can enter your favorite foods!";

//      $mysqli->query($userid);

    //  echo $mysqli
    //  echo "Your computer generated ID is (''). Please enter this in the ID box below.";


    ?>

    <big> <b>List your favorite foods in order of preference </b></big>
    <big> <b>If you do not have an ID, please create a valid account <a href="createuser.php">here</a> </b></big>

    <form action="createfood.php" method="post">
      <input name="userID" type="text" placeholder="ID #">
      <input name="food1" type="text" placeholder="">
      <input name="food2" type="text" placeholder="">
      <input name="food3" type="text" placeholder="">

      <input type="submit"></input>

    </form>
    </p>

  <a href="index.html">Return home</a>
  </body>
</html>
