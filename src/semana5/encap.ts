// type Usuario = {
//   nombre: string;
//   rol: string;
// };

// class CuentaBancaria {
//   public titular: string;
//   private saldo: number;

//   constructor(titular: string, saldoInicial: number) {
//     this.titular = titular;
//     this.saldo = saldoInicial;
//   }

//   getSaldo(usuario: Usuario): number {
//     if (usuario.rol.toLowerCase() === "admin") {
//       return this.saldo;
//     }
//     throw new Error("Acceso denegado. Solo el administrador puede ver el saldo.");
//   }

//   setInteres(interes: number): number {
//     if (this.saldo <= 0) {
//       throw new Error("El saldo debe ser mayor que cero para calcular intereses.");
//     }

//     if (interes <= 0) {
//       throw new Error("El interes debe ser mayor que cero.");
//     }

//     return this.saldo * interes;
//   }

//   depositar(cantidad: number): void {
//     if (cantidad <= 0) {
//       throw new Error("La cantidad a depositar debe ser mayor que cero.");
//     }
//     this.saldo += cantidad;
//   }
// }

// const usuarioAdmin: Usuario = { nombre: "Admin", rol: "admin" };
// const usuarioCliente: Usuario = { nombre: "User", rol: "cliente" };

// const cuentaAhorros = new CuentaBancaria("Roman Riquelme", 1000);

// console.log("Titular:", cuentaAhorros.titular);
// console.log("Saldo visible para admin:", cuentaAhorros.getSaldo(usuarioAdmin));

// cuentaAhorros.depositar(500);
// console.log("Saldo despues del deposito (admin):", cuentaAhorros.getSaldo(usuarioAdmin));
// console.log("Interes calculado (10%):", cuentaAhorros.setInteres(0.1));

// try {
//   console.log("Saldo visible para cliente:", cuentaAhorros.getSaldo(usuarioCliente));
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   }
// }

/* ejercicios en clase antes de la actividad */

class banco {

  cliente: string;
  private saldo: number;

  constructor(cliente: string, saldoInicial: number) {
    this.cliente = cliente;
    this.saldo = saldoInicial;
  }
  get NuevoSaldo(): number { // método para obtener el saldo, pero no permite modificarlo directamente
    return this.saldo;
  }

  set Nuevosaldo(valor: number) { // método para modificar el saldo, pero con validación
    if (valor < 0) {
      throw new Error("El saldo no puede ser negativo");
    }
    this.saldo = valor;
  }
  mostrar(): void{
    console.log("saldo" +this.saldo);
  }
}

// let objeto = new banco("Cristiano Ronaldo", 100000);
// objeto.mostrar();
// objeto.Nuevosaldo = 150000; // modificamos el saldo a través del método set
// objeto.mostrar(); // mostramos el nuevo saldo

class Movimientpos extends banco {
  deposito: number;

  constructor(cliente: string, saldo: number, deposito: number) {
    super(cliente, saldo);
    this.deposito = deposito;
  }

  deposit(cantidad: number): void {
    if (cantidad <= 0) {
      throw new Error("La cantidad a depositar debe ser mayor que cero");
    }

    this.deposito += cantidad;
    this.Nuevosaldo = this.NuevoSaldo + cantidad; // actualizamos el saldo utilizando el método set
    console.log(`Depósito realizado: ${cantidad}. Nuevo saldo: ${this.NuevoSaldo}`);
  }
  comision(nuevomonto: number): void {
    let salida = nuevomonto - 1;
    console.log("Te cobré por la transferencia, tu nuevo saldo: " + salida);
  }
}

const dep = 500;
const procesos = new Movimientpos("Porfirio", 1000, dep);
procesos.deposit(dep);






