document.addEventListener('DOMContentLoaded', function(){

/* Seleccionar elementos de la interfaz */

const enlace1 = document.querySelector("#btn1");
const enlace2 = document.querySelector("#btn2");
const enlace3 = document.querySelector("#btn3");
const enlace4 = document.querySelector("#btn4");

/* eventos */

enlace1.addEventListener("click", mostrar)
enlace2.addEventListener("click", mostrar)
enlace3.addEventListener("click", mostrar)
enlace4.addEventListener("click", mostrar)



function mostrar(e){
    console.log(e.target.classList)
    if(e.target.parentElement.nextElementSibling.classList.contains("activo")){
        e.target.parentElement.nextElementSibling.classList.add("desactivo");
        e.target.parentElement.nextElementSibling.classList.remove("activo");
        

        e.target.classList.remove("elemento__boton-minus");
        e.target.classList.add("elemento__boton-plus");
    }
    else{
        e.target.parentElement.nextElementSibling.classList.add("activo");
        e.target.parentElement.nextElementSibling.classList.remove("desactivo");

        
        e.target.classList.add("elemento__boton-minus");
        e.target.classList.remove("elemento__boton-plus");
    }
}






})