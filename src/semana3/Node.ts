// import * as readline from "readline";

// class Programa {
//     private rl: readline.Interface;

//     constructor() {
//         this.rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
//     }

//     iniciar(): void {
//         this.pedirNumero();
//     }

//     pedirNumero(): void {
//         this.rl.question("Ingresa un número: ", (respuesta: string) => {
//             const numero = Number(respuesta);
//             this.evaluarNumero(numero);
//             this.cerrar();
//         });
//     }

//     evaluarNumero(numero: number): void {
//         if (numero > 10) {
//             console.log("Es mayor que 10");
//         } else if (numero === 10) {
//             console.log("Es igual a 10");
//         } else {
//             console.log("Es menor que 10");
//         }
//     }

//     cerrar(): void {
//         this.rl.close();
//     }
// }

// const app = new Programa();
// app.iniciar();


/* ejercicio 2 
1. Desarrollar una aplicación en consola que permita ingresar la nota de un
estudiante y determinar su estado académico.
Usar if / else if para clasificar:
• 9 – 10 = Excelente
• 7 – 8.9 = Bueno
• 6 – 6.9 = Regular
• Menor a 6 = Reprobado
*/

// import * as readline from "readline";

// class EvaluadorNotas {
//     private rl: readline.Interface;

//     constructor() {
//         this.rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
//     }

//     iniciar(): void {
//         this.pedirNota();
//     }

//     pedirNota(): void {
//         this.rl.question("Ingresa la nota del estudiante: ", (respuesta: string) => {
//             const nota = Number(respuesta);
//             this.evaluarNota(nota);
//             this.cerrar();
//         });
//     }

//     evaluarNota(nota: number): void {
//         if (nota >= 9 && nota <= 10) {
//             console.log("Estado académico: Excelente");
//         } else if (nota >= 7 && nota < 9) {
//             console.log("Estado académico: Bueno");
//         } else if (nota >= 6 && nota < 7) {
//             console.log("Estado académico: Regular");
//         } else if (nota < 6) {
//             console.log("Estado académico: Reprobado");
//         } else {
//             console.log("Nota inválida. Ingresa un valor entre 0 y 10.");
//         }
//     }

//     cerrar(): void {
//         this.rl.close();
//     }
// }

// const app = new EvaluadorNotas();
// app.iniciar();


/* Ejercicio 3 

Desarrollar un sistema de autenticación que valide usuario, contraseña.
Si el login es correcto, mostrar el rol al que pertenece el usuario:
• 1 = Administrador
• 2 = Cliente
• 3 =1 Invitado
Si el usuario no existe, mostrar mensaje de usuario incorrecto.


*/

import * as readline from "readline";

type UsuarioInfo = { contraseña: string; rol: string; codigo: number }; // Definimos un tipo para la información de los usuarios

class SistemaAutenticacion {
    private rl: readline.Interface;
    private usuarios: Record<string, UsuarioInfo> = {
        admin: { contraseña: "admin123", rol: "Administrador", codigo: 1 },
        cliente: { contraseña: "cliente123", rol: "Cliente", codigo: 2 },
        invitado: { contraseña: "invitado123", rol: "Invitado", codigo: 3 }
    };

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    iniciar(): void {
        this.rl.question("Ingresa tu usuario: ", (usuario: string) => {
            this.rl.question("Ingresa tu contraseña: ", (contraseña: string) => {
                this.validarLogin(usuario, contraseña);
                this.cerrar();
            });
        });
    }

    private validarLogin(usuario: string, contraseña: string): void {
        const info = this.usuarios[usuario];
        if (info && info.contraseña === contraseña) {
            console.log(` Login correcto. Rol: ${info.rol} (Código: ${info.codigo})`);
        } else {
            console.log(" Usuario o contraseña incorrectos.");
        }
    }

    private cerrar(): void {
        this.rl.close();
    }
}

const app = new SistemaAutenticacion();
app.iniciar(); 