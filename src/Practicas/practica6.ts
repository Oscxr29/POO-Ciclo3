//  el precio base global 
const PRECIO_BASE = 10;

abstract class Suscripcion {
 // cada sub tiene su propio multiplicador 
  protected abstract getMultiplicador(): number;


  public calcularCosto(): number {
    return PRECIO_BASE * this.getMultiplicador();
  }

  public abstract mostrarBeneficios(): string;
  public abstract tipo(): string;
}

// Sin plan =  0
class SuscripcionSinPlan extends Suscripcion {
  protected getMultiplicador(): number {
    return 0;
  }

  public mostrarBeneficios(): string {
    return "Aun no tiene suscripcion activa.";
  }

  public tipo(): string {
    return "Sin plan";
  }
}

// Básica:  (precio base sin cambios)
class SuscripcionBasica extends Suscripcion {
  private limiteUso: number;

  constructor(limiteUso: number) {
    super();
    this.limiteUso = limiteUso;
  }

  protected getMultiplicador(): number {
    return 1; 
  }

  public mostrarBeneficios(): string {
    return `Acceso basico (${this.limiteUso} usos) y soporte estandar.`;
  }

  public tipo(): string {
    return "Basica";
  }
}

// Premium:  1.5 (50% más)
class SuscripcionPremium extends Suscripcion {
  private beneficiosExtra: string;

  constructor(beneficiosExtra: string) {
    super();
    this.beneficiosExtra = beneficiosExtra;
  }

  protected getMultiplicador(): number {
    return 1.5; 
  }

  public mostrarBeneficios(): string {
    return `Acceso ilimitado, soporte prioritario y ${this.beneficiosExtra}.`;
  }

  public tipo(): string {
    return "Premium";
  }
}

////////////////////////////////////////////////////////////////

class Usuario { // 
  public nombre: string;
  private suscripcion: Suscripcion;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.suscripcion = new SuscripcionSinPlan();
  }

  public asignarSuscripcion(nuevaSuscripcion: Suscripcion): void {
    this.suscripcion = nuevaSuscripcion;
  }

  public mostrarEstado(): void {
    console.log(`Usuario: ${this.nombre}`);
    console.log(`Tipo: ${this.suscripcion.tipo()}`);
    console.log(`Costo: $${this.suscripcion.calcularCosto()}`);
    console.log(`Beneficios: ${this.suscripcion.mostrarBeneficios()}`);
  }
}

// Pruebas
const basica = new SuscripcionBasica(50);
const premium = new SuscripcionPremium("descuentos exclusivos");

const usuarioBasico = new Usuario("Gerardo");
usuarioBasico.asignarSuscripcion(basica);
usuarioBasico.mostrarEstado();

const usuarioCambio = new Usuario("Henry");
usuarioCambio.asignarSuscripcion(basica);
usuarioCambio.mostrarEstado();
usuarioCambio.asignarSuscripcion(premium);
usuarioCambio.mostrarEstado();

const usuarioPremium = new Usuario("Isvi");
usuarioPremium.asignarSuscripcion(premium);
usuarioPremium.mostrarEstado();

const usuarioSinSub = new Usuario("Oscar");
usuarioSinSub.mostrarEstado();


