const holaText = document.getElementById("mainMenu-hola");
const soyText = document.getElementById("mainMenu-soy");
const guzmanText = document.getElementById("mainMenu-guzman");
const resaltado = document.getElementById("cuadroBlancoResaltado")
var button = document.getElementById("menu-button");
var cuadro = document.getElementById("cuadroBlanco");

function refresh(){
    cuadro.style.top = (getDistanceFromTop(guzmanText) + 10) + "px";
}

function getDistanceFromTop(element) {
    let distance = 0;

    while (element) {
        distance += element.offsetTop;
        element = element.offsetParent;
    }

    return distance;
}

function changeText(){
    console.log(window.getComputedStyle(button).display)
    if(window.getComputedStyle(button).display == "none"){
        console.log("dentro");

        window.onload = function(){
    
            holaText.onmouseover = function(){
                holaText.textContent = 'Proyectos';
                resaltado.style.top = (getDistanceFromTop(holaText) + 25) + "px";
                resaltado.style.backgroundImage = "linear-gradient(to right, #ffffff00, #ffffff 50%, #ffffff00 90%)";
            };
        
            holaText.onmouseout = function(){
                holaText.innerHTML = 'Hola';
                resaltado.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
            };
        
            soyText.onmouseover = function(){
                soyText.textContent = "Sobre mí";
                resaltado.style.top = (getDistanceFromTop(soyText) + 15) + "px";
                resaltado.style.backgroundImage = "linear-gradient(to right, #ffffff00, #ffffff 50%, #ffffff00 90%)";
            };
        
            soyText.onmouseout = function(){
                soyText.innerHTML = 'Soy';
                resaltado.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
            };
        
            guzmanText.onmouseover = function(){
                guzmanText.textContent = 'Mi mundo';
            };
        
            guzmanText.onmouseout = function(){
                guzmanText.innerHTML = 'Guzmán';
            };
        }
    }else{
        holaText.innerHTML = 'Hola';
        guzmanText.textContent = 'Mi mundo';
        guzmanText.innerHTML = 'Guzmán';
    }
}


refresh()
changeText()



window.addEventListener("resize", refresh);
window.addEventListener("resize", changeText);






