<?php 
$name = $_POST['visitor_name'];
$email = $_POST['visitor_email'];
$message = $_POST['visitor_message'];

$email_from = 'ajf1988@gmail.com';

$email_subject = "From your portfolio";

$formcontent="From: $name.\n".
              "email: $email.\n".
                 "Message: $message.\n";

$to = "jawid_fakhari@live.it";

$mailheader = "From: $email \r\n";

mail($to, $email_subject, $formcontent, $mailheader);

header("Location: index.html");
?>