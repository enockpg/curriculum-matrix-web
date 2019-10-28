import { FieldErrorComponent } from './../../sheared/components/field-error.component';
import { SharedModule } from './../../sheared/shared.module';
import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfessorListComponent, ProfessorFormComponent],
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,
    ProfessorRoutingModule,
  ],
})
export class ProfessorModule { }
