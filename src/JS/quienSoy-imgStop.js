window.addEventListener("scroll", function(){
    var table = this.document.getElementById("table-container").getBoundingClientRect().top;
    var scrollTop = this.window.pageYOffset || this.document.documentElement.scrollTop;
    var foto = document.getElementById("fotoMia-Container");

    if (scrollTop + 100 >= table) {
        foto.style.position = "absolute";
        foto.style.bottom = "0";
    } else {
        foto.style.position = "fixed";
    }
});