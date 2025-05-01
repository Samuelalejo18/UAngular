export class Producto {
    private descripcion: string;
    private precio: number;

    constructor(descripcion: string, precio: number) {
        this.descripcion = descripcion;
        this.precio = precio;
    }

    get Descripcion(): string {
        return this.descripcion;
    }

    get Precio(): number {
        return this.precio;
    }

}