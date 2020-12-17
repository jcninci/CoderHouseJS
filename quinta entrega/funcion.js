function usuario (user, pass){
    this.user = user;
    this.pass = pass;
}

let user = prompt ('ingrese su nombre de Usuario');
let pass = prompt ('ingrese su Contraseña'); 

let usuarioReciente = new usuario (user,pass);
console.log (usuarioReciente);

alert ('Bienvenido ${usuarioReciente.user}. gracias por volver!');
console.log ('usuario Activo: ${usuarioReciente.user}');

function pelicula (titulo, director, actorPrincipal, estreno){
    this.titulo = titulo;
    this.director = director;
    this.actorPrincipal = actorPrincipal;
    this.estreno = estreno;
}


let pelicula1 = new pelicula ("titanic" , "Cameron" , "diCaprio" , 1997);
let pelicula2 = new pelicula ("Perros De La Calle" , "Tarantino" , "Madsen" , 1992);