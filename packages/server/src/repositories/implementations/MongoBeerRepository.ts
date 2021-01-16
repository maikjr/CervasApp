import { IBeerRepository } from "../IBeerRepository";
import { Beer } from "../../entities/Beer";
import {BeerModel} from '../mongoose-models/BeersModel';

export class MongoBeerRepository implements IBeerRepository{
  async save(beer: Beer): Promise<void>{
    const {name, id} = beer;
    await BeerModel.create({ name, id});
  }
  async index(): Promise<Beer[]>{
    const beers = await BeerModel.find({}).select('name');
    return beers;
  }
}
