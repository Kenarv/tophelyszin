<?php

// Az új elem hozzáadása az adatbázishoz
    if ($_POST["action"] === "create") {
        $name = $_POST["name"];
        $description = $_POST["description"];

        $query = "INSERT INTO items (name, description) VALUES ('$name', '$description')";
        $mysqli->query($query);

        // Az új elem lekérése és visszaküldése a válaszban
        $newItemId = $mysqli->insert_id;
        $query = "SELECT * FROM items WHERE id=$newItemId";
        $result = $mysqli->query($query);
        $newItem = $result->fetch_assoc();

        echo json_encode($newItem);
    }

// Az összes elem lekérése
    if ($_POST["action"] === "read") {
        $query = "SELECT * FROM items";
        $result = $mysqli->query($query);

        $items = [];

        while ($row = $result->fetch_assoc()) {
            $items[] = $row;
        }

        echo json_encode($items);
    }

// Az elem frissítése az adatbázisban
    if ($_POST["action"] === "update") {
        $id = $_POST["id"];
        $name = $_POST["name"];
        $description = $_POST["description"];

        $query = "UPDATE items SET name='$name', description='$description' WHERE id=$id";
        $mysqli->query($query);

        // A frissített elem lekérése és visszaküldése a válaszban
        $query = "SELECT * FROM items WHERE id=$id";
        $result = $mysqli->query($query);
        $updatedItem = $result->fetch_assoc();

        echo json_encode($updatedItem);
    }

// Az elem törlése az adatbázisból
    if ($_POST["action"] === "delete") {
        $id = $_POST["id"];

        $query = "DELETE FROM items WHERE id=$id";
        $mysqli->query($query);

        // A törölt elem adatainak visszaküldése a válaszban
        echo json_encode(["id" => $id]);
    }

    // Adat
    $mysqli->close();

?>
