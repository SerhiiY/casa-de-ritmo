<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'casa.de.ritmo.2019@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'cas-13243546-DE'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'TLS';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('serzh.yyy83@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('dj.ser961@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на звонок с сайта Casa de Ritmo';
$mail->Body    = '' .$name. ' оставил заявку на звонок, его телефон ' .$phone. ', его email' .$email. '';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Success!';
}
?>