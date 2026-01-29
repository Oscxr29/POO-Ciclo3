class POO {
    codigo: string;
    nombre: string;
    edad: number;
    laboratorio: number;
    parcial: number;
    

    constructor(codigo: string,nombre:string,edad: number,laboratorio:number,parcial:number){
        this.codigo = codigo;
        this.nombre = nombre;
        this.edad = edad;
        this.laboratorio = laboratorio;
        this.parcial = parcial;
    }
    public mostrarDatos(): void {
        console.log("El Estudiante:" + this.nombre);
        console.log("Con Codigo:" + this.codigo);
        console.log("De Edad:" + this.edad);
        console.log("Tiene una Nota de Laboratorio de:" + this.laboratorio);
        console.log("Y una Nota de Parcial de:" + this.parcial);
    }
}



class Redes {
    nombre: string;
    L1: number;
    L2: number;
    L3: number;
    P1: number;
    P2: number;
    P3: number;

    constructor(nombre: string, L1: number, L2: number, L3: number, P1: number, P2: number, P3: number) {
        this.nombre = nombre;
        this.L1 = L1;
        this.L2 = L2;
        this.L3 = L3;
        this.P1 = P1;
        this.P2 = P2;
        this.P3 = P3;
    }

    calcularNotaFinal(): number {
        const promedioLab = (this.L1 + this.L2 + this.L3) / 3;
        const promedioParcial = (this.P1 + this.P2 + this.P3) / 3;
        return promedioLab * 0.6 + promedioParcial * 0.4;
    }

    mostrarDatos(): void {
        console.log(`Estudiante: ${this.nombre}`);
        console.log(`Laboratorios: L1=${this.L1}, L2=${this.L2}, L3=${this.L3}`);
        console.log(`Parciales: P1=${this.P1}, P2=${this.P2}, P3=${this.P3}`);
        console.log(`Nota final: ${this.calcularNotaFinal()}`);
    }
}

//objecto instanciado a POO
let estudiante = new POO("U20250466","Oscar",19,9.0,8.5);
estudiante.mostrarDatos();
//Objeto instanciado a Redes
let estudiante2 = new Redes("Josue Felix Ulloa", 10, 10, 10, 10, 10, 10);
estudiante2.mostrarDatos();
