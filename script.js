var BProyectos = document.querySelector("projects-tab");
var bgimage = document.querySelector("bgimage");

BProyectos.addEventListener("click", proyectos)

function proyectos() {
    bgimage.style.backgroundImage = "url(img/image2.jpg)";
    console.log("projects");
}