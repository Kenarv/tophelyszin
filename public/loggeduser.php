<?php

    include "dbconn.php";
    session_start();



    if (isset($_SESSION['userID'])) {

        $userID = $_SESSION['userID'];
        $username = $_SESSION['username'];
        $loggedUser = $_SESSION['loggedUser'];

        $query = "select * from helyszin where userID = '$userID'";

        $result = mysqli_query($conn, $query);
        $loggedHelyszin = mysqli_fetch_assoc($result);

        echo json_encode($loggedHelyszin);

        $_SESSION['loggedIn'] = true;

    }
