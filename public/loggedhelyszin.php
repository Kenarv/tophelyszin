<?php

    include "dbconn.php";
    session_start();

    if (isset($_SESSION['userID'])) {

        $userID = $_SESSION['userID'];

        $query = "select * from helyszin where userID = '$userID'";

        $result = mysqli_query($conn, $query);

        $data = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }

        // JSON formátumban visszaadás
        header("Content-Type: application/json");
        echo json_encode($data);

        $_SESSION['loggedIn'] = true;

        // Adatbázis kapcsolat lezárása
        mysqli_close($conn);
    }
