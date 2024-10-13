<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Connect to MySQL database
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'test';

$connection = mysqli_connect($host, $user, $password, $database);

// Check connection
if (!$connection) {
  die("Connection failed: " . mysqli_connect_error());
}

// Insert data into the database
$sql = "INSERT INTO registrations (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";

if (mysqli_query($connection, $sql)) {
  echo "Registration successful";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($connection);
}

mysqli_close($connection);
?>
