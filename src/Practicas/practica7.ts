class Producto {
  constructor(
    public readonly nombre: string,
    public readonly precio: number,
    public readonly cantidad: number
  ) {}

  subtotal(): number {
    return this.precio * this.cantidad;
  }
}

interface Descuento {
  aplicar(monto: number): number;
}

class DescuentoPorcentaje implements Descuento {
  constructor(private readonly porcentaje: number) {}

  aplicar(monto: number): number {
    return monto * (1 - this.porcentaje / 100);
  }
}

class DescuentoFijo implements Descuento {
  constructor(private readonly valor: number) {}

  aplicar(monto: number): number {
    return monto - this.valor;
  }
}

class DescuentoMultiplicador implements Descuento {
  constructor(private readonly multiplicador: number) {}

  aplicar(monto: number): number {
    return monto * this.multiplicador;
  }
}

export class Carrito {
  private readonly productos: Producto[] = [];
  private readonly descuentos: Descuento[] = [];

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  agregarDescuento(descuento: Descuento): void {
    this.descuentos.push(descuento);
  }

  calcularTotal(): number {
    const subtotal = this.productos
      .map((p) => p.subtotal())
      .reduce((acc, x) => acc + x, 0);

    console.log("Subtotal:", subtotal);

    const totalConDescuentos = this.descuentos.reduce((monto, descuento) => {
      const nuevoMonto = descuento.aplicar(monto);
      console.log(`Aplicado ${descuento.constructor.name} → Total: ${nuevoMonto}`);
      return nuevoMonto;
    }, subtotal);

    const totalFinal = Number(totalConDescuentos.toFixed(2));
    console.log("Total final:", totalFinal);

    return totalFinal;
  }
}

const carrito = new Carrito();
carrito.agregarProducto(new Producto("Laptop", 900, 1));
carrito.agregarProducto(new Producto("Mouse", 25, 2));
carrito.agregarProducto(new Producto("Teclado", 40, 1));

carrito.agregarDescuento(new DescuentoPorcentaje(10)); // -10%
carrito.agregarDescuento(new DescuentoFijo(50));       // -$50
carrito.agregarDescuento(new DescuentoMultiplicador(0.95)); // x0.95

carrito.calcularTotal();

