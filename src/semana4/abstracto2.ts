// Ejercicio 2 Sistema de Vehículos
// Crear una clase abstracta Vehiculo con el método abstracto mover(). El sistema debe
// permitir al usuario seleccionar entre Carro, Bicicleta o Motocicleta y cada clase debe
// implementar su forma de movimiento.

abstract class Vehiculo {
    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }
    abstract mover(): void;
}

class Carro extends Vehiculo {

    mover(): void {
        console.log("El carro se mueve sobre cuatro ruedas.");
    }
}

class Bicicleta extends Vehiculo {

    mover(): void {
        console.log("La bicicleta se mueve pedaleando.");
    }
}

class Motocicleta extends Vehiculo {

    mover(): void {
        console.log("La motocicleta se mueve con un motor de dos ruedas.");
    }
}

const carro = new Carro("Carro");
carro.mover();

const bicicleta = new Bicicleta("Bicicleta");
bicicleta.mover();

const motocicleta = new Motocicleta("Motocicleta");
motocicleta.mover();