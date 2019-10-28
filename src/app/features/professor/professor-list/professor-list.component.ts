import { Router } from '@angular/router';
import { ProfessorService } from './../../../sheared/services/professor.service';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {
  page = 0;
  count = 5;
  pages: Array<number>;
  message: {};
  classCss: {};
  listProfessesor = [];


  constructor(private professorService: ProfessorService, private router: Router) {

  }
  ngOnInit(): void {
    this.getList();
  }

  private getList() {
    this.professorService.findAllPageable().subscribe((responseApi: any) => {
      console.log(responseApi);
      this.listProfessesor = responseApi.content;
      this.pages = new Array(responseApi.totalPages);
    }, err => {
      console.log(err);
    });
  }

  edit(id: string) {
    this.router.navigate([`professor/${id}/edit`]);
  }
}
