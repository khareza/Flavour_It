import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Ingredient } from '../Ingredient/ingredient.entity';
import { Order } from '../Order/order.entity';

@Entity()
export class OrderIngredient extends BaseEntity {
  @Column('decimal', { precision: 5, scale: 2 })
  amount: number;

  @ManyToOne(
    () => Order,
    order => order.ingredients
  )
  order: Order;

  @ManyToOne(
    () => Ingredient,
    ingredient => ingredient.orders
  )
  ingredient: Ingredient;
}
