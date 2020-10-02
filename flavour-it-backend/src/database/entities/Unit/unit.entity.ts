import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Ingredient } from '../Ingredient/ingredient.entity';

@Entity()
export class Unit extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(
    () => Ingredient,
    ingredient => ingredient.unit
  )
  ingredients: Ingredient[];
}
