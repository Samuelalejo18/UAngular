import { Component } from '@angular/core';

@Component({
  selector: 'app-event-blinding',
  imports: [],
  templateUrl: './event-blinding.component.html',
  styleUrl: './event-blinding.component.css'
})
export class EventBlindingComponent {
  mensaje: string = '';
  title = 'Event Blinding';

  resetearMensaje() {
    this.mensaje = '';

  }
  mostrarMensaje() {
    this.mensaje = 'Hola, has hecho click en el botón mostrar mensaje';
  }

}
