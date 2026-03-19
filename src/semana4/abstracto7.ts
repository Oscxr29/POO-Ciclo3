// ejercicio 7 Sistema de Transporte
// Crear una clase abstracta Transporte con el método calcularCosto(). El usuario
// seleccionará entre Taxi, Autobús o Uber e ingresará la distancia recorrida para calcular el
// costo del viaje.

abstract class Transporte {
    distancia: number;

    constructor(distancia: number) {
        this.distancia = distancia;
    }

    abstract calcularCosto(): number; // para calcular el costo del viaje según el tipo de transporte y la distancia recorrida
}

class Taxi extends Transporte {
    calcularCosto(): number {
        return this.distancia * 1.5; 
    }
}

class Autobus extends Transporte {
    calcularCosto(): number {
        return this.distancia * 0.5; 
    }
}

class Uber extends Transporte {
    calcularCosto(): number {
        return this.distancia * 2; 
    }
}

function crearTransporte(opcion: number, distancia: number): Transporte {
    switch (opcion) {
        case 1: return new Taxi(distancia);
        case 2: return new Autobus(distancia);
        case 3: return new Uber(distancia);
        default: throw new Error("Opción no válida. Usa 1, 2 o 3.");
    }
}

const DistanciaRecorrida = 125; // distancia de prueba para calcular el costo del viaje con los diferentes tipos de transporte
const opcionesTransporte = [1, 2, 3]; // prueba con los tres tipos de transporte: 1=Taxi, 2=Autobús, 3=Uber

for (const opcion of opcionesTransporte){
    const transporte = crearTransporte(opcion, DistanciaRecorrida); 
    console.log(`Transporte: ${transporte.constructor.name}, Distancia: ${transporte.distancia} km, Costo: $${transporte.calcularCosto().toFixed(2)}`); 
}



