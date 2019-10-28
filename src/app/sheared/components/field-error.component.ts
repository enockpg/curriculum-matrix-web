import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-error',
  template: `<p class='text-danger'>{{ errorMessage }}</p>`
})
export class FieldErrorComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('validate-field') formControl: FormControl;

  constructor() {}

  ngOnInit() {}

  public get errorMessage(): string | null {
    if (this.mustShowErrorMessage()) {
      return this.getErrorMessage();
    } else {
      return null;
    }
  }

  /**
   */
  private mustShowErrorMessage(): boolean {
    return this.formControl.invalid && this.formControl.touched;
  }

  /**
   * Return message for user
   */
  private getErrorMessage(): string | null {
    if (this.formControl.errors.required) {
      return 'Campo Obrigatório';
    } else if (this.formControl.errors.email) {
      return 'Formato de email inválido';
    } else if (this.formControl.errors.minlength) {
      const requiredLength = this.formControl.errors.minlength.requiredLength;
      return `Deve ter no mínimo ${requiredLength} caracteres`;
    } else if (this.formControl.errors.maxlength) {
      const requiredLength = this.formControl.errors.maxlength.requiredLength;
      return `Deve ter no máximo ${requiredLength} caracteres`;
    } else if (this.formControl.errors.max) {
      const requiredLength = this.formControl.errors.max.max;
      return `Não pode ser superior a ${requiredLength}`;
    } else if (this.formControl.errors.min) {
      const requiredLength = this.formControl.errors.min.min;
      return `Não pode ser inferior a ${requiredLength}`;
    }
  }
}
