<?php

    include "dbconn.php";
    session_start();

    $data = json_decode(file_get_contents('php://input'), true);
    $response = array();

    // Ellenőrzi a HTTP kérést
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Adatok begyűjtése a formról
        $username = $data['username'];
        $password = $data['password'];

        // Ellenőrzi, hogy a felhasználónév létezik-e az adatbázisban
        $sql = "SELECT * FROM felhasznalo WHERE username='$username'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);

        if (!$row) {
            $response['error'] = "Nincs ilyen felhasználó!";
            echo json_encode($response);
            exit();
        }

        // Ellenőrzés, hogy a megadott jelszó egyezik-e a hash-elt jelszóval az adatbázisban
        if (password_verify($password, $row['password'])) {
            // A belépés sikeres, beállítjuk a session változókat
            $_SESSION['loggedIn'] = true;
            $_SESSION['userID'] = $row['userID'];
            $_SESSION['username'] = $row['username'];
            $_SESSION['loggedUser'] = $row;

            // Visszatér egy sikeres üzenettel
            $response['success'] = "Sikeres belépés!";
        } else {
            // A jelszó nem egyezik, hibaüzenetet ad vissza
            $response['error'] = "Hibás jelszó!";
        }

        // Kapcsolat bezárása
        mysqli_close($conn);

        // A válasz JSON formátumba konvertálása és visszaküldése
        echo json_encode($response);
    }
?>