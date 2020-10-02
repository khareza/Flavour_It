import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Cuisine } from '../Cuisine/cuisine.entity';
import { DishType } from '../DishType/dish-type.entity';
import { OfferIngredient } from '../OfferIngredient/offer-ingredient.entity';
import { OfferReview } from '../OfferReview/offer-review.entity';
import { RejectionReason } from '../RejectionReason/rejection-reason.entity';
import { User } from '../User/user.entity';
import { OfferStatusEnum } from './enums/offer-status.enum';

@Entity()
export class Offer extends BaseEntity {
  @Column()
  photo?: string;

  @Column()
  description?: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column()
  createDate: Date;

  @Column()
  blockDate: Date;

  @Column()
  cookingTimeMinutes: string;

  @Column()
  status: OfferStatusEnum;

  @ManyToOne(
    () => User,
    user => user.offers
  )
  contractor: User;

  @ManyToOne(
    () => Cuisine,
    cuisine => cuisine.offers
  )
  cuisine: Cuisine;

  @ManyToOne(
    () => DishType,
    dishType => dishType.offers
  )
  dishType: DishType;

  @OneToMany(
    () => OfferIngredient,
    offerIngredient => offerIngredient.offer
  )
  ingredients: OfferIngredient[];

  @OneToMany(
    () => RejectionReason,
    rejectionReason => rejectionReason.reason
  )
  rejectionReasons: RejectionReason[];

  @OneToMany(
    () => OfferReview,
    offerReview => offerReview.offer
  )
  reviews: OfferReview[];
}
