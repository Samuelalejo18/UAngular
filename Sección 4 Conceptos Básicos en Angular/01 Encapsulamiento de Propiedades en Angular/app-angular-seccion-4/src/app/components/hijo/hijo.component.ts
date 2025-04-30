import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  private titulo = "Titulo componente Hijo";

  //Getter de TypeScript
  get mostrarTitulo(): string {
    return this.titulo;
  }

  //getter de JavaScript
  getTitulo() {
    return this.titulo;
  }
}
