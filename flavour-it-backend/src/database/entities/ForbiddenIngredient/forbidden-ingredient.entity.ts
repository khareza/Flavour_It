import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Ingredient } from '../Ingredient/ingredient.entity';
import { Order } from '../Order/order.entity';

@Entity()
export class ForbiddenIngredient extends BaseEntity {
  @ManyToOne(
    () => Ingredient,
    ingredient => ingredient.forbiddenIngredients
  )
  ingredient: Ingredient;

  @ManyToOne(
    () => Order,
    order => order.forbiddenIngredients
  )
  order: Order;
}
