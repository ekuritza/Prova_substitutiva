import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarUsuarioComponent } from './components/pages/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { CadastrarImcComponent } from './components/pages/imc/cadastrar-imc/cadastrar-imc.component';
import { ListarImcComponent } from './components/pages/imc/listar-imc/listar-imc.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarUsuarioComponent } from './components/pages/usuario/listar-usuario/listar-usuario.component'


@NgModule({
  declarations: [
    AppComponent,
    CadastrarUsuarioComponent,
    CadastrarImcComponent,
    ListarImcComponent,
    ListarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
