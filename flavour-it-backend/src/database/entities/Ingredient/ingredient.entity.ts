import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { ForbiddenIngredient } from '../ForbiddenIngredient/forbidden-ingredient.entity';
import { OrderIngredient } from '../OrderIngredient/order-ingredient.entity';
import { Unit } from '../Unit/unit.entity';

@Entity()
export class Ingredient extends BaseEntity {
  @Column()
  name: string;

  @Column()
  Icon: string;

  @ManyToOne(
    () => Unit,
    unit => unit.ingredients
  )
  unit: Unit;

  @OneToMany(
    () => OrderIngredient,
    orderIngredient => orderIngredient.ingredient
  )
  orders: OrderIngredient[];

  @OneToMany(
    () => ForbiddenIngredient,
    forbiddenIngredient => forbiddenIngredient.ingredient
  )
  forbiddenIngredients: ForbiddenIngredient[];
}
