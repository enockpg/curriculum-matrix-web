import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessorListComponent } from './professor-list/professor-list.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';


const routes: Routes = [
  {
    path: '',
    component: ProfessorListComponent,
    // canActivate: [AuthGuard], }
  },
  {
    path: 'new',
    component: ProfessorFormComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: ':id/edit',
    component: ProfessorFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
