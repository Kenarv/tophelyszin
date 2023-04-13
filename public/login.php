<?php
    session_start();

    // Adatbázis beállítások
    $db_host = "localhost";
    $db_username = "c41703root";
    $db_password = "tophelyszin";
    $database = "c41703tophelyszin";

    // Kapcsolódás az adatbázishoz
    $conn = mysqli_connect($db_host, $db_username, $db_password, $database);

    // Ellenőrzi a kapcsolatot
    if (!$conn) {
        die("Hibás kapcsolat: " . mysqli_connect_error());
    }

    $data = json_decode(file_get_contents('php://input'), true);

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
            echo "Nincs ilyen felhasználó!";
            exit();
        }

        // Ellenőrzés, hogy a megadott jelszó egyezik-e a hash-elt jelszóval az adatbázisban
        if (password_verify($password, $row['password'])) {
            // A belépés sikeres, beállítjuk a session változókat
            $_SESSION['loggedIn'] = true;
            $_SESSION['username'] = $row['username'];
            $_SESSION['firstName'] = $row['kerNev'];
            $_SESSION['lastName'] = $row['vezNev'];

            // Visszatér egy sikeres üzenettel
            echo "Sikeres belépés!";
        } else {
            // A jelszó nem egyezik, hibaüzenetet ad vissza
            echo "Hibás jelszó!";
        }
    }

    // Kapcsolat bezárása
    mysqli_close($conn);

?>