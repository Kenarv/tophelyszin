<?php
    include "dbconn.php";
    include "functions.php";

    $data = json_decode(file_get_contents('php://input'), true);



    // Ellenőrizze a HTTP kérést
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Adatok begyűjtése a formról

        $helyszinNev = $data['helyszinNev'];
        $helyszinIrsz = $data['helyszinIrsz'];
        $helyszinVaros = $data['helyszinVaros'];
        $helyszinUtca = $data['helyszinUtca'];
        $helyszinHsz = $data['helyszinHsz'];
        $helyszinEmail = $data['helyszinEmail'];
        $helyszinVarMegye = $data['helyszinVarMegye'];
        $kapacitas = $data['kapacitas'];
        $etel = $data['etel'];
        $ital = $data['ital'];
        $klima = $data['klima'];
        $tancter = $data['tancter'];
        $parkolo = $data['parkolo'];
        $szallas = $data['szallas'];
        $arkategoria = $data['arkategoria'];
        $megjegyzes = $data['megjegyzes'];
        //$userID = $_SESSION['userID'];







        // Adatok mentése az databázisba
        $sql = "INSERT INTO helyszin (userID,helyszinNev,helyszinIrsz,helyszinVaros,helyszinUtca,helyszinHsz,helyszinEmail,helyszinVarMegye, kapacitas, etel, ital, klima, tancter, parkolo, szallas, arkategoria, megjegyzes) VALUES ('$userID', '$helyszinNev', '$helyszinIrsz', '$helyszinVaros', '$helyszinUtca', '$helyszinHsz', '$helyszinEmail', '$helyszinVarMegye', '$kapacitas', '$etel', '$ital', '$klima', '$tancter', '$parkolo', '$szallas', '$arkategoria', '$megjegyzes')";
        if (mysqli_query($conn, $sql)) {

            echo ("Az adatokat sikeresen tároltuk");
        } else {
            echo "Hiba történt a tárolás közben: ";
        }
    }

    // Kapcsolat bezárása
    mysqli_close($conn);

?>