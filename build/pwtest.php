<?php
$userpass = 'valaki';
echo "kódolt jelszó:" . password_hash($userpass, PASSWORD_DEFAULT);