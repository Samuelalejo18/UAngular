import { Component } from '@angular/core';
import { Producto } from '../../entities/Producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})




export class ListadoProductosComponent {

  productos: Producto[] = [
    new Producto("Camiseta", 20),
    new Producto("Pantalón", 30),
    new Producto("Zapatos", 50),
    new Producto("Gorra", 15),
    new Producto("Chaqueta", 60)
  ];
  descripcionInput: string = '';
  precioInput: number | null = 0;
  agregarProducto() {
    if (this.descripcionInput.trim() === "" || this.precioInput === null || this.precioInput <= 0) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const nuevoProducto = new Producto(this.descripcionInput, this.precioInput);
    this.productos.push(nuevoProducto);
    this.descripcionInput = '';
    this.precioInput = 0;
  }
}
