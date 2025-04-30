import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './components/hijo/hijo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
