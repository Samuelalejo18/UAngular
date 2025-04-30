import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./components/nuevo-componente/nuevo-componente.component";
import { ComponenteEnLineaComponent } from "./components/componente-en-linea/componente-en-linea.component";
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PadreComponent } from './components/padre/padre.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteEnLineaComponent, UsuarioComponent, PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Universidad Angular';
}
