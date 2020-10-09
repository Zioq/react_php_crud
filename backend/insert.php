<?php
require_once 'connect.php';

$con = connect();

function cors()
{

    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }
}
//echo "You have CORS!";
//print_r($_POST);

$postdata  = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    //convert json data to PHP object
    $request = json_decode($postdata);

    print_r($request);

    // Sanitize
    $name = $request->name;
    $position = $request->position;
    $phone = $request->phone;
    $passcode = $request->passcode;

    // SQL process
    $sql = "INSERT INTO employee (employeeName, employeePosition, employeePhone, employeePasscode) VALUES ('{$name}', '{$position}', '{$phone}', '{$passcode}' )";
    var_dump($sql);
    if (mysqli_query($con, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}



cors($con);
