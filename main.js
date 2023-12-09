var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;

var emailContent = "Имя: " + name + "" + "Email: " + email + "" +"Сообщение: " + message;
window.open("mailto:denisdevofficial@gmail.com?subject=Новое сообщение&body=" + emailContent);