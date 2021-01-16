import { IBeerRepository } from "../IBeerRepository";
import { Beer } from "../../entities/Beer";

export class MongoBeerRepository implements IBeerRepository{
  async save(beer: Beer): Promise<void>{
    console.log(beer);
  }
}
