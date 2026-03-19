    // Ejercicio 3 Sistema de Figuras Geométricas
    // Crear una clase abstracta Figura con los métodos calcularArea() y calcularPerimetro(). El
    // usuario debe elegir entre Cuadrado, Rectángulo o Círculo e ingresar los valores necesarios
    // para calcular los resultados.


abstract class Figura {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract calcularArea(): void;
    abstract calcularPerimetro(): void;
}

class Cuadrado extends Figura {
    lado: number;

    constructor(lado: number) {
        super("Cuadrado");
        this.lado = lado;
    }

    calcularArea(): void {
        console.log("Area:", this.lado * this.lado);
    }

    calcularPerimetro(): void {
        console.log("Perimetro:", 4 * this.lado);
    }
}

class Rectangulo extends Figura {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        super("Rectangulo");
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): void {
        console.log("Area:", this.base * this.altura);
    }

    calcularPerimetro(): void {
        console.log("Perimetro:", 2 * (this.base + this.altura));
    }
}

class Circulo extends Figura {
    radio: number;

    constructor(radio: number) {
        super("Circulo");
        this.radio = radio;
    }

    calcularArea(): void {
        console.log("Area:", Math.PI * this.radio * this.radio); // πr²
    }

    calcularPerimetro(): void {
        console.log("Perimetro:", 2 * Math.PI * this.radio); // 2πr
    }
}

const cuadrado = new Cuadrado(5);
console.log("Figura seleccionada:", cuadrado.nombre);
cuadrado.calcularArea();
cuadrado.calcularPerimetro();



const rectangulo = new Rectangulo(8, 4);
console.log("Figura seleccionada:", rectangulo.nombre);
rectangulo.calcularArea();
rectangulo.calcularPerimetro();



const circulo = new Circulo(3);
console.log("Figura seleccionada:", circulo.nombre);
circulo.calcularArea();
circulo.calcularPerimetro();


