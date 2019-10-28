import { ProfessorService } from './../../../sheared/services/professor.service';
import { Professor } from './../../../sheared/models/professor.model';
import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';


import { Observable } from 'rxjs';
import { AbstractFormComponent } from 'src/app/sheared/abstract-form.component';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent extends AbstractFormComponent<Professor> implements OnInit {
  public dataSaida = new Date();
  public horaSaida = new Date();
  public dataRetorno = new Date();
  public horaRetorno = new Date();
  constructor(protected service: ProfessorService, protected injector: Injector) {
    super(injector, new Professor(), service, Professor.fromJson);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: null,
      name: ['', [Validators.required,
      Validators.maxLength(80),
        , Validators.minLength(6)]]
    });
  }


}
