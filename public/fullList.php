<?php

    include "dbconn.php";

    $query = "select * from helyszin";
    $result = mysqli_query($conn, $query);

    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }

    // JSON formátumban visszaadás
    header("Content-Type: application/json");
    echo json_encode($data);

    // Adatbázis kapcsolat lezárása
    mysqli_close($conn);
