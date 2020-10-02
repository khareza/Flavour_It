import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Offer } from '../Offer/offer.entity';
import { Order } from '../Order/order.entity';

@Entity()
export class DishType extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(
    () => Order,
    order => order.dishType
  )
  orders: Order[];

  @OneToMany(
    () => Offer,
    offer => offer.dishType
  )
  offers: Offer[];
}
