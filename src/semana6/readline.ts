// Ejercicio 1: Crear un código que solicite el sueldo de una persona y si es mayor de
// $500.00 brindar una tarjeta de crédito de $700, si es mayor a $800 una tarjeta de
// $1100 y si es mayor de $1300 una tarjeta de $2500.


// import * as readline from "readline";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// abstract class Persona {
//   protected sueldo: number = 0;

//   abstract evaluarCredito(): void;
// }

// class Cliente extends Persona {
//   pedirSueldo(): void {
//     rl.question("\nIngrese su sueldo: ", (dato) => {
//       this.sueldo = parseFloat(dato);
//       this.evaluarCredito();
//       rl.close();
//     });
//   }

//   evaluarCredito(): void {
//     console.log(`\nSueldo ingresado: $${this.sueldo}`);

//     if (this.sueldo > 1300) {
//       console.log("Tarjeta aprobada por $2500");
//     } else if (this.sueldo > 800) {
//       console.log("Tarjeta aprobada por $1100");
//     } else if (this.sueldo > 500) {
//       console.log("Tarjeta aprobada por $700");
//     } else {
//       console.log("No aplica para tarjeta de credito");
//     }
//   }
// }

// const cliente1 = new Cliente();
// cliente1.pedirSueldo();

// Ejercicio 2: Desarrolle la solución para un módulo de sistema que permite que niños
// de 8 años digiten 3 colores y mostrar la combinación que estos hacen dejar que solo
// se muestren 5 combinaciones.

// import * as readline from "readline";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// abstract class SistemaColores {
//   protected colores: string[] = [];

//   abstract pedirColores(): void;
//   abstract mezclarColores(): void;
// }

// class JuegoColores extends SistemaColores {
  // Solo 5 combinaciones permitidas
//   private combinaciones: { [key: string]: string } = {
//     "rojo-azul": "morado",
//     "azul-amarillo": "verde",
//     "rojo-amarillo": "naranja",
//     "rojo-verde": "marrón",
//     "negro-blanco": "gris"
//   };

//   pedirColores(): void {
//     this.colores = [];

//     const pedir = (i: number) => {
//       if (i < 3) {
//         rl.question(`Ingrese el color ${i + 1}: `, (color) => {
//           this.colores.push(color.trim().toLowerCase());
//           pedir(i + 1);
//         });
//       } else {
//         this.mezclarColores();
//         rl.close();
//       }
//     };

//     pedir(0);
//   }

//   mezclarColores(): void {
//     console.log("\nColores ingresados:", this.colores);

//     const resultados: string[] = [];

    // Se comparan todos los pares posibles de 3 colores
//     for (let i = 0; i < this.colores.length; i++) {
//       for (let j = i + 1; j < this.colores.length; j++) {
//         const c1 = this.colores[i];
//         const c2 = this.colores[j];

//         const clave1 = `${c1}-${c2}`;
//         const clave2 = `${c2}-${c1}`;

//         if (this.combinaciones[clave1]) {
//           resultados.push(`${c1} + ${c2} = ${this.combinaciones[clave1]}`);
//         } else if (this.combinaciones[clave2]) {
//           resultados.push(`${c1} + ${c2} = ${this.combinaciones[clave2]}`);
//         } else {
//           resultados.push(`${c1} + ${c2} = sin combinación`);
//         }
//       }
//     }

//     console.log("\nResultados de mezcla:");
//     resultados.forEach((r) => console.log(r));
//   }
// }

// const juego = new JuegoColores();
// juego.pedirColores();

// Ejercicio 3: Desarrollar un algoritmo que permita manejar una tarjeta de crédito, que
// cuando se inicie, el saldo sea de $3000.00 y preguntar, digite el monto de la transacción
// e írselo restando, el programa se debe de cerrar solo si el cliente finaliza o se queda a
// 0 la cuenta de lo contrario siempre preguntar digite el monto de la transacción.


// import * as readline from "readline";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// abstract class Tarjeta {
//   protected saldo: number;

//   constructor(saldoInicial: number) {
//     this.saldo = saldoInicial;
//   }

//   abstract iniciar(): void;
// }

// class TarjetaCredito extends Tarjeta {
//   constructor() {
//     super(3000); // Saldo inicial requerido
//   }

//   iniciar(): void {
//     console.log(`\nSaldo inicial: $${this.saldo.toFixed(2)}`);
//     this.procesarTransaccion();
//   }

//   private procesarTransaccion(): void {
//     // Si ya no hay saldo, se cierra automáticamente
//     if (this.saldo <= 0) {
//       console.log("\nSaldo agotado. Cuenta cerrada.");
//       rl.close();
//       return;
//     }

//     rl.question("\nDigite el monto de la transacción (0 para salir): ", (dato) => {
//       const monto = parseFloat(dato);

//       // Validación: debe ser número y no negativo
//       if (isNaN(monto) || monto < 0) {
//         console.log("Ingrese un monto válido (número mayor o igual a 0).");
//         this.procesarTransaccion();
//         return;
//       }

//       // Cliente decide finalizar
//       if (monto === 0) {
//         console.log("Operación finalizada por el cliente.");
//         rl.close();
//         return;
//       }

//       // No puede gastar más del saldo disponible
//       if (monto > this.saldo) {
//         console.log("Fondos insuficientes.");
//       } else {
//         this.saldo -= monto;
//         console.log(`Transacción realizada. Saldo restante: $${this.saldo.toFixed(2)}`);
//       }

//       // Sigue preguntando hasta que el cliente salga o el saldo llegue a 0
//       this.procesarTransaccion();
//     });
//   }
// }

// const tarjeta = new TarjetaCredito();
// tarjeta.iniciar();


// ejercicio numero 4 4. Modifique el ejercicio 3 a tal modo que si el POS donde se hará la transacción es Bac
// acumule 3 puntos por cada dólar gastado, Banco Agricola 5 puntos por cada dólar y
// otros bancos 0 puntos. Mostrar la cantidad de puntos que se va obteniendo.


import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abstract class Tarjeta {
  protected saldo: number;
  protected puntos: number = 0;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  abstract iniciar(): void;
}

class TarjetaCredito extends Tarjeta {
  constructor() {
    // IMPORTANTE (Requerimiento): el saldo inicial debe ser 3000
    super(3000);
  }

  iniciar(): void {
    console.log("\n Sistema de Tarjeta de Crédito");
    console.log(`Saldo inicial: $${this.saldo.toFixed(2)}`); // debe mostrar el saldo inicial 
    console.log(`Puntos acumulados: ${this.puntos}`); // debe mostrar los puntos acumulados (inicialmente 0)
    this.procesarTransaccion();
  }

  private procesarTransaccion(): void {
    // IMPORTANTE (Requerimiento): cerrar si el saldo llega a 0
    if (this.saldo <= 0) {
      console.log("\nSaldo agotado. Cuenta cerrada.");
      console.log(`Puntos totales acumulados: ${this.puntos}`);
      rl.close();
      return;
    }

    rl.question("\nDigite el monto de la transacción (0 para salir): ", (datoMonto) => {
      const monto = parseFloat(datoMonto);

      if (isNaN(monto) || monto < 0) { // Validación: monto debe ser un número y no negativo
        console.log("Ingrese un monto válido (número mayor o igual a 0).");
        this.procesarTransaccion();
        return;
      }

      // IMPORTANTE (Requerimiento): cliente puede finalizar manualmente
      if (monto === 0) {
        console.log("Operación finalizada por el cliente.");
        console.log(`Puntos totales acumulados: ${this.puntos}`); // Mostrar puntos acumulados al finalizar
        rl.close();
        return;
      }

      if (monto > this.saldo) {
        console.log("Fondos insuficientes.");
        this.procesarTransaccion();
        return;
      }

      rl.question("Ingrese el POS (Bac, Banco Agricola, Otro): ", (datoPos) => {
        const pos = datoPos.trim().toLowerCase();

        // Descontar saldo
        this.saldo -= monto;

        // IMPORTANTE (Requerimiento):
        // Bac = 3 puntos por dólar
        // Banco Agricola = 5 puntos por dólar
        // Otros = 0 puntos
        const puntosGanados = this.calcularPuntos(pos, monto);
        this.puntos += puntosGanados;

        console.log(`\nTransacción realizada por $${monto.toFixed(2)}`);
        console.log(`Saldo restante: $${this.saldo.toFixed(2)}`);
        console.log(`Puntos ganados en esta transacción: ${puntosGanados}`);
        console.log(`Puntos acumulados: ${this.puntos}`);

        // IMPORTANTE (Requerimiento): seguir preguntando mientras no salga y haya saldo
        this.procesarTransaccion();
      });
    });
  }

  private calcularPuntos(pos: string, monto: number): number { // calcular puntos según el POS y el monto gastado
    // Se usan dólares enteros para "por cada dólar gastado" 
    const dolaresEnteros = Math.floor(monto); // Ejemplo: $10.75 se considera 10 dólares para puntos

    if (pos === "bac") {
      return dolaresEnteros * 3;
    }

    if (pos === "banco agricola" || pos === "banco agrícola") {
      return dolaresEnteros * 5;
    }

    return 0;
  }
}

const tarjeta = new TarjetaCredito();
tarjeta.iniciar();


