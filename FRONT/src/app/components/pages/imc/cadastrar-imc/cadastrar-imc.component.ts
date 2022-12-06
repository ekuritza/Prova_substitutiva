import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imc } from 'src/models/Imc';
import { Usuario } from 'src/models/Usuario';

@Component({
  selector: 'app-cadastrar-imc',
  templateUrl: './cadastrar-imc.component.html',
  styleUrls: ['./cadastrar-imc.component.css']
})

export class CadastrarImcComponent implements OnInit {
  
  usuarioId!: number;
  usuarios?: Usuario[];
  alt!: number;
  peso!: number;

  constructor(
    private http: HttpClient ,private router: Router) {}

  ngOnInit(): void {
    this.http
      .get<Usuario[]>("https://localhost:5001/api/usuario/listar")
      .subscribe({
        next: (usuarios) => {
          this.usuarios = usuarios;
        },
      });
  }

  cadastrar(): void {
    let imc: Imc = {
      usuarioId: this.usuarioId,
      altura: this.alt,
      peso: this.peso
    };

    console.log(imc);
    this.http.post<Imc>("https://localhost:5001/api/imc/cadastrar", imc).subscribe({
      next: (vaga) => {
        this.router.navigate(["pages/imc/listar"]);
      },
    });
  }
}

