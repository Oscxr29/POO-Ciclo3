var persona = /** @class */ (function () {
    function persona(nombre, edad, telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    persona.prototype.mostrar = function () {
        alert("Nombre: " + this.nombre + "\nEdad: " + this.edad + "\nTeléfono: " + this.telefono);
    };
    return persona;
}());
var nombre = prompt("Ingrese su nombre") || "";
var people = new persona(nombre, 19, 123456789);
people.mostrar();
var edad = parseInt(prompt("Ingrese su edad") || "0");
var people2 = new persona(nombre, edad, 123456789);
people2.mostrar();
var telefono = parseInt(prompt("Ingrese su telefono") || "0");
var people3 = new persona(nombre, edad, telefono);
people3.mostrar();
