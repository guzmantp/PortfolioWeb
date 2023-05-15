var button = document.getElementById("menu-button");
var menu = document.getElementById('menu');
var menuDisplay = false;
var rs = menu.querySelectorAll("ul li a img");

const logos = [
    "Linkedin_FullLogo.png",
    "Instagram_FullLogo.png"
];
const iconos = [
    "Linkedin_Icon.png",
    "Instagram_icon.png"
];

var ruta = rs[0].src;

function logoReplace(){
    if(window.getComputedStyle(button).display == "none"){
        for(var i=0; i<rs.length; i++){
            rs[i].src = ruta + iconos[i];
        }
    }else{
        for(var i=0; i<rs.length; i++){
            rs[i].src = ruta + logos[i]; 
        }
    }
}

logoReplace();
window.addEventListener("resize", logoReplace);

button.addEventListener("click", function(){
    if(menuDisplay){
        menu.style.display = "none";
        menuDisplay = false;
    }else{
        menu.style.display = "block";
        menuDisplay = true;
    }
});






