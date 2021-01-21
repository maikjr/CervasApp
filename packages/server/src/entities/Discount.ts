import { uuid } from 'uuidv4'

export class Discount {

  public readonly id: string;

  public beer: string;
  public coordinates: number[];
  public price: string;
  public establishment: string;
  public address: string;

  constructor(props: Omit<Discount, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
