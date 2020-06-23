<?php
  $girl_names = ["Alice", "Jill", "Brittny", "Rebaka", "Neerja", "Parvate", "Neha"];
  $boy_names = ["Bob", "Raj", "Tom", "Akram", "Peter", "Jack", "Frank"];
  $rand = rand(0, 6);
  if(isset($_GET["g"])){
    if($_GET["g"] == "girl"){
      echo json_encode(["name" => $girl_names[$rand]]);
    } else {
      echo json_encode(["name" => $boy_names[$rand]]);
    }
  }

?>
