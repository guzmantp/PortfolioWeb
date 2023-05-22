

var project = document.getElementById('Contacto-TitlePurple').textContent;

const basePath = getBasePath(project);
const imgList = getImgPaths(project);
const overlay = document.querySelector('.overlay');
const slideshow = document.querySelector('.slideshow');
const slideshowImg = document.querySelector('.slideshow .image-slideShow');
var imgIndex = 0;


createLayout();


const galeryImgs = document.querySelectorAll('#galery img');

// Agrega a cada imagen un EventListener
Array.from(galeryImgs).forEach(img => {
    img.addEventListener('click', event => {
        imgIndex = parseInt(event.target.dataset.imgIndex);   // Recupera el index insertado en la imagen
        slideshowImg.src = getPath(imgIndex);
        overlay.style.visibility = 'visible';
        overlay.style.opacity = "100%";
    })
})

// Agraga un EventListener en todo el slideShow
slideshow.addEventListener('click', function (event){
    let back = slideshow.querySelector('.btn_slideBack img');
    let next = slideshow.querySelector('.btn_slideNext img');
    let close = slideshow.querySelector('.btn_close img');
    let cont = imgIndex;
    tgt = event.target;        // Almacena donde se ha efectuado el click

    switch(tgt){
        case back:
            imgIndex--;
            if(imgIndex < 0){
                imgIndex = imgList.length - 1;
            }
            slideshowImg.src = getPath(imgIndex);
            break;
        case next:
            imgIndex++;
            if(imgIndex > imgList.length - 1){
                imgIndex = 0;
            }
            slideshowImg.src = getPath(imgIndex);
            break;
        case close:
            overlay.style.visibility = 'hidden';
            overlay.style.opacity = "0%";
            break;
    }
    console.log(imgIndex);
})



function createLayout(){
    var numImg = imgList.length;
    var cont = 0;
    var columns = 4;
    var rows = parseInt(numImg/columns);
    var resto = numImg%columns
    
    for(var i=0;i<columns;i++){
        // Crea el div columna donde van a disponerse las imagenes
        var columnDiv = document.createElement('div');
        columnDiv.setAttribute('class', 'column');
        columnDiv.style.flex = parseInt(100/columns) + "%";
        
        // Itera sobre las filas añafiendo y configurando las imagenes una a una
        for(var k=0;k<rows;k++){
            if(cont < numImg){       // Se comprueba si la imagen que se va a añadir tiene un path para darle en la lista
                var img = document.createElement('img');
                img.setAttribute('src', getPath(cont))
                img.setAttribute('data-img-index', cont);  // Atributo que guarda el indice de la lista
                columnDiv.appendChild(img);
            }
            cont++;
        }

        // Si el reparto de las imagenes disponibles entre las columnas no es exacto
        // se reparte una imagen adicional por columna
        if(resto != 0){
            var img = document.createElement('img');
            img.setAttribute('src', getPath(cont))
            img.setAttribute('imgIndex', cont);      // Atributo que guarda el indice de la lista
            cont++;
            columnDiv.appendChild(img);
            resto--;
        }
        var container = document.getElementById('galery');
        container.appendChild(columnDiv);
    }
    
}


function getPath(index){
    return basePath + imgList[index]
}

function getBasePath(project){
    var basePath = [
        "images/HoodedRP/content/",
        "images/GZProductions/content/"
    ];

    switch (project){
        case 'Hooded RP':
            return basePath[0];
            break;
        case 'Productions':
            return basePath[1];
            break;
    }
}

function getImgPaths(project){

    var hoodedRP = [
        'Animales.png',
        'HoodedRP_R2_001.JPG',
        'GraciasPorTodoZeppelin.png',
        'HoodedRP_R2_004.png',
        'Insta-05-07-2021_001.png',
        'Edificio_de_Trabajo_ConceptArt_001.jpg',
        'Insta-29-06-2021_001.png',
        'HoodedRP_R2_002.jpg',
        'Captura_3.JPG',
        'Insta-29-06-2021_002.png',
        'Insta-30-06-2021_001.png',
        'Logo_Insta.png',
        'HoodedRP_R2_003.png',
        'Insta-03-07-2021_001.png',
        'hoodedrp_gift_icono_discord_FIXED.gif',
        'Logotipos_Propuesta_003.png'
    ];

    var gzProductions = [
        'GZLogo_GreyBG.jpg',
        'GZProductions_PartyMix1_Viewport_001.jpg',
        'GZProductions_PartyMix1_Viewport_002.jpg',
        'GZProductions_PartyMix1_Viewport_003.jpg',
        'GZProductions_PartyMix1_Viewport_004.jpg',
        'GZProductions_PartyMix1_Viewport_005.jpg',
        'GZProductions_PartyMix2_ViewPort_001.jpg',
        'GZProductions_PartyMix2_ViewPort_002.jpg',
        'GZProductions_PartyMix2_ViewPort_003.jpg',
        'GZProductions_PartyMix2_ViewPort_004.jpg',
        'GZProductions2_ScenesPreview.gif',
        'GZProductions1_PubliInsta.gif',
        'GZProductions1_ScenesPreview.gif',
        'GZProductions2_PubliInsta.gif',
        'GZProductions_PartyMix2_ViewPort_005.jpg',
        'GZProductions_PartyMix2_ViewPort_006.jpg',
        'GZProductions_PartyMix2_ViewPort_007.jpg',
        'GZProductions_PartyMix2_ViewPort_008.jpg',
        'Miniatura.jpg',
        'Miniatura_PartyMix2.jpg',
        'GZProductions_PartyMix2_RenderCabezas.jpg',
        'Render_002.2.png',
        'Render_002.png',
        'Render_003.png',
        'Render_Miniatura.jpg',
        'SummerMix2020_Miniatura.jpg',
        'SummerMix2020_Viewport_001.jpg',
        'SummerMix2020_Viewport_002.jpg',
        'SummerMix2020_Viewport_003.jpg',
        'mq1.jpg',
        'mq3 (1).jpg',
        'Render_001.jpg',
        'GZProductions_PArtyMix2_FullEquip_Views.jpg',
        'mq3.jpg',
        'GZProductions_PArtyMix2_FullEquip.jpg',
    ];

    switch (project){
        case 'Hooded RP':
            return hoodedRP;
            break;
        case 'Productions':
            return gzProductions;
            break;
    }

}


