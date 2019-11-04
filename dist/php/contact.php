<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $my_email = 'stinsan1999@gmail.com';
  $headers = "From: ".$visitor_email;
  $email_body = "You have recieved a message from ".$name.".\n\n".$message;
  $email_subject = "Message From Your Website!";

  mail($my_email, $email_subject, $email_body, $headers);

  header("Location: index.html?mailsend");
?>
