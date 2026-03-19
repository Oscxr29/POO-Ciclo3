// Ejercicio 8 Sistema de Tienda (Nivel Avanzado)
// Crear una clase abstracta Producto con los métodos calcularPrecioFinal() y
// mostrarInformacion(). El sistema debe permitir registrar productos electrónicos, ropa y
// alimentos. Cada tipo de producto debe aplicar diferentes reglas de impuestos o descuentos
// para calcular el precio final.


abstract class Producto {
    nombre: string;
    precioBase: number;

    constructor(nombre: string, precioBase: number) {
        this.nombre = nombre;
        this.precioBase = precioBase;
    }
}

abstract class ProductoConDescuento extends Producto {
    abstract calcularPrecioFinal(): number;
    mostrarInformacion(): void {
        console.log(`Producto: ${this.nombre}, Precio Base: $${this.precioBase.toFixed(2)}, Precio Final: $${this.calcularPrecioFinal().toFixed(2)}`);
    }
}

class ProductosElectronicos extends ProductoConDescuento {
    calcularPrecioFinal(): number {
        return this.precioBase * 1.15; // 15% 
    }
}

class Ropa extends ProductoConDescuento {
    calcularPrecioFinal(): number {
        return this.precioBase * 0.90; // 10% 
    }
}

class ALimentos extends ProductoConDescuento {
    calcularPrecioFinal(): number {
        return this.precioBase * 1.05; // 5% 
    }
}

const producto1 = new ProductosElectronicos("Celular: Mico dicksy pro", 500);
const producto2 = new Ropa("Camisa Susy", 30);
const producto3 = new ALimentos("Pan-Nochon", 2);


producto1.mostrarInformacion();
producto2.mostrarInformacion();
producto3.mostrarInformacion();

