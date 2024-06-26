


let iconMenuOpen = document.querySelector('#icon-menu');
let iconMenuClose = document.querySelector('#icon-close-menu');
let menu = document.querySelector('.menu') 

/* ------------------------ */
/* Eventos *
/* ------------------------ */

iconMenuOpen.addEventListener('click', closeOpen);
iconMenuClose.addEventListener('click', closeOpen);

//Con la propiedad documnet podemos usar el body
document.addEventListener('click', function(event){
    if(menu.classList.contains('menu-animation')){
        if(event.target !== iconMenuOpen && event.target !== iconMenuOpen){ 
               closeOpen()
    }}
    });


/* ------------------------ */
/* Funciones */
/* ------------------------ */

function closeOpen (){
    menu.classList.toggle('menu-animation');
}