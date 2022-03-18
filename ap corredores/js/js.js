function verificar(){
let nombre = document.getElementById("nombre").value;

if (nombre.length < 4){
        alert('El texto tiene que tener más de 4 caracteres');
}

}

function verificarcorreo(){
let correo = document.getElementById("email").value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo))
    {
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
  }

function corredor(){

if (document.getElementById("km")!=null){

}
else{
    var input = document.createElement("input");
    var corredores = document.getElementById("corredores");
    input.type = "number";
    input.id = "km";
    input.placeholder = " Kilometros corridos"

    corredores.appendChild(input);
}
}
function sincorrer(){

if (document.getElementById("km")!=null){
document.getElementById("corredores").removeChild(document.getElementById("km")); 
}

}
function enviar(){

var nombre2 = document.getElementById("nombre").value;
var email2 = document.getElementById("email").value;
var saludo = "Tu nombre es " + nombre2 + " y tu email es " + email2 ;
var ha_corrido = document.getElementById("si").checked;
if (ha_corrido==true){

  var kms = document.getElementById("km").value;

  saludo = saludo + " y has corrido " + kms;
}alert(saludo);

  
}
