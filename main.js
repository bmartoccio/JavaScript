const nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
const contrasenia = prompt("Ingrese su contraseña:")

console.log("Datos ingresados:")
console.log(nombre, edad, contrasenia);

if (nombre === "") {
    console.log("El nombre no puede estar vacio");
} else if (edad < 18){
    console.log("Acceso denegado, debe ser mayor de edad")
} else if (contrasenia.length < 6){
    console.log("Contraseña invalida")
} else{
    console.log(`Bienvenido ${nombre} de ${edad} años`);


    let edad_10 = edad + 10;
    console.log(`En 10 años tendras ${edad_10} años`);

    console.log(`Usuario: ${nombre} - Edad: ${edad} - Edad en 10 años ${edad_10}`);
}