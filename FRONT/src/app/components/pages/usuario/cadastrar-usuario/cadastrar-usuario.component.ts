import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/models/Usuario';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  nome!: string;
  nascimento!: string;
  usuarioid!: number;
  erro!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { } 

  ngOnInit(): void {
  }

  cadastrar(): void{
    let usuario : Usuario = {
      nome: this.nome,
      nascimento: this.nascimento
    };
    
    this.http.post<Usuario>('https://localhost:5001/api/usuario/cadastrar',
    usuario
  )
  .subscribe({
    next: (usuario) => {
      this.router.navigate(["pages/usuario/listar"]);
    },
    error: (error) => {
      if(error.status == 400){
        this.erro = "Erro de validação!";
      }else if(error.status == 0){
        this.erro = "Está faltando iniciar a sua API!";
      }
    },
  });
}
}
