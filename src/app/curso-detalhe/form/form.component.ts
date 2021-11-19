import { Curso } from './../../shared/curso.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CursoService } from 'src/app/shared/curso.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoriaService } from 'src/app/shared/categoria.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [

  ]
})
export class FormComponent implements OnInit {

  filter: string = "";
  cursosURL:'https://localhost:44351/api/Cursoes'
  cursos:any;
  http: any;

  constructor(public service: CursoService, public categoriaService:CategoriaService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.categoriaService.refreshList();
    this.getCursos();

  }

  getCursos(){
    this.http.get(this.cursosURL).subscribe((response: any) => {this.cursos= response
       },(error: any) =>{console.log(error)})

  }

  onSubmit(form: NgForm) {
    if (this.service.formData.cursoId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postCurso().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Enviado com sucesso.', 'Detalhe do curso enviado.')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putCurso().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Atualizado com sucesso.', 'Detalhe de curso registrado.')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Curso();
  }

}
