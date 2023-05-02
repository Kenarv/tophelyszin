<?php
    include "dbconn.php";
    session_start();

    if (isset($_SESSION['userID'])) {

        $userID = $_SESSION['userID'];
        $username = $_SESSION['username'];
        $loggedUser = $_SESSION['loggedUser'];

        $logged = $loggedUser;
        // JSON formátumban visszaadás
        header("Content-Type: application/json");
        echo json_encode($logged);

        $_SESSION['loggedIn'] = true;
    }

