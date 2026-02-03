// class GYM {
//     peso: number;
//     estatura: number;
    
//     constructor(peso: number, estatura: number){
//         this.peso = peso;
//         this.estatura = estatura;
//     }

//     public CalcularIMC(): number {
//         return this.peso / (this.estatura * this.estatura);
//     }

//     public CategoriaIMC(): string {
//         const imc = this.CalcularIMC();
//         if (imc < 18.5) {
//             return "Bajo peso";
//         } else if (imc >= 18.5 && imc < 25) {
//             return "Normal";
//         } else if (imc >= 25 && imc < 30) {
//             return "Sobrepeso";
//         } else  {
//             return "Obesidad";
//         }
//     }
// }

// let cliente = new GYM(105, 1.76);
// console.log("Tu IMC es: " + cliente.CalcularIMC().toFixed(2));
// console.log("Categoría: " + cliente.CategoriaIMC());


// class ConvertirTemperatura {
//     temp: number;
    
//     constructor(temp: number) {
//         this.temp = temp;
//     }
//     public aFahrenheit(): number {
//         return (this.temp * 9/5) + 32;
//     }
//     public aKelvin(): number {
//         return this.temp + 273.15;
//     }
//     public FarenheitAKelvin(): number {
//         const fahrenheit = this.aFahrenheit();
//         return (fahrenheit - 32) * 5/9 + 273.15;
//     }
//     public KelvinAFarenheit(): number {
//         const kelvin = this.aKelvin();
//         return (kelvin - 273.15) * 9/5 + 32;
//     }

// }

// let temperatura = new ConvertirTemperatura(25);
// console.log("25 grados Celsius a Fahrenheit: " + temperatura.aFahrenheit().toFixed(2));
// console.log("25 grados Celsius a Kelvin: " + temperatura.aKelvin().toFixed(2));
// console.log("25 grados Fahrenheit a Kelvin: " + temperatura.FarenheitAKelvin().toFixed(2));
// console.log("25 grados Kelvin a Fahrenheit: " + temperatura.KelvinAFarenheit().toFixed(2));


class SancionEstudiantil {
  faltas: number;
  nombre: string;

  constructor(faltas: number, nombre: string) {
    this.faltas = faltas;
    this.nombre = nombre;
  }

  public DeterminarSancion(): string {
    let mensaje = "";
    let monto = 0;

    switch (this.faltas) {
        case 1:
            mensaje = "llegada tardía";
            monto = 1;
            break;
        case 2:
            mensaje = "caminar por los pasillos en horas de clase";
            monto = 3;
            break;
        case 3:
            mensaje = "no andar vestimenta apropiada";
            monto = 5;
            break;
        case 4:
            mensaje = "no hacer uso adecuado de las instalaciones";
            monto = 10;
            break;
        default:
            return `El estudiante ${this.nombre} ha sido expulsado del ciclo escolar.`;
    }
    return `El estudiante ${this.nombre} cometió la infracción de "${mensaje}" y debe cancelar $${monto}.`;
    }
}
let estudiante1 = new SancionEstudiantil(3, "Carlos Perez");
console.log(estudiante1.DeterminarSancion());
let estudiante3 = new SancionEstudiantil(5, "Ana Gomez");
console.log(estudiante3.DeterminarSancion());
