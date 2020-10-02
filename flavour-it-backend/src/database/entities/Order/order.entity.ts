import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Cuisine } from '../Cuisine/cuisine.entity';
import { DishType } from '../DishType/dish-type.entity';
import { ForbiddenIngredient } from '../ForbiddenIngredient/forbidden-ingredient.entity';
import { OrderIngredient } from '../OrderIngredient/order-ingredient.entity';
import { OrderReview } from '../OrderReview/order-review.entity';
import { User } from '../User/user.entity';
import { OrderStatusEnum } from './enums/order-status.enum';

@Entity()
export class Order extends BaseEntity {
  @Column()
  photo?: string;

  @Column()
  description?: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column()
  finishDate: Date;

  @Column()
  createDate: Date;

  @Column()
  time: string;

  @Column()
  cookingTimeMinutes: number;

  @Column()
  status: OrderStatusEnum;

  @ManyToOne(
    () => User,
    user => user.orders
  )
  principal: User;

  @ManyToOne(
    () => Cuisine,
    cuisine => cuisine.orders
  )
  cuisine: Cuisine;

  @ManyToOne(
    () => DishType,
    dishType => dishType.orders
  )
  dishType: DishType;

  @OneToMany(
    () => OrderIngredient,
    orderIngredient => orderIngredient.order
  )
  ingredients: OrderIngredient[];

  @OneToMany(
    () => ForbiddenIngredient,
    forbiddenIngredient => forbiddenIngredient.order
  )
  forbiddenIngredients: ForbiddenIngredient[];

  @OneToMany(
    () => OrderReview,
    orderReview => orderReview.order
  )
  reviews: OrderReview[];
}
