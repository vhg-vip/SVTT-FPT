export class IEntity {
  // EmptyGuid = '00000000-0000-0000-0000-000000000000';
  // Id: string = this.EmptyGuid;
  id: number;
  IsEdit: boolean = false;
  IsSelected: boolean = false;
  IsActive: boolean = false;
  Errors: any = {};
  Code: string = null;
  Name: string = null;
  Filter: String = null;
  HtmlErrors: string = null;
  constructor() {

  }
  Clone(Entity: IEntity): IEntity {
    return JSON.parse(JSON.stringify(Entity));
  }

  Init() {
    for (const key in this) {
      if (this.hasOwnProperty(key) && this[key.toString()] != null) {
        this.Errors[key] = this[key.toString()];
      }
    }
  }
}
