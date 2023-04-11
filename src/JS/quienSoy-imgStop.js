document.addEventListener("DOMContentLoaded", function () {
   const fotoMiaContainer = document.getElementById("fotoMia-Container");
   const leftContainer = document.getElementById("left-container");
   
   window.addEventListener("scroll", function () { 
     const scroll = (window.pageYOffset || document.documentElement.scrollTop);
      
    if(scroll + this.window.innerHeight  >= leftContainer.offsetHeight){
      fotoMiaContainer.style.position = "absolute";
    }else{
      fotoMiaContainer.style.position = "fixed";
    }
   });
 });
 





 