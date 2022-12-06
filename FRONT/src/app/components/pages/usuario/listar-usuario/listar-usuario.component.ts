import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/Usuario';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent {
  usuarios!: Usuario[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Usuario[]>
    ("https://localhost:5001/api/usuario/listar")
    .subscribe({
        next : (usuarios) => {
          this.usuarios = usuarios;

          for(let usuario of usuarios){   
            console.log(usuario);
          }
        }
    });
  }


}
