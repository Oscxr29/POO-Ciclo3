abstract class Jugador {
  public nickname: string;
  private vida: number = 100;

  constructor(nickname: string) {
    this.nickname = nickname;
  }

  get VidaRestante(): number {
    return this.vida;
  }

  protected restarVida(porcentaje: number): void {
    this.vida -= porcentaje;
    if (this.vida < 0) this.vida = 0;
  }

  protected sumarVida(porcentaje: number): void {
    this.vida += porcentaje;
    if (this.vida > 100) this.vida = 100;
  }

  abstract aventura(): void;
  abstract acuatico(): void;
  abstract endgame(): void;
}

class Mundo1 extends Jugador {
  constructor(nickname: string) {
    super(nickname);
  }

  aventura(): void {
    this.restarVida(30);
    console.log(` Aventura${this.nickname} perdió 30% de vida. Vida restante: ${this.VidaRestante}%`);
  }

  acuatico(): void {
    this.restarVida(50);
    this.sumarVida(10);
    console.log(`Acuático${this.nickname} perdió 50% y ganó 10%. Vida restante: ${this.VidaRestante}%`);
  }

  endgame(): void {
    this.restarVida(50);
    console.log(`Endgame ${this.nickname} perdió 50% de vida. Vida restante: ${this.VidaRestante}%`);
  }
}

const jugador1 = new Mundo1("Axel sexitoman");
console.log(`Jugador: ${jugador1.nickname} | Vida inicial: ${jugador1.VidaRestante}%`);
jugador1.aventura();
jugador1.acuatico();
jugador1.endgame();


// ejercicio 2 Aplicar al ejercicio 1 el formato de mantener el porcentaje de vida para interactuar con los otros métodos, todo imprimiendo siempre mensajes en consola.
class Mundo2 extends Jugador {
  constructor(nickname: string) {
    super(nickname);
  }

  aventura(): void {
    this.restarVida(30);
    console.log(`Después de la aventura, te queda el ${this.VidaRestante}% de vida.`);
  }

  acuatico(): void {
    this.restarVida(50);
    this.sumarVida(10);
    console.log(`Después del mundo acuático, te queda el ${this.VidaRestante}% de vida.`);
  }

  endgame(): void {
    this.restarVida(50);
    console.log(`Después del endgame, te queda el ${this.VidaRestante}% de vida.`);
  }
}

const jugador2 = new Mundo2("Axel");
console.log(`Jugador: ${jugador2.nickname}, Vida inicial: ${jugador2.VidaRestante}%`);
jugador2.aventura();
jugador2.acuatico();
jugador2.endgame();  