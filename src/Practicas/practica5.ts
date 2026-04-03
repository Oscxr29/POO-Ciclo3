// class CuentaBancaria {
//     public titular: string;
//     private saldo: number;
//     constructor(titular: string, saldoInicial: number) {
//         this.titular = titular;
//         this.saldo = saldoInicial;
//     }

//     getSaldo(usuario: {nombre: string, rol: string}): number {
//         if (usuario.rol === "admin") {
//             return this.saldo;
//         } else {
//             throw new Error("Acceso denegado. Solo el administrador puede ver el saldo.");
//         }
//     }

//     setInteres(interes: number): number {
//         if(this.saldo<=0){
//             throw new Error("El saldo no puede ser negativo o cero para calcular intereses");

//         }
//         return this.saldo * interes;
//     }
//     depositar(cantidad: number): void {
//         if (cantidad <= 0) {
//             throw new Error("La cantidad a depositar debe ser mayor que cero");
//         }
//         this.saldo += cantidad;
//     }
// }
// const usuarioAdmin = {nombre: "Admin", rol: "admin"};
// const usuario = {nombre: "User", rol: "Cliente"};
// const cuentaAhorros = new CuentaBancaria("Cristiano Ronaldo", 100000);
// console.log(cuentaAhorros.titular); 
// console.log(cuentaAhorros.getSaldo(usuarioAdmin)); 
// console.log(cuentaAhorros.getSaldo(usuarioAdmin)); // Error: Acceso denegado. Solo el administrador puede ver el saldo.

// Práctica en aula
// Enunciado:

// Crear una clase Producto que represente un producto dentro de un sistema de inventario donde el stock esté protegido mediante encapsulamiento.

// La clase debe incluir:

// nombre (string)
// precio (number)
// stock (number, privado)
// La clase debe tener:

// Un constructor que inicialice los atributos
// Un método aumentarStock(cantidad)
// Un método disminuirStock(cantidad)
// Un método mostrarInformacion()
// Reglas:

// No permitir modificar el stock directamente
// No permitir valores negativos
// No permitir disminuir el stock por debajo de cero
// class Producto {
//     nombre: string;
//     precio: number;
//     private stock: number;
//     constructor(nombre: string, precio: number, stock: number) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//     }
//     getStock(usuario: {nombre: string, rol: string}): number {
//         if (usuario.rol === "admin") {
//             return this.stock;
//         } else {
//             throw new Error("Acceso denegado. Solo el administrador puede ver el stock.");
//         }
//     }
//     setPrecio(nuevoPrecio: number, usuario: {nombre: string, rol: string}): void {
//         if (usuario.rol !== "admin") {
//             throw new Error("Acceso denegado. Solo el administrador puede cambiar el precio.");
//         }
//         if (nuevoPrecio <= 0) {
//             throw new Error("El precio debe ser mayor que cero.");
//         }
//         this.precio = nuevoPrecio;
//     }
//     aumentarStock(cantidad: number, usuario: {nombre: string, rol: string}): void {
//         if (usuario.rol !== "admin") {
//             throw new Error("Acceso denegado. Solo el administrador puede aumentar el stock.");
//         }
//         if (cantidad <= 0) {
//             throw new Error("La cantidad a aumentar debe ser mayor que cero.");
//         }
//         this.stock += cantidad;
//     }
//     disminuirStock(cantidad: number, usuario: {nombre: string, rol: string}): void {
//         if (usuario.rol !== "admin") {
//             throw new Error("Acceso denegado. Solo el administrador puede disminuir el stock.");
//         }
//         if (cantidad <= 0) {
//             throw new Error("La cantidad a disminuir debe ser mayor que cero.");
//         }
//         if (cantidad > this.stock) {
//             throw new Error("No se puede disminuir más stock del que hay disponible.");
//         }
//         this.stock -= cantidad;
//     }
//     mostrarInformacion(): string {
//         return `Producto: ${this.nombre}, Precio: $${this.precio.toFixed(2)}`;
//     }
// }
// const usuarioAdmin = {nombre: "Admin", rol: "admin"};
// const usuario = {nombre: "User", rol: "Cliente"};
// const producto = new Producto("Laptop Omen 16 ", 1800, 8);
// console.log(producto.getStock(usuarioAdmin)); // 8
// console.log(producto.mostrarInformacion());
// // console.log(producto.getStock(usuario)); // Solo el administrador puede ver el stock.
// producto.aumentarStock(5, usuario); // Solo el administrador puede aumentar el stock.
// producto.disminuirStock(3, usuario); // Solo el administrador puede disminuir el stock.
// producto.setPrecio(1700, usuario); //  Solo el administrador puede cambiar el precio.

// Ejercicio en clase 

class Producto {
  private nombre: string;
  private precio: number;

  constructor(nombre: string, precio: number) {
    if (nombre.trim() === "") {
      throw new Error("El nombre no puede estar vacío.");
    }

    if (precio <= 0) {
      throw new Error("El precio debe ser mayor que 0.");
    }

    this.nombre = nombre;
    this.precio = precio;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getPrecio(): number {
    return this.precio;
  }
}

class Carrito {
  private productos: { producto: Producto; cantidad: number }[] = [];
  private total: number = 0;

  public agregarProducto(producto: Producto, cantidad: number): void {
    if (cantidad <= 0 || cantidad % 1 !== 0) {
      throw new Error("La cantidad debe ser un número entero mayor que 0.");
    }

    const encontrado = this.productos.find(
      item => item.producto.getNombre() === producto.getNombre()
    );

    if (encontrado) {
      encontrado.cantidad += cantidad;
    } else {
      this.productos.push({ producto, cantidad });
    }

    this.calcularTotal();
  }

  public eliminarProducto(producto: Producto): void {
    this.productos = this.productos.filter(
      item => item.producto.getNombre() !== producto.getNombre()
    );

    this.calcularTotal();
  }

  public calcularTotal(): void {
    let suma = 0;

    for (const item of this.productos) {
      suma += item.producto.getPrecio() * item.cantidad;
    }

    this.total = suma;
  }

  public mostrarDetalle(): void {
    console.log(" DETALLE DEL CARRITO ");

    for (const item of this.productos) {
      console.log(
        `${item.producto.getNombre()}  Precio: $${item.producto.getPrecio().toFixed(2)}  Cantidad: ${item.cantidad}`
      );
    }

    console.log(`TOTAL: $${this.total.toFixed(2)}`);
  }
}

const producto1 = new Producto("Arroz", 2.5);
const producto2 = new Producto("Leche", 1.8);
const producto3 = new Producto("Pan", 1.2);

const carrito = new Carrito();

carrito.agregarProducto(producto1, 2);
carrito.agregarProducto(producto2, 3);
carrito.agregarProducto(producto3, 4);

carrito.mostrarDetalle();