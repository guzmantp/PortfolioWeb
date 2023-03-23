holaText = document.getElementById("mainMenu-hola");
soyText = document.getElementById("mainMenu-soy");
guzmanText = document.getElementById("mainMenu-guzman");

holaText.addEventListener("mouseover", function(){
    holaText.textContent = "Menu 1";
});

soyText.addEventListener("mouseover", function(){
    soyText.textContent = "Menu 2";
});

guzmanText.addEventListener("mouseover", function(){
    guzmanText.textContent = "Menu 3";
});