import * as readline from "readline";

abstract class Bloque {
	constructor(
		public readonly tipoBloque: string,
		public readonly dureza: number,
		public readonly recursoQueEntrega: string
	) {}

	romper(): string {
		console.log(this.mensajeAlRomperse());
		return this.recursoQueEntrega;
	}

	abstract mensajeAlRomperse(): string;
}

class BloqueHierro extends Bloque {
	constructor() {
		super("Hierro", 3, "Mena de hierro");
	}

	mensajeAlRomperse(): string {
		return "El bloque de hierro se rompe con un sonido metalico.";
	}
}

class BloqueOro extends Bloque {
	constructor() {
		super("Oro", 4, "Mena de oro");
	}

	mensajeAlRomperse(): string {
		return "El bloque de oro brilla antes de romperse.";
	}
}

class BloqueDiamante extends Bloque {
	constructor() {
		super("Diamante", 6, "Diamante");
	}

	mensajeAlRomperse(): string {
		return "El bloque de diamante estalla en fragmentos cristalinos.";
	}
}

class BloqueObsidiana extends Bloque {
	constructor() {
		super("Obsidiana", 8, "Fragmento de obsidiana");
	}

	mensajeAlRomperse(): string {
		return "La obsidiana se quiebra lentamente con un eco profundo.";
	}
}

class BloqueEsmeralda extends Bloque {
	constructor() {
		super("Esmeralda", 5, "Esmeralda");
	}

	mensajeAlRomperse(): string {
		return "La esmeralda desprende un destello verde al romperse.";
	}
}

class BloqueCarbon extends Bloque {
	constructor() {
		super("Carbon", 2, "Carbon");
	}

	mensajeAlRomperse(): string {
		return "El bloque de carbon se desmorona facilmente.";
	}
}

class Pico {
	constructor(
		public readonly material: string,
		public readonly poderDeMineria: number
	) {}

	intentarMinar(bloque: Bloque): { exito: boolean; recurso?: string; mensaje: string } {
		if (this.poderDeMineria < bloque.dureza) {
			return {
				exito: false,
				mensaje: `Tu pico de ${this.material} no tiene poder suficiente para minar ${bloque.tipoBloque}.`
			};
		}

		return {
			exito: true,
			recurso: bloque.romper(),
			mensaje: `Mineria exitosa: ${bloque.tipoBloque} fue minado con pico de ${this.material}.`
		};
	}
}

class Jugador {
	public inventario: Map<string, number> = new Map<string, number>();

	constructor(public readonly nombre: string, public pico: Pico) {}

	cambiarPico(nuevoPico: Pico): void {
		this.pico = nuevoPico;
		console.log(`${this.nombre} ahora usa pico de ${nuevoPico.material}.`);
	}

	minarBloque(bloque: Bloque): void {
		console.log(`\n${this.nombre} intenta minar bloque de ${bloque.tipoBloque}...`);
		const resultado = this.pico.intentarMinar(bloque);
		console.log(resultado.mensaje);

		if (resultado.exito && resultado.recurso) {
			this.agregarAlInventario(resultado.recurso);
			console.log(`Recurso obtenido: ${resultado.recurso}`);
		}
	}

	mostrarInventario(): void {
		console.log("\n=== Inventario final ===");

		if (this.inventario.size === 0) {
			console.log("Inventario vacio.");
			return;
		}

		this.inventario.forEach((cantidad, recurso) => {
			console.log(`- ${recurso}: ${cantidad}`);
		});
	}

	private agregarAlInventario(recurso: string): void {
		const actual = this.inventario.get(recurso) ?? 0;
		this.inventario.set(recurso, actual + 1);
	}
}

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function preguntar(texto: string): Promise<string> {
	return new Promise((resolve) => {
		rl.question(texto, (respuesta) => resolve(respuesta.trim()));
	});
}

async function seleccionarOpcion<T>(
	titulo: string,
	opciones: T[],
	label: (opcion: T) => string
): Promise<T> {
	while (true) {
		console.log(`\n${titulo}`);
		opciones.forEach((opcion, indice) => {
			console.log(`${indice + 1}. ${label(opcion)}`);
		});

		const entrada = await preguntar("Selecciona una opcion: ");
		const indice = Number(entrada);

		if (Number.isInteger(indice) && indice >= 1 && indice <= opciones.length) {
			return opciones[indice - 1] as T;
		}

		console.log("Opcion invalida. Intenta de nuevo.");
	}
}

async function ejecutar(): Promise<void> {
	console.log("=== Sistema de mineria POO ===");

	const nombreIngresado = await preguntar("Ingresa tu nombre: ");
	const nombreJugador = nombreIngresado.length > 0 ? nombreIngresado : "Jugador";

	const picosDisponibles: Pico[] = [
		new Pico("madera", 1),
		new Pico("piedra", 3),
		new Pico("hierro", 5),
		new Pico("diamante", 8)
	];

	const picoInicial = picosDisponibles[0] ?? new Pico("madera", 1);
	const jugador = new Jugador(nombreJugador, picoInicial);

	console.log(`\nBienvenido, ${jugador.nombre}. Comienzas con pico de madera.`);

	const fabricasBloques: Array<() => Bloque> = [
		() => new BloqueHierro(),
		() => new BloqueOro(),
		() => new BloqueDiamante(),
		() => new BloqueObsidiana(),
		() => new BloqueEsmeralda(),
		() => new BloqueCarbon()
	];

	for (let intento = 1; intento <= 3; intento++) {
		console.log(`\n--- Interaccion de mineria ${intento} de 3 ---`);

		const quiereCambiar = await preguntar("Deseas cambiar de pico? (s/n): "); // Pregunta al usuario si desea cambiar de pico antes de cada intento de minería
		if (quiereCambiar.toLowerCase() === "s") {
			const picoElegido = await seleccionarOpcion( // Si el usuario decide cambiar de pico, se muestra la lista de picos disponibles para elegir
				"Elige un pico:",
				picosDisponibles,
				(pico) => `${pico.material} (poder ${pico.poderDeMineria})`
			);
			jugador.cambiarPico(picoElegido);
		}

		const bloqueElegido = await seleccionarOpcion(
			"Elige un bloque para minar:",
			fabricasBloques,
			(fabrica) => {
				const bloque = fabrica();
				return `${bloque.tipoBloque} (dureza ${bloque.dureza}, recurso ${bloque.recursoQueEntrega})`;
			}
		);

		jugador.minarBloque(bloqueElegido());
	}

	jugador.mostrarInventario();
	rl.close();
}

ejecutar().catch((error) => { // Manejo de errores en la ejecución de la función principal
	console.error("Ocurrio un error en la ejecucion:", error);
	rl.close();
});

