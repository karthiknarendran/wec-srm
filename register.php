<?php

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$event_name = $_POST['eventName'];

// Insert data into the database
$sql = "INSERT INTO event_registrations (name, email, phone, event_name) VALUES ('$name', '$email', '$phone', '$event_name')";

if (mysqli_query($conn, $sql)) {
  echo "Registration successful!";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>
