function libro(titulo, autor, editorial, precio) {
    this.titulo = titulo;
 function libro(titulo, autor, editorial, precio) {
    this.precio = precio;
}

let libro1 = new libro("Cartero", "Charles Bukowski", "Anagrama", 700);
let libro2 = new libro("Viajes por el Scriptorum", "Pual Auster", "Anagrama", 700);
let libro3 = new libro("sombra del viento", "carlos ruiz zafon" , 700)

let carrito = [];


/* ===== Simulador Agregar ===== */

let agrega = prompt(`Desea agregar un producto? (si/no)`);

while (agrega.toLowerCase() === "si") {

    const seleccion = prompt(`Que Libro desea comprar? Elija 1, 2 o 3.`);
    switch(seleccion) {
        case "1":
            carrito.push(libro1);
            agrega = prompt(`Desea agregar otro producto? (si/no)`);
            break;
        case "2":
            carrito.push(libro2);
            agrega = prompt(`Desea agregar otro producto? (si/no)`);
            break;
        case "3":
            carrito.push(libro2);
            agrega = prompt(`Desea agregar otro producto? (si/no)`);
            break;
        default:
            alert(`Valor ingresado Incorrecto. Por favor, intentelo nuevamente`);
            break;
}

}
console.log(carrito)

