<?php

    // Adatbázis beállítások
    $db_host = "localhost";
    $db_username = "root";
    $db_password = "";
    $database = "tophelyszin";
    $image_dir = "/picdata/";

    // Kapcsolódás az adatbázishoz
    $conn = mysqli_connect($db_host, $db_username, $db_password, $database);

    // Ellenőrzi a kapcsolatot
    if (!$conn) {
        echo("Hibás kapcsolat: " . mysqli_connect_error());
        die();
    }
?>