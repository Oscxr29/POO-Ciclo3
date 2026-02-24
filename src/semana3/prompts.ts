class persona{ 
    nombre:string;
    edad:number;
    telefono:number;

    constructor(nombre:string, edad:number, telefono:number){
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    mostrar(): void {
        alert("Nombre: " + this.nombre + "\nEdad: " + this.edad + "\nTeléfono: " + this.telefono);
    }
}

let nombre: string = prompt("Ingrese su nombre") || "";
let edad: number = parseInt(prompt("Ingrese su edad") || "0");
let telefono: number = parseInt(prompt("Ingrese su telefono") || "0");

let people = new persona(nombre, edad, telefono);
people.mostrar();