import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Curso } from '../shared/curso.model';
import { CursoService } from '../shared/curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: [

  ]
})
export class CursoDetalheComponent implements OnInit {

  filter: string = "";
  cursosURL:'https://localhost:44351/api/Cursoes'
  cursos:any;

 constructor(public service: CursoService,
    private toastr: ToastrService, public http: HttpClient) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.getCursos();
  }

  getCursos(){
    this.http.get(this.cursosURL).subscribe((response: any) => {this.cursos= response
       },(error: any) =>{console.log(error)})

  }

  populateForm(selectedRecord: Curso) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Tem certeza que deseja deletar esse curso?')) {
      this.service.deleteCurso(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Curso deletado com sucesso.", '');
          },
          err => { console.log(err) }
        )
    }
  }

}
