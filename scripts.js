console.log(document.title);
//Ejercicio 1: Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
let h2Generation = document.getElementById("gen-1")
h2Generation.innerText = "Generasión 1 Pokimon"

//Ejercicio 2: Cambia el color de fondo de la primera generación de Pokimon.
function changeBackground() {
    let color = document.getElementsByClassName("infocard-list infocard-list-pkmn-lg");
    color[0].style.backgroundColor = "green";
console.log(color);
}
changeBackground()

//Ejercicio 3: Imprime por consola la URL de la página.
let URL = document.URL
console.log(URL);

//Ejercicio 4: Imprime por consola el dominio de la página.
let dominio = location.hostname
console.log(dominio);

//Ejercicio 5: Imprime todos los nodos de imagen.
let imagenesNodo = document.querySelectorAll("img");
console.log(imagenesNodo);

//Ejercicio 6: Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
document.getElementsByClassName("img-fixed img-sprite").src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

//PREMIUM: Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying.

// let color2 = document.getElementsByClassName("infocard-lg-data text-muted");
// color2.style.backgroundColor = "blue";
// console.log(color2);

let arrayNuevo = Array.from(document.getElementsByClassName("infocard-lg-data text-muted").getElementsByClassName("itype flying"))
for(indice in arrayNuevo){
    arrayNuevo[indice].style.backgroundColor = "blue";
}
//(También se puede sustituir getElementsByClassName("infocard-lg-data text-muted").getElementsByClassName por querySelectorAll)

