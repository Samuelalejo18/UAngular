import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-for',
  imports: [],
  templateUrl: './componente-for.component.html',
  styleUrl: './componente-for.component.css'
})
export class ComponenteForComponent {
  title = "Directiva @For en Angular";
  tareas: string[] = [
    "Aprender Angular",
    "Desarrollar Aplicaciones",
    "Aprender TypeScript",
    "Aprender JavaScript",
    "Aprender HTML",
    "Aprender CSS",
    "Aprender Bootstrap",
    "Aprender Material",
    "Aprender Tailwind",
    "Aprender Angular Material",
    "Aprender PrimeNG",
  ];

  agregarTarea(tarea: string): void {
    if (tarea) {
      this.tareas.push(tarea);
    }

  }

}
