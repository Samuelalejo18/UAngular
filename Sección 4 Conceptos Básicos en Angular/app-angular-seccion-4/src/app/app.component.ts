import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventBlindingComponent } from './components/event-blinding/event-blinding.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventBlindingComponent, PropertyBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular-seccion-4';
}
