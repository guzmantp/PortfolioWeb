const holaText = document.getElementById("mainMenu-hola");
const soyText = document.getElementById("mainMenu-soy");
const guzmanText = document.getElementById("mainMenu-guzman");
const resaltado = document.getElementById("cuadroBlancoResaltado")

window.onload = function(){

    holaText.onmouseover = function(){
        holaText.textContent = 'Proyectos';
        resaltado.style.top = "23%"
        resaltado.style.backgroundImage = "linear-gradient(to right, #ffffff00, #ffffff 50%, #ffffff00 90%)"
    };

    holaText.onmouseout = function(){
        holaText.innerHTML = 'Hola';
        resaltado.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))"
    };

    soyText.onmouseover = function(){
        soyText.textContent = "Sobre mí";
        resaltado.style.top = "42%"
        resaltado.style.backgroundImage = "linear-gradient(to right, #ffffff00, #ffffff 50%, #ffffff00 90%)"
    };

    soyText.onmouseout = function(){
        soyText.innerHTML = 'Soy';
        resaltado.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))"
    };

    guzmanText.onmouseover = function(){
        guzmanText.textContent = 'Mi mundo';
    };

    guzmanText.onmouseout = function(){
        guzmanText.innerHTML = 'Guzmán';
    };
}

