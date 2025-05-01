import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  title1: string = 'Two Way Data Binding calculadora';
  title2: string = 'Property Binding calculadora';
  operando1: number = 0;
  operando2: number = 0;
  resultado: number = 0;

  operando1_1: number = 0;
  operando2_2: number = 0;
  resultado1: number = 0;

  tomarOperando1(event: Event) {
    const elementoInput = event.target as HTMLInputElement
    this.operando1_1 = Number(elementoInput.value);
  }
  tomarOperando2(event: Event) {
    const elementoInput = event.target as HTMLInputElement
    this.operando2_2 = Number(elementoInput.value);
  }

  sumar() {
    this.resultado = this.operando1 + this.operando2;
  }
  sumar2() {
    this.resultado1 = this.operando1_1 + this.operando2_2;
  }


  /*
  sumar(): number {
    return this.operando1 + this.operando2;
  }

  mostrarResultado(): void {
    this.resultado = this.sumar();
  }
    */
}
