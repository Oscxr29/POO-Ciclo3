// EJERCICIO 1 - PROBLEMA REDACTADO
// Una empresa de transporte quiere saber cuánto tarda un viaje de 120 km según el tipo de vehículo: Auto, Bicicleta y Bus.
// Todos pertenecen a la categoría Vehículo, pero cada uno viaja a diferente velocidad; se pide aplicar polimorfismo para calcular e imprimir el tiempo de viaje.

abstract class Vehiculo {
	constructor(public marca: string) {}

	// Metodo comun que cada tipo de vehiculo implementa a su manera.
	abstract calcularTiempo(distanciaKm: number): number;
}

class Auto extends Vehiculo {
	override calcularTiempo(distanciaKm: number): number {
		return distanciaKm / 80;
	}
}

class Bicicleta extends Vehiculo {
	override calcularTiempo(distanciaKm: number): number {
		return distanciaKm / 20;
	}
}

class Bus extends Vehiculo {
	override calcularTiempo(distanciaKm: number): number {
		return distanciaKm / 50;
	}
}

function imprimirTiempoViaje(vehiculo: Vehiculo, distanciaKm: number): void {
	const tiempo = vehiculo.calcularTiempo(distanciaKm);
	console.log(`Marca: ${vehiculo.marca} | Tiempo estimado: ${tiempo.toFixed(2)} horas`);
}

console.log("\n EJERCICIO 1: RESULTADOS");
const distanciaKm = 120;

const vehiculo1: Vehiculo = new Auto("Toyota");
const vehiculo2: Vehiculo = new Bicicleta("Trek");
const vehiculo3: Vehiculo = new Bus("Mercedes");

imprimirTiempoViaje(vehiculo1, distanciaKm);
imprimirTiempoViaje(vehiculo2, distanciaKm);
imprimirTiempoViaje(vehiculo3, distanciaKm);


// EJERCICIO 2 - PROBLEMA REDACTADO
// Un sistema escolar necesita enviar un aviso por diferentes medios: Email, SMS y Push.
// Todos son tipos de Notificación, pero cada canal muestra el mensaje de forma distinta; se pide aplicar polimorfismo para enviar el mismo aviso y mostrar resultados en consola.


abstract class Notificacion {
	constructor(public destinatario: string) {}

	// Metodo comun que cada canal implementa de forma diferente.
	abstract enviar(mensaje: string): void;
}

class Email extends Notificacion {
	override enviar(mensaje: string): void {
		console.log(`Email a ${this.destinatario}: ${mensaje}`);
	}
}

class SMS extends Notificacion {
	override enviar(mensaje: string): void {
		console.log(`SMS a ${this.destinatario}: ${mensaje}`);
	}
}

class Push extends Notificacion {
	override enviar(mensaje: string): void {
		console.log(`Push a ${this.destinatario}: ${mensaje}`);
	}
}

function enviarAviso(canal: Notificacion, mensaje: string): void {
	canal.enviar(mensaje);
}

console.log("\n EJERCICIO 2 / RESULTADOS ");
const aviso = "Recuerda entregar tu tarea hoy.";

const canalEmail: Notificacion = new Email("ana@correo.com");
const canalSMS: Notificacion = new SMS("+50370000000");
const canalPush: Notificacion = new Push("UsuarioApp01");

enviarAviso(canalEmail, aviso);
enviarAviso(canalSMS, aviso);
enviarAviso(canalPush, aviso);


