// class Usuario{ // Clase Usuario
//     public nombre: string; // Propiedad pública nombre

//     constructor(nombre: string){ // Constructor que recibe un parámetro nombre
//         this.nombre = nombre; // Asigna el valor del parámetro nombre a la propiedad nombre de la clase
//     }
// }

// const u = new Usuario("Juan"); // Crea una instancia de la clase Usuario y le asigna el nombre "Juan"
// console.log(u.nombre); // Imprimimos el nombre del usuario, que es "Juan"


// class Usuario {
//     private password : string; // Propiedad privada password

//     constructor(pass: string) { // Constructor que recibe un parámetro password
//         this.password = pass; // Asigna el valor del parámetro password a la propiedad password de la clase
//     }


// validar (pass: string): boolean { // Método público validar que recibe un parámetro pass
//     return this.password === pass; // Compara el valor del parámetro pass con la propiedad password de la clase y devuelve true si son iguales, o false si no lo son
//     }
// }

// const u = new Usuario("12345"); // Crea una instancia de la clase Usuario y le asigna la contraseña "12345"
// console.log(u.password); // Intentamos imprimir la contraseña del usuario, pero como es una propiedad privada, esto generará un error de compilación y no esta llamando a metodo
// console.log(u.validar("12345")); // Imprimimos el resultado de validar la contraseña "12345", que es true

//  u.validar("54321"); // Imprimimos el resultado de validar la contraseña "54321", que es false y necesita paranetros para mostrar el resultado en consola

// class persona{
//     protected edad: number; // Propiedad protegida edad

//     constructor(edad: number) { // Constructor que recibe un parámetro edad
//         this.edad = edad; // Asigna el valor del parámetro edad a la propiedad edad de la clase
//     }
// }

// class Estudiante extends persona { // Clase Estudiante que hereda de la clase persona
//     mostrarEdad() { // Método público mostrarEdad
//         return this.edad; // Devuelve el valor de la propiedad edad de la clase persona
//     }
// }

// const e = new Estudiante(20); // Crea una instancia de la clase Estudiante y le asigna la edad 20
// // console.log(e.edad); // Intentamos imprimir la edad del estudiante, pero como es una propiedad protegida, esto generará un error de compilación y no esta llamando a metodo
// console.log(e.mostrarEdad()); // Imprimimos la edad del estudiante utilizando el método mostrarEdad, que devuelve 20



/* ejercicios  en clase */

// class Usuario { // Clase Usuario
//   public username: string; // Propiedad pública username
//   private password: string; // Propiedad privada password

//   constructor(username: string, password: string) { // Constructor que recibe dos parámetros: username y password
//     this.username = username;  // Asigna el valor del parámetro username a la propiedad username de la clase
//     this.password = password;  // Asigna el valor del parámetro password a la propiedad password de la clase
//   }

//   login(pass: string): string { // Método público login que recibe un parámetro pass
//     if (pass === this.password) { // Compara el valor del parámetro pass con la propiedad password de la clase
//       return "Acceso concedido";  // Si son iguales, devuelve "Acceso concedido"
//     } else { 
//       return "Contraseña incorrecta";    // Si no son iguales, devuelve "Contraseña incorrecta"
//     }
//   }
// }

// const user = new Usuario("admin", "1234"); // Crea una instancia de la clase Usuario con el username "admin" y la contraseña "1234"
// console.log(user.login("1234")); // Imprime el resultado de llamar al método login con la contraseña correcta "1234", que devuelve "Acceso concedido"

// ejercicio 2 

// class Producto { // Clase Producto
//   constructor(  // Constructor que recibe dos parámetros: nombre y precio
//     public nombre: string, // Propiedad pública nombre
//     private precio: number // Propiedad privada precio
//   ) {}

//   evaluarPrecio(): string { // Método público evaluarPrecio que no recibe parámetros
//     if (this.precio < 10) {
//       return "Producto barato"; // Si el precio es menor a 10, devuelve "Producto barato"
//     } else if (this.precio <= 50) {
//       return "Precio normal"; // Si el precio es entre 10 y 50, devuelve "Precio normal"
//     } else {
//       return "Producto caro"; // Si el precio es mayor a 50, devuelve "Producto caro"
//     }
//   }
// }

// const producto1 = new Producto("Camiseta", 15); // Crea una instancia de la clase Producto con el nombre "Camiseta" y el precio 15
// console.log(producto1.evaluarPrecio()); // Imprime el resultado de llamar al método evaluarPrecio, que devuelve "Precio normal"

// ejercicio 3

// class Empleado { // Clase Empleado
//   constructor( // Constructor que recibe dos parámetros: nombre y salario
//     public nombre: string,
//     protected salario: number
//   ) {}
// }

// class Gerente extends Empleado { // Clase Gerente que hereda de la clase Empleado
//   bono(): number {
//     if (this.salario > 1000) { // Si el salario es mayor a 1000, devuelve el 20% del salario como bono
//       return this.salario * 0.2; // Si el salario es menor o igual a 1000, devuelve el 20% l salario como bono
//     } else {
//       return this.salario * 0.1; // Si el salario es menor o igual a 1000, devuelve el 10% del salario como bono
//     }
//   }
// }

// const gerente1 = new Gerente("Carlos",950); // una instancia de la clase Gerente con el nombre "Carlos" y el salario 1200
// console.log(`El bono de ${gerente1.nombre} es: ${gerente1.bono()}`); // Imprime el nombre del gerente y el resultado de llamar al método bono, que devuelve el bono correspondiente según el salario del gerente

// ejercicio 4

// class Sistema {
//   verificarRol(rol: string): string {
//     switch (rol) {
//       case "admin":
//         return "Acceso total";
//       case "editor":
//         return "Acceso limitado";
//       case "usuario":
//         return "Acceso básico";
//       default:
//         return "Rol no válido";
//     }
//   }
// }

// const Sistema1 = new Sistema(); 
// console.log(Sistema1.verificarRol("admin")); // Imprime "Acceso total"
// console.log(Sistema1.verificarRol("editor")); // Imprime "Acceso limitado"
// console.log(Sistema1.verificarRol("usuario")); // Imprime "Acceso básico"
// console.log(Sistema1.verificarRol("invitado")); // Imprime "Rol no válido"  

// Ejercicio 5: Cuenta bancaria (ejercicio completo)

class CuentaBancaria { // Clase CuentaBancaria
  constructor( // Constructor que recibe dos parámetros: titular y saldo
    public titular: string,
    private saldo: number
  ) {}

  operacion(tipo: string, monto: number): string { // Método público operacion que recibe dos parámetros: tipo y monto
    switch (tipo) { // Evalúa el valor del parámetro tipo para determinar la operación a realizar
      case "depositar":
        this.saldo += monto;
        return `Saldo actual: ${this.saldo}`;

      case "retirar": // Si el tipo es "retirar", verifica si el monto a retirar es mayor que el saldo disponible
        if (monto > this.saldo) {
          return "Fondos insuficientes";
        } else {
          this.saldo -= monto;
          return `Saldo actual: ${this.saldo}`; // Si el monto a retirar es menor o igual al saldo disponible, realiza la operación de retiro y devuelve el saldo actual después de la operación
        }

      default:
        return "Operación no válida"; // Si el tipo no es "depositar" ni "retirar", devuelve "Operación no válida"
    }
  }
}
const cuenta1 = new CuentaBancaria("Laura", 1010); // Crea una instancia de la clase CuentaBancaria con el titular "Laura" y un saldo inicial de 1000
console.log(cuenta1.operacion("depositar", 500));  // Imprime el resultado de llamar al método operacion con el tipo "depositar" y un monto de 500, que devuelve el saldo actual después de la operación de depósito