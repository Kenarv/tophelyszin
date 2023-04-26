<?php
    include "dbconn.php";
    session_start();

    $data = json_decode(file_get_contents('php://input'), true);



    // Ellenőrizze a HTTP kérést
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Adatok begyűjtése a formról

        $lastName = $data['lastName'];
        $firstName = $data['firstName'];
        $username = $data['username'];
        $email = $data['email'];
        $phone = $data['phone'];
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
                echo "Ezzel az email címmel már regisztráltak!";
                exit();
            }
        }

        // Hash-elt jelszó létrehozása
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Adatok mentése az adatbázisba
        $sql = "INSERT INTO felhasznalo (vezNev, kerNev, username, email, phone, password) VALUES ('$lastName', '$firstName', '$username', '$email', '$phone', '$hashed_password')";
        if (mysqli_query($conn, $sql)) {

            echo "Az adatokat sikeresen tároltuk";
        } else {
            echo "Hiba történt a tárolás közben: " . mysqli_error($conn);
        }
    }

    // Kapcsolat bezárása
    mysqli_close($conn);

?>