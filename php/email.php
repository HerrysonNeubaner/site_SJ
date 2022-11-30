<?php

if(isset($_POST['email']) && !empty($_POST['email'])){


$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['message']);


$to = "comercial@sjgestao.com.br";
$subject = "Contato - Comercial Site";
$body = "Nome: ".$nome. "\r\n".
        "Email: ".$email. "\r\n".
        "Mensagem: ".$mensagem;

$header = "From:comercial@sjgestao.com.br"."\r\n"
            "Replay-To:".$email."\r\n".
            "X-Mailer:PHP/".phpversion();

mail($to,$subject,$body,$header)


}


?>