<?php
    session_start();
    header('Content-type: application/json');

    $errors = [];

    if (!isset($_POST['vezNev']) || empty(trim($_POST['vezNev']))) {
        $errors['vezNev'] = 'A vezetéknév megadása kötelező!';
    }

    if (!isset($_POST['kerNev']) || empty(trim($_POST['kerNev']))) {
        $errors['kerNev'] = 'A keresztnév megadása kötelező!';
    }

    if (!isset($_POST['username']) || empty(trim($_POST['username']))) {
        $errors['username'] = 'A felhasználónév megadása kötelező!';
    } else {
        // Ellenőrizzük, hogy a felhasználónév szerepel-e már az adatbázisban
        $conn = mysqli_connect('localhost', 'root', '', 'tophelyszin');
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $query = "SELECT * FROM felhasznalo WHERE username = '$username'";
        $result = mysqli_query($conn, $query);
        if (mysqli_num_rows($result) > 0) {
            $errors['username'] = 'Már van ilyen felhasználó!';
        }
    }

    if (!isset($_POST['email']) || empty(trim($_POST['email']))) {
        $errors['email'] = 'Az email cím megadása kötelező!';
    } else {
// Ellenőrizzük, hogy az email cím szerepel-e már az adatbázisban
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $conn = mysqli_connect('localhost', 'root', '', 'tophelyszin');
        $query = "SELECT * FROM felhasznalo WHERE email = '$email'";
        $result = mysqli_query($conn, $query);

        if (mysqli_num_rows($result) > 0) {
            $errors['email'] = 'Már regisztráltak ezzel az email címmel!';
        }
    }

    if (!isset($_POST['password']) || empty(trim($_POST['password']))) {
        $errors['password'] = 'A jelszó megadása kötelező!';
    }

    if (!isset($_POST['passwordRe']) || empty(trim($_POST['passwordRe']))) {
        $errors['passwordRe'] = 'A jelszó újra megadása kötelező!';
    } else {
        if ($_POST['password'] !== $_POST['passwordRe']) {
            $errors['passwordRe'] = 'A két jelszó nem egyezik!';
        }
    }

    if (empty($errors)) {
// Adatok felvétele az adatbázisba
        $conn = mysqli_connect('localhost', 'root', '', 'tophelyszin');
        $vezNev = mysqli_real_escape_string($conn, $_POST['vezNev']);
        $kerNev = mysqli_real_escape_string($conn, $_POST['kerNev']);
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);


        $query = "INSERT INTO felhasznalo (vezNev, kerNev, username, email, password) 
          VALUES ('$vezNev', '$kerNev', '$username', '$email', '$password')";

        mysqli_query($conn, $query);

// Felhasználó beléptetése
        $_SESSION['felhasznalo'] = $username;

        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'errors' => $errors]);
    }