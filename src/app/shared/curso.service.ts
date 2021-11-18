import { Curso } from './curso.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CursoService {

/*   getCursos() {
    return [
     new Curso('Multiplataforma'),
     new Curso('Banco de dados'),
     new Curso('Metodologia'),
     new Curso('Comportamento'),
     new Curso('Comunicacao')
     ];
   }
 */

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44351/api/Cursoes'
  formData: Curso = new Curso();
  list: Curso[];

  postCurso() {
    return this.http.post(this.baseURL, this.formData);
  }

  putCurso() {
    return this.http.put(`${this.baseURL}/${this.formData.cursoId}`, this.formData);
  }

  deleteCurso(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Curso[]);
  }

}

