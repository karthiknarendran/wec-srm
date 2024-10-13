<?php
if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["phone"]) && isset($_POST["message"])) {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$phone = $_POST["phone"];
	$message = $_POST["message"];
	$conn = mysqli_connect("localhost", "root", "", "test");
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	$sql = "INSERT INTO registrations(name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";
	if (mysqli_query($conn, $sql)) {
		echo "Record added successfully";
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}
	mysqli_close($conn);
}
?>
