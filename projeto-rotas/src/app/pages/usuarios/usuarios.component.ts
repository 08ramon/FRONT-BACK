import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Usuario {
  nome: string;
  email: string;
}

@Component({
  selector: 'app-usuarios',
  imports: [FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  usuarios: Usuario[] = [];
  nome: string = '';
  email: string = '';

  adicionarUsuario(): void {
    this.usuarios = [...this.usuarios, { nome: this.nome, email: this.email }];
    this.nome = '';
    this.email = '';
  }
}