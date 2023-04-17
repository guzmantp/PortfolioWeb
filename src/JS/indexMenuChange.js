var indexMenu = document.getElementById("indexMenu");

if(window.getComputedStyle(button).display == "none"){
    indexMenu.innerHTML = '<ul><li><a id="mainMenu-hola" href="src/proyectos.html">Hola</a></li><li><a id="mainMenu-soy" href="src/sobreMi.html">Soy</a></li><li><a id="mainMenu-guzman" href="src/miMundo.html">Guzmán</a></li></ul>';
}else{
    indexMenu.innerHTML = '<ul><li><p id="mainMenu-hola" href="src/proyectos.html">Hola</p></li><li><p id="mainMenu-soy" href="src/sobreMi.html">Soy</p></li><li><p id="mainMenu-guzman" href="src/miMundo.html">Guzmán</p></li></ul>';
}