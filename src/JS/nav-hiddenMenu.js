var button = document.getElementById("menu-button");
var menu = document.getElementById('menu');
var menuDisplay = false;
var rs = menu.querySelectorAll("ul li a img");
var indexMenu = document.getElementById("indexMenu");

logos = [
    "Linkedin_FullLogo.png",
    "Instagram_FullLogo.png"
];
iconos = [
    "Linkedin_Icon.png",
    "Instagram_icon.png"
];




if(window.getComputedStyle(button).display == "none"){
    for(var i=0; i<rs.length; i++){
        rs[i].src = rs[i].src + iconos[i];
    }

    indexMenu.innerHTML = '<ul><li><a id="mainMenu-hola" href="src/proyectos.html">Hola</a></li><li><a id="mainMenu-soy" href="src/sobreMi.html">Soy</a></li><li><a id="mainMenu-guzman" href="src/miMundo.html">Guzmán</a></li></ul>';

    console.log("ordenador");


}else{
    for(var i=0; i<rs.length; i++){
        rs[i].src = rs[i].src + logos[i]; 
    }

    indexMenu.innerHTML = '<ul><li><p id="mainMenu-hola" href="src/proyectos.html">Hola</p></li><li><p id="mainMenu-soy" href="src/sobreMi.html">Soy</p></li><li><p id="mainMenu-guzman" href="src/miMundo.html">Guzmán</p></li></ul>';

    console.log("movil");

}



button.addEventListener("click", function(){
    if(menuDisplay){
        menu.style.display = "none";
        menuDisplay = false;
    }else{
        menu.style.display = "block";
        menuDisplay = true;
    }
});






