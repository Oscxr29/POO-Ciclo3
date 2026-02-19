class Inventario {
    id: number;
    producto: string;
    codigo: string;
    fecha: string;
    precio : number;

    constructor(id: number, producto: string, codigo: string, fecha: string, precio: number) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fecha = fecha;
        this.precio = precio;
    }
    Agregar(precio2: number, precio3: number): void {
        console.log("Producto agregar con precio:", +this.precio);
        console.log("Precios de descuento: $"+ precio2 + "y $" +precio3 );
}
}

let producto = new Inventario(1, "Camiseta", "ABC123", "2024-06-01", 20);
producto.Agregar(2.45,2.40);


