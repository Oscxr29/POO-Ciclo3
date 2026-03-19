// Ejercicio 4 Sistema de Empleados
// Crear una clase abstracta Empleado con el método calcularSalario(). El sistema debe
// permitir registrar empleados por horas, empleados fijos y empleados por comisión. Cada
// tipo de empleado debe implementar su propio cálculo de salario.

abstract class Empleado {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract calcularSalario(): number;
}

class EmpleadoPorHoras extends Empleado {
    horasTrabajadas: number;
    tarifaPorHora: number;

    constructor(nombre: string, horasTrabajadas: number, tarifaPorHora: number) {
        super(nombre);
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }

    calcularSalario(): number {
        return this.horasTrabajadas * this.tarifaPorHora;
    }
}

class EmpleadoFijo extends Empleado {
    salarioMensual: number;

    constructor(nombre: string, salarioMensual: number) {
        super(nombre);
        this.salarioMensual = salarioMensual;
    }

    calcularSalario(): number {
        return this.salarioMensual;
    }
}

class EmpleadoPorComision extends Empleado {
    ventasTotales: number;
    porcentajeComision: number;

    constructor(nombre: string, ventasTotales: number, porcentajeComision: number) {
        super(nombre);
        this.ventasTotales = ventasTotales;
        this.porcentajeComision = porcentajeComision;
    }

    calcularSalario(): number {
        return this.ventasTotales * this.porcentajeComision / 100;
    }
}

const empleado1 = new EmpleadoPorHoras("Carlos", 40, 10);
const empleado2 = new EmpleadoFijo("Ana", 1800);
const empleado3 = new EmpleadoPorComision("Luis", 5000, 8);

console.log("Empleado:", empleado1.nombre);
console.log("Salario:", empleado1.calcularSalario());


console.log("Empleado:", empleado2.nombre);
console.log("Salario:", empleado2.calcularSalario());


console.log("Empleado:", empleado3.nombre);
console.log("Salario:", empleado3.calcularSalario());






