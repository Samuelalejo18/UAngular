import { Component } from '@angular/core';
import { ProductoComponent } from "../listado-productos/producto/producto.component";

@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  title = 'Listado de Productos';
}
