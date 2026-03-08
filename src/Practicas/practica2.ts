// import { empleado , empleadoTiempoCompleto, empleadorPorHoras} from "./practica2em";



// const empleado1 = new empleado("Juan", "M", 25, 123456);
// console.log(empleado1.trabajar());


// const empleado2 = new empleadoTiempoCompleto("Maria", "F", 30, 654321, 3000);
// console.log(empleado2.CalcularSalarioBase());

// const empleado3 = new empleadorPorHoras("Pedro", "M", 22, 789012, 15, 40);
// console.log(empleado3.CalcularSalarioBase());


// import {CuentaBancaria} from "./practica2em.js"; 

// const cuenta1 = new CuentaBancaria("Juan", 1000);
// cuenta1.depositar(500);
// cuenta1.retirar(200);
// cuenta1.mostrarSaldo();
// console.log(cuenta1);

// import {Persona, Estudiante, Docente} from "./practica2em";
// const persona1 = new Persona("Oscar", 30);
// const estudiante1 = new Estudiante("Chepe", 17);
// const docente1 = new Docente("Vilma", 32);
// console.log(persona1.mostrarRol());
// console.log(estudiante1.mostrarRol());
// console.log(docente1.mostrarRol());

//Ejercicio 3.
// import { ProductoFisico, ProductoDigital } from "./practica2em";
// const productoFisico1 = new ProductoFisico("Laptop", 1500);
// const productoDigital1 = new ProductoDigital("Licencia Windows", 100);
// console.log(`Producto fisico: ${productoFisico1.nombre} - Precio final: ${productoFisico1.calcularPrecioFinal().toFixed(2)}`);
// console.log(`Producto digital: ${productoDigital1.nombre} - Precio final: ${productoDigital1.calcularPrecioFinal().toFixed(2)}`);


import {Figura, Circulo, Rectangulo} from "./practica2em";
const circulo1 = new Circulo(5);
const rectangulo1 = new Rectangulo(6, 8);
console.log(`Área del círculo: ${circulo1.calcularArea().toFixed(2)}`);
console.log(`Área del rectángulo: ${rectangulo1.calcularArea().toFixed(2)}`);






