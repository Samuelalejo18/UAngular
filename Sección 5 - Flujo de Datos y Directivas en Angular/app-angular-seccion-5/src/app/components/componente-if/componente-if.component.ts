import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-if',
  imports: [],
  templateUrl: './componente-if.component.html',
  styleUrl: './componente-if.component.css'
})
export class ComponenteIfComponent {
  title = "Directiva @if en Angular";

  isAuthenticated: boolean = false;

  alternarAutenticacion(): void {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
