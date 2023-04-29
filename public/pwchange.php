<?php

    include "dbconn.php";
    include "functions.php";
    session_start();

    $data = json_decode(file_get_contents('php://input'), true);
    $response = array();

    // Ellenőrzi a HTTP kérést
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Adatok begyűjtése a formról
        $new_password = $data['new_password'];
        $new_confirmPassword = $data['new_confirmPassword'];
        $username = $_SESSION['username'];

        if ($new_password !== $new_confirmPassword) {
            $response['error'] = "A jelszavak nem egyeznek meg!";
        } else {
            $hashed_new_password = password_hash($new_password, PASSWORD_DEFAULT);
        }


        $sql = "UPDATE felhasznalo SET password = '$hashed_new_password' WHERE username='$username'";
        if (mysqli_query($conn, $sql)) {
            $response['success'] = "A jelszó sikeresen megváltoztatva.\nLegközelebb már ezzel jelentkezhetsz be.";

        } else {
            $response['error'] = "Hiba történt a tárolás közben.";
        }

        $response['username'] = $username;

        // Kapcsolat bezárása
        mysqli_close($conn);

        // A válasz JSON formátumba konvertálása és visszaküldése
        echo json_encode($response);
    }
?>