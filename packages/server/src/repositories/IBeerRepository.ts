import {Beer} from '../entities/Beer';

export interface IBeerRepository{
  save(beer: Beer): Promise<void>;
}
