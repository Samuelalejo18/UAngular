import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  producto = {
    descripcion: 'Nuevo Producto',
    precio: 100,
  }

  infoProducto(): string {
    return `Producto: ${this.producto.descripcion}, Precio: $${this.producto.precio}`;
  }
}
