import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Ingredient } from '../Ingredient/ingredient.entity';
import { Offer } from '../Offer/offer.entity';

@Entity()
export class OfferIngredient extends BaseEntity {
  @Column('decimal', { precision: 5, scale: 2 })
  amount: number;

  @ManyToOne(
    () => Offer,
    offer => offer.ingredients
  )
  offer: Offer;

  @ManyToOne(
    () => Ingredient,
    ingredient => ingredient.orders
  )
  ingredient: Ingredient;
}
