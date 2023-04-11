window.addEventListener("scroll", function(){
   var leftCont = this.document.getElementById("left-container");
   var leftContHeight = leftCont.offsetHeight;
   var foto = this.document.getElementById("fotoMia-Container");
   var fotodistance = foto.offsetTop;

   console.log("-------------------------");
   console.log("leftContHeight: " + leftContHeight);
   console.log("fotoDistance " + fotodistance);

   if(leftContHeight >= fotodistance){
    leftCont.style.position = "absolute";
   }else{
    leftCont.style.position = "fixed";
   };
    
    
});