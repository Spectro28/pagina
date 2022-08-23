function iniciarsesion(){
    var usuario,clave;
    usuario=document.getElementById("usuario").value;
    clave=document.getElementById("clave").value;
    if(usuario=="admin@gmail.com" && clave=="123"){
        window.location="./dashboard.html";
    }
    else{
        alert("El usuario o contraseña es incorrecto");
    }
}