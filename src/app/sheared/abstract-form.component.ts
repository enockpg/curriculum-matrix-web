import { OnInit, Injector, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';


// import { FuncionarioUsuarioService } from '../services/funcionario-usuario.service';
import { throwError } from 'rxjs';
import { AbstractModel } from './models/abstract.model';
import { AbstractApiService } from './services/abstract-api.service';

const CAUSA = ' Erro ao solicitar veículo e o usuário logado não existir no sistema SGP';

export abstract class AbstractFormComponent<T extends AbstractModel> implements OnInit {
  currentAction: string;
  resourceForm: FormGroup;
  pageTitle: string;
  errors: any;
  serverErrorMessages: string[] = null;

  protected activatedRoute: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;
  // protected funcionarioUsuarioService: FuncionarioUsuarioService;
  protected usuarioLogado: any;
  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: AbstractApiService<T>,
    protected jsonDataToResourceFn: (jsonData: any) => T
  ) {
    this.activatedRoute = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.formBuilder = this.injector.get(FormBuilder);
    // this.funcionarioUsuarioService = this.injector.get(FuncionarioUsuarioService);
  }

  ngOnInit() {
    this.setCurrentAction();
    this.buildResourceForm();
    this.loadResource();
  }
  submitForm() {
      if (this.currentAction === 'new') {
        this.createResource();
      } else {
        this.updateResource();
      }
  }

  protected setCurrentAction() {
    if (this.activatedRoute.snapshot.url[0].path === 'new') { this.currentAction = 'new'; } else { this.currentAction = 'edit'; }
  }

  protected loadResource() {
    if (this.currentAction === 'edit') {
      this.activatedRoute.paramMap
        .pipe(
          switchMap(params => this.resourceService.findById(+params.get('id')))
        )
        .subscribe(
          resource => {
            this.resource = resource;
            this.resourceForm.patchValue(resource);
          },
          error => {
            this.errors = error;
          }
        );
    }
  }

  protected createResource() {
    const resource: T = this.resourceForm.value;
    this.resourceService.create(resource).subscribe(
      () => {
        this.actionsForSuccess(resource);
      },
      error => {
        this.errors = error;
      }
    );
  }

  protected updateResource() {
    const resource: T = this.resourceForm.value;
    this.resourceService.update(resource).subscribe(
      () => {
        this.actionsForSuccess(resource);
      },
      error => {
        this.errors = error;
      }
    );
  }

  protected actionsForSuccess(resource: T) {
    this.router.navigate([this.activatedRoute.snapshot.parent.url[0].path]);
  }

  protected abstract buildResourceForm(): void;
}
