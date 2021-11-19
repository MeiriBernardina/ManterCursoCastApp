import { Categoria } from './categoria.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44351/api/Categorias'
  formData: Categoria = new Categoria();
  list: Categoria[];

  postCategoria() {
    return this.http.post(this.baseURL, this.formData);
  }

  putCategoria() {
    return this.http.put(`${this.baseURL}/${this.formData.categoriaId}`, this.formData);
  }

  deleteCategoria(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Categoria[]);
  }

}
