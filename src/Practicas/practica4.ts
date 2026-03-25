/* ema: Clases Abstractas en POO
SESIÓN: 04

Ejercicio guiado
Enumciado:

Se desea modelar un sistema capaz de procesar diferentes tipos de archivos dentro de una aplicación. Cada tipo de archivo requiere una forma distinta de procesamiento, pero todos deben seguir una misma estructura base.

Indicaciones:

Definir una clase base que represente el procesamiento de archivos.
Establecer un comportamiento obligatorio que todos los tipos deben implementar.
Crear diferentes tipos de procesadores con comportamientos distintos.
El objetivo es comprender cómo una clase abstracta define una estructura común, pero delega el comportamiento específico a sus implementaciones. */

// abstract class ProcesadorDeArchivos {
//     public nombreArchivo: string;
//     public estadoArchivo: string;

//     constructor(nombreArchivo: string, estadoArchivo: string) {
//         this.nombreArchivo = nombreArchivo;
//         this.estadoArchivo = estadoArchivo;
//     }

//     abstract convertir(archivo: string): string;
// }
// //Convertidor de PNG a JPG
// class ConvertidorPNGtoJPG extends ProcesadorDeArchivos {

//     constructor(nombreArchivo: string, estadoArchivo: string) {
//         super(nombreArchivo, estadoArchivo);
//     }

//    convertir(archivo: string): string {
//     let nombreArchivo: string = archivo.split('.').slice(0, -1).join('.');
//     this.nombreArchivo=nombreArchivo;
//     return `${nombreArchivo}.jpg`;

       
//     }
// private validarArchivo(archivo: string){
//     const formatoArchivo = archivo.split('.').pop()?.toLowerCase();
//     if(formatoArchivo === 'png'){ 
//         throw new Error('Archivo no es PNG');
//     }
// }
// }
// const imagenesPNG = new ConvertidorPNGtoJPG('foto.png', 'sin procesar');
// console.log(imagenesPNG.convertir('captura.png'));

// Práctica en aula
// Enumciado:

// Se requiere desarrollar un sistema que transforme datos ingresados por el usuario. Cada transformación modifica el valor original de una manera distinta.

// Requisitos:

// Definir una clase abstracta para representar una transformación.
// Definir un método obligatorio que reciba un dato y retorne el resultado transformado.
// Crear múltiples transformaciones con comportamientos distintos.
// El sistema debe permitir aplicar diferentes transformaciones a un mismo dato.
// Condiciones:

// Cada transformación debe ser independiente.
// El comportamiento debe variar claramente entre implementaciones.
// Evitar lógica duplicada entre clases.
// Tipos:
// Mayúsculas
// Minúsculas
// Reverso de texto
// Eliminación de espacios

abstract class TransformacionLetras {
    public valorOriginal: string;

    constructor(valorOriginal: string) {
        this.valorOriginal = valorOriginal;
    }

    abstract transformar(valorOriginal: string): string;
}

// Transformación: Convertir a Mayúsculas
class TransformacionMayusculas extends TransformacionLetras {
    constructor(valorOriginal: string) {
        super(valorOriginal);
    }

    transformar(valorOriginal: string): string {
        return valorOriginal.toUpperCase();
    }
}

// Transformación: Convertir a Minúsculas
class TransformacionMinusculas extends TransformacionLetras {
    constructor(valorOriginal: string) {
        super(valorOriginal);
    }

    transformar(valorOriginal: string): string {
        return valorOriginal.toLowerCase();
    }
}

// Transformación: Reverso de texto
class TransformacionReverso extends TransformacionLetras {
    constructor(valorOriginal: string) {
        super(valorOriginal);
    }

    transformar(valorOriginal: string): string {
        return valorOriginal.split('').reverse().join('');
    }
}

// Transformación: Eliminación de espacios
class TransformacionSinEspacios extends TransformacionLetras { 
    constructor(valorOriginal: string) {
        super(valorOriginal);
    }

    transformar(valorOriginal: string): string {
        return valorOriginal.replace(/ /g, ''); // Elimina todos los espacios
    }
}


const texto = "Hola Mundo";

const mayusculas = new TransformacionMayusculas(texto);
console.log("Original:", mayusculas.valorOriginal);
console.log("Mayúsculas:", mayusculas.transformar(texto));


const minusculas = new TransformacionMinusculas(texto);
console.log("Original:", minusculas.valorOriginal);
console.log("Minúsculas:", minusculas.transformar(texto));


const reverso = new TransformacionReverso(texto);
console.log("Original:", reverso.valorOriginal);
console.log("Reverso:", reverso.transformar(texto));


const sinEspacios = new TransformacionSinEspacios(texto);
console.log("Original:", sinEspacios.valorOriginal);
console.log("Sin espacios:", sinEspacios.transformar(texto));
