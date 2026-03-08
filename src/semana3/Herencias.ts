class Animales {
    nombre: string
    categoria: string
    raza: string

  constructor(nom: string, cat: string, raza: string){
    this.nombre = nom;
    this.categoria = cat;
    this.raza = raza;
  }

  mostrar(){
   console.log("el animal es un " +this.categoria +"su nombre es " +this.nombre +  " su raza es " +this.raza);
  }
}

class Encargado extends Animales {
  dueño: string;

  constructor(nombre: string, categoria: string, raza: string, dueño: string) {
    super(nombre, categoria, raza);
    this.dueño = dueño;
  }

    mensaje(): void {
      console.log("el animalito que es un:" +this.categoria);
      console.log("su nombre es:" +this.nombre);
      console.log("su raza es:" +this.raza);
      console.log("y su dueño es:" +this.dueño);
    }
  }

const ob = new Encargado("firulais", "perro", "labrador", "juan");
ob.mostrar();
ob.mensaje();

class Precio extends Encargado {
  precio: number;

  constructor(
    nombre: string,
    categoria: string,
    raza: string,
    dueño: string,
    precio: number
  ) {
    super(nombre, categoria, raza, dueño);
    this.precio = precio;
  }

  mensajePrecio(): void {
    console.log("el animalito que es un: " + this.categoria);
    console.log("su nombre es: " + this.nombre);
    console.log("su raza es: " + this.raza);
    console.log("y su dueño es: " + this.dueño);
    console.log("y su precio es: " + this.precio);
  }
}

const venta = new Precio("Juan", "perro", "labrador", "Oscar", 5000);
venta.mensajePrecio();








