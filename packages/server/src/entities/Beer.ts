import { uuid } from 'uuidv4'

export class Beer {

  public readonly id: string;
  public name: string;

  constructor(props: Omit<Beer, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
