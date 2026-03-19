// Ejercicio 5 Sistema de Pagos
// Crear una clase abstracta Pago con el método procesarPago(). El usuario debe poder
// seleccionar entre pago en efectivo, pago con tarjeta o transferencia bancaria. Cada clase
// debe implementar su proceso de pago.

abstract class Pago {
    protected monto: number;

    constructor(monto: number) {
        this.monto = monto;
    }

    abstract procesarPago(): void;
}

class PagoEfectivo extends Pago {
    procesarPago(): void {
        console.log(`Pago en efectivo por $${this.monto.toFixed(2)} procesado.`);
    }
}

class PagoTarjeta extends Pago {
    private numeroTarjeta: string;

    constructor(monto: number, numeroTarjeta: string) {
        super(monto);
        this.numeroTarjeta = numeroTarjeta;
    }

    procesarPago(): void {
        const ultimos4 = this.numeroTarjeta.slice(-4);
        console.log(`Pago con tarjeta ****${ultimos4} por $${this.monto.toFixed(2)} procesado.`);
    }
}

class PagoTransferencia extends Pago {
    private banco: string;

    constructor(monto: number, banco: string) {
        super(monto);
        this.banco = banco;
    }

    procesarPago(): void {
        console.log(`Transferencia bancaria desde ${this.banco} por $${this.monto.toFixed(2)} procesada.`);
    }
}

function crearPago(opcion: number, monto: number): Pago {
    switch (opcion) {
        case 1: return new PagoEfectivo(monto);
        case 2: return new PagoTarjeta(monto, "1234567890123456");
        case 3: return new PagoTransferencia(monto, "Banco Micholoban");
        default: throw new Error("Opción no válida. Usa 1, 2 o 3.");
    }
}

const montoPago = 150;
const opcionesPrueba = [1, 2, 3];

for (const opcion of opcionesPrueba) {
    const pago = crearPago(opcion, montoPago);
    pago.procesarPago();
}





