<?php
    include "dbconn.php";
    session_start();


        if (isset($_SESSION['userID'])) {

            $userID = $_SESSION['userID'];
            $username = $_SESSION['username'];
            $loggedUser = $_SESSION['loggedUser'];




            $_SESSION['loggedIn'] = true;

        }

        //redirect to login
        //echo("Be kell jelentkezni!");
        //header("Location: login.php");
        //die;


