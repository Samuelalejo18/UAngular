import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteIfComponent } from './components/componente-if/componente-if.component';
import { LocalReferenceComponent } from './components/local-reference/local-reference.component';
import { ComponenteForComponent } from './components/componente-for/componente-for.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteIfComponent, LocalReferenceComponent, ComponenteForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular-seccion-5';
}
