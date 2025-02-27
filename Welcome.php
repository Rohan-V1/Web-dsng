<?php
if($_SERVER["REQUEST_METHOD"]=="POST") 
{
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
    
echo "<p>FORM SUBMISSION RESULT</p>";
echo "<p><strong>Name:</strong>$name</p>";
echo "<p><strong>Email:</strong>$email</p>";
echo "<p><strong>Message:</strong>$message</p>";
} 
else
	{
    echo "<p>Access denied</p>";
}
?>
