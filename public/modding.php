<?php
    include "dbconn.php";


    // Azonosító megszerzése a GET paraméterből
    $id = $_GET['id'];

    // Adatok törlése az adatbázisból
    $sql = "DELETE FROM helyszin WHERE helyszinID = $id";
    mysqli_query($conn, $sql);

    // Visszajelzés küldése a JavaScript-nek
    $response = array("status" => "success");
    header("Content-Type: application/json");
    echo json_encode($response);

    // Adatbázis kapcsolat lezárása
    mysqli_close($conn);
?>
