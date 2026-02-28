// class estudiante { 
//     private  nombre: string;
//    private readonly carnet: string;
//    public notafinal: number;

//     constructor(nombre: string, carnet: string, notafinal: number) {
//         this.nombre = nombre;
//         this.carnet = carnet;
//         this.notafinal = notafinal;
//     }
//     mostrarInformacion(){
//         console.log("Estudiantes: " +this.nombre);
//         console.log("Carnet: " +this.carnet);
//         console.log("Nota final: " +this.notafinal);
//     }
//     actualizarNota(nuevaNota: number): void {
//         this.notafinal = nuevaNota;
//     }
//     actualizarCarnet(nuevoCarnet: string): void {
//         // this.carnet = nuevoCarnet; // Esto causará un error porque 'carnet' es readonly
//         console.log("No se puede actualizar el carnet, es de solo lectura.");
//     }
// }

// const alumno1 = new estudiante("Juan Perez", "U20250111", 8.5);
// alumno1.mostrarInformacion();

// alumno1.actualizarNota(9.2);
// alumno1.mostrarInformacion();


/* Ejercicios de tarea

1. Crear una clase Empleado con los atributos nombre, salarioBase y horasTrabajadas. Implementar un método que calcule el salario total considerando que cada hora trabajada se paga a una tarifa fija.

2. Crear una clase CuentaBancaria con los atributos titular y saldo. Implementar métodos para depositar, retirar y mostrar el saldo actual.

3. Crear una clase Vehiculo con los atributos marca, modelo y año. Implementar un método que muestre la información completa del vehículo.

4. Crear una clase Libro con los atributos titulo, autor y numeroPaginas. Instanciar al menos dos objetos y mostrar la información de cada uno utilizando un método. */

// class producto {
//     nombre: string;
//     precio: number
//     cantidad: number;

//     constructor(nombre: string, precio: number, cantidad: number) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//     }
//     CalcularTotal(): number {
//         if (this.precio < 0 || this.cantidad < 0) {
//             console.log("Error: El precio y la cantidad no pueden ser negativos.");
//             return 0;
//         } else{
//         return this.precio * this.cantidad;
//         }
//     }
//     MostrarDetalles(): void {
//         console.log("Producto: " + this.nombre);
//         console.log("Precio unitario: " + this.precio);
//         console.log("Cantidad: " + this.cantidad);
//         console.log("Total a pagar: " + this.CalcularTotal());
//     }

// }

// const producto1 = new producto("Laptop", 1500, 2);
// producto1.MostrarDetalles();


/* Ejercicio 1 1. Crear una clase Empleado con los atributos nombre, salarioBase y horasTrabajadas. Implementar un método que calcule el salario total considerando que cada hora trabajada se paga a una tarifa fija.
*/

// class empleado {
//     nombre: string;
//     salarioBase: number;
//     horasTrabajadas: number;

//     constructor(nombre: string, salarioBase: number, horasTrabajadas: number) {
//         this.nombre = nombre;
//         this.salarioBase = salarioBase;
//         this.horasTrabajadas = horasTrabajadas;
//     }
//     CalculaSalarioTotal(tarifaHora: number): number {
        
//         if(tarifaHora < 0 || this.horasTrabajadas < 0){
//             console.log("Error: La tarifa por hora y las horas trabajadas no pueden ser negativas.");
//             return 0;
//         } else {
//         return this.salarioBase + (this.horasTrabajadas * tarifaHora);
//         }
//     }
//     mostrarInformacion(): void {
//         console.log("Empleado: " + this.nombre);
//         console.log("Salario base: " + this.salarioBase);
//         console.log("Horas trabajadas: " + this.horasTrabajadas);
//     }
// }

// const empleado1 = new empleado("Maria", 2000, 40);
// empleado1.mostrarInformacion();

/*2. Crear una clase CuentaBancaria con los atributos titular y saldo. Implementar métodos para depositar, retirar y mostrar el saldo actual. */

// class CuentaBancaria {
//     titular: string;
//     saldo: number;

//     constructor(titular: string, saldo: number) {
//         this.titular = titular;
//         this.saldo = saldo;
//     }
//     Depositar(monto: number): void {
//         if (monto < 0) {
//             console.log("Error: El monto a depositar no puede ser negativo.");
//         } else {
//             this.saldo += monto;
//             console.log("Depósito exitoso. Nuevo saldo: " + this.saldo);
//         }
//     }
//     Retirar(monto: number): void {
//         if (monto < 0) {
//             console.log("Error: El monto a retirar no puede ser negativo.");
//         } else if (monto > this.saldo) {
//             console.log("Error: Fondos insuficientes. Saldo actual: " + this.saldo);
//         } else {
//             this.saldo -= monto;
//             console.log("Retiro exitoso. Nuevo saldo: " + this.saldo);
//         }
//     }
//     MostrarSaldo(): void {
//         console.log("Titular: " + this.titular);
//         console.log("Saldo actual: " + this.saldo);
//     }
// }

// const cuenta1 = new CuentaBancaria("Carlos", 5000);
// cuenta1.MostrarSaldo();
// cuenta1.Depositar(1500);
// cuenta1.Retirar(2000);
// cuenta1.Retirar(5000); // Intento de retiro con fondos insuficientes


/* 3. Crear una clase Vehiculo con los atributos marca, modelo y año. Implementar un método que muestre la información completa del vehículo. */

// class Vehiculo {
//     marca: string;
//     modelo: string;
//     año: number;

//     constructor(marca: string, modelo: string, año: number) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.año = año;
//     }
//     MostrarInformacion(): void{
//         console.log("Marca: " + this.marca);
//         console.log("Modelo: " + this.modelo);
//         console.log("Año: " + this.año);
//     }
// }

// const vehiculo1 = new Vehiculo("Toyota", "Corolla", 2010);
// vehiculo1.MostrarInformacion();

/* 4. Crear una clase Libro con los atributos titulo, autor y numeroPaginas. Instanciar al menos dos objetos y mostrar la información de cada uno utilizando un método. */

class Libro {
    titulo: string;
    autor: string;
    numeroPaginas: number;

    constructor(titulo: string, autor: string, numeroPaginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }
    MostrarInformacion(): void {
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Número de páginas: " + this.numeroPaginas);
    }
}

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 417);
const libro2 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 863);
libro1.MostrarInformacion();
console.log("-----------------------------");// lo separe para que se vea mejor la info 
libro2.MostrarInformacion();
