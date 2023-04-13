<?php

    session_start();

    // Adatbázis beállítások
    $db_host = "localhost";
    $db_username = "c41703root";
    $db_password = "tophelyszin";
    $database = "c41703tophelyszin";

    // Kapcsolódás az adatbázishoz
    $conn = mysqli_connect($db_host, $db_username, $db_password, $database);

    // Ellenőrizze a kapcsolatot
    if (!$conn) {
        die("Hibás kapcsolat: " . mysqli_connect_error());
    }

    $data = json_decode(file_get_contents('php://input'), true);



    // Ellenőrizze a HTTP kérést
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Adatok begyűjtése a formról

        $lastName = $data['lastName'];
        $firstName = $data['firstName'];
        $username = $data['username'];
        $email = $data['email'];
        $password = $data['password'];
        $confirmPassword = $data['confirmPassword'];




        // Jelszó egyezés ellenőrzése
        if ($password !== $confirmPassword) {
            echo "A jelszavak nem egyeznek meg!";
            exit();
        }

        // Ellenőrzi, hogy a felhasználónév vagy az email cím már szerepel-e az adatbázisban
        $sql = "SELECT * FROM felhasznalo WHERE username='$username' OR email='$email'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);

        if ($row) {
            if ($row['username'] === $username) {
                echo "A felhasználónév már foglalt!";
                exit();
            }

            if ($row['email'] === $email) {
                echo "Az email címmel már regisztráltak!";
                exit();
            }
        }

        // Hash-elt jelszó létrehozása
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Adatok mentése az adatbázisba
        $sql = "INSERT INTO felhasznalo (vezNev, kerNev, username, email, password) VALUES ('$lastName', '$firstName', '$username', '$email', '$hashed_password')";
        if (mysqli_query($conn, $sql)) {
            echo "Az adatokat sikeresen tároltuk az adatbázisban!";
        } else {
            echo "Hiba történt a tárolás közben: " . mysqli_error($conn);
        }
    }

    // Kapcsolat bezárása
    mysqli_close($conn);

?>