import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuario = {
    nombre: 'Samuel Monsalve',
    edad: 20,
    email: "samuelalejomonsalve@gmail.com"
  }
  
  tituloUsuario = `Hola mundo desde el nuevo componente  de usuario ${this.usuario.nombre}`;
  saludar(): string {
    return `Hola ${this.usuario.nombre}, tienes ${this.usuario.edad} años y tu correo es ${this.usuario.email}`;
  }

}
