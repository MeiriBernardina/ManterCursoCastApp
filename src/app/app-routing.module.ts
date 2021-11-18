import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'curso', component: CursoDetalheComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ToastrModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
