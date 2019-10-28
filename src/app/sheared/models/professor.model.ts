import { AbstractModel } from './abstract.model';


export class Professor extends AbstractModel {
  public name: string;

  constructor() {
    super();
  }

  static fromJson(jsonData: any): Professor {
    return Object.assign(new Professor(), jsonData);
  }

}
