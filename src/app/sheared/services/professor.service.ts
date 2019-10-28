import { Injectable, Injector } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { AbstractApiService } from './abstract-api.service';
import { Professor } from '../models/professor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService extends AbstractApiService<Professor> {
  professor: Professor = new Professor();

  constructor(protected injector: Injector) {
    super(injector, 'professor');
  }

  create(professor: Professor): Observable<Professor> {
    return super.create(professor);
  }

  update(professor: Professor): Observable<Professor> {
    return super.update(professor);
  }
}
