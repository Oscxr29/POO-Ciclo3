import { error } from "node:console";

// type generoEmpleado = "M" | "F";

// export class empleado {
//     nombre: string;
//     genero: generoEmpleado;
//     edad: number;
//     numeroEmpleado: number;

//     constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number) {
//         this.nombre = nombre;
//         this.genero = genero;
//         this.edad = edad;
//         this.numeroEmpleado = numeroEmpleado;
//     }

//     trabajar(): string{
//         return "trabaja 8 horas al dia";
//     }

//     private validarDatos(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number): boolean {
//         if (nombre.trim().length < 3) {
//             throw new Error('El nombre debe tener al menos 3 caracteres');
//         }
//         if (genero !== "M" && genero !== "F") {
//             throw new Error('El género debe ser M o F');
//         }
//         if (edad < 18) {
//             throw new Error('La edad debe ser mayor a 18 años');
//         }
//         if (numeroEmpleado <= 100000) {
//             throw new Error('El número de empleado debe ser un número positivo');
//         }
//         return true;
//     }

// }

// // empleado de tiempo completo 

// export class empleadoTiempoCompleto extends empleado {
//     salarioMensual: number;

//     constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number, salarioMensual: number) {
//         super(nombre, genero, edad, numeroEmpleado);
//         this.salarioMensual = salarioMensual;
//     }
//     CalcularSalarioBase(): number {
//         return this.salarioMensual;
//     }
// }


// empleado por horas 

// export class empleadorPorHoras extends empleado {
//     tarifaHora: number;
//     horasTrabajadas: number;

//     constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number, tarifaHora: number, horasTrabajadas: number) {
//         super(nombre, genero, edad, numeroEmpleado);
//         this.tarifaHora = tarifaHora;
//         this.horasTrabajadas = horasTrabajadas;
//     }
//     CalcularSalarioBase(): number {
//         return this.tarifaHora * this.horasTrabajadas;
//     }
// }


/* Enunciado:

Modelar un sistema de transporte.

Crear una clase base Vehiculo con:

marca
modelo
anio
Validaciones:

El año no puede ser mayor al año actual.
Marca y modelo no pueden estar vacíos.
Crear dos clases hijas:

Automovil (atributo: numeroPuertas)
Motocicleta (atributo: cilindrada)
Cada clase debe tener un método mostrarInformacion().

Instanciar al menos un objeto de cada tipo y mostrar sus datos.*/

//Ejercicio 1.

// export class CuentaBancaria {
//     titular: string
//     private saldo: number;

//     constructor(titular: string, saldo: number) {
//         this.titular = titular;
//         this.saldo = saldo;
//     }
//     depositar(monto: number): void {
//         if (monto > 0) {
//             this.saldo += monto;
//         } else {
//             console.log("Monto inválido");
//         }
//     }
//     retirar(monto: number): void {
//         if (monto > 0 && monto <= this.saldo) {
//             this.saldo -= monto;
//         } else {
//             console.log("Monto inválido o fondos insuficientes");
//         }
//     }
//     mostrarSaldo(): number {
//         return this.saldo;
//     }
// }

// Ejercicio 2.
// export class Persona {
//     nombre: string;
//     edad: number;
//     constructor(nombre: string, edad: number) {

//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     mostrarRol(): string {
//         return "Soy una persona";
//     }
//     validarEdad(): void {
//         if (this.edad <= 0) {
//             console.log("La edad debe ser mayor a 0");
//         }
//     }
// }
// export class Estudiante extends Persona {
//     constructor(nombre: string, edad: number) {
//         super(nombre, edad);
//     }
//     mostrarRol(): string {
//         return "Soy un estudiante";
//     }
// }
// export class Docente extends Persona {
//     constructor(nombre: string, edad: number) {
//         super(nombre, edad);
//     }
//     mostrarRol(): string {
//         return "Soy un docente";
//     }
// }

// export class Producto {
//     nombre: string;
//     precio: number;

//     constructor(nombre: string, precio: number) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }

//     calcularPrecioFinal(): number {
//         return this.precio;
//     }
//     validarPrecio(): void {
//         if (this.precio <= 0) {
//             console.log("El precio debe ser mayor a 0");
//         }
// }
// }
// export class ProductoDigital extends Producto {
//     constructor(nombre: string, precio: number) {
//         super(nombre, precio);
//     }
// }
// export class ProductoFisico extends Producto {
//     constructor(nombre: string, precio: number) {
//         super(nombre, precio);
//     }
//     calcularPrecioFinal(): number {
//         return this.precio * 1.15;
//     }
// }

// Ejercicio 4.

export class Figura {
    calcularArea(): number {
        alert("Método no implementado");
        return 0;
    }

}
export class Rectangulo extends Figura {
    base: number;
    altura: number;
    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea(): number {
        if (this.base > 0 && this.altura > 0) {
            return this.base * this.altura;
        } else {
            console.log("Las dimensiones deben ser mayores a 0");
            return 0;
        }
    }
}
export class Circulo extends Figura {
    radio: number;
    constructor(radio: number) {
        super();
        this.radio = radio;
    }
    calcularArea(): number {
        if (this.radio > 0) {
            return Math.PI * Math.pow(this.radio, 2);
        } else {
            console.log("El radio debe ser mayor a 0");
            return 0;
        }
    }
}


