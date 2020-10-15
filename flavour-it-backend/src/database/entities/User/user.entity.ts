import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { BlockedUser } from '../BlockedUser/blocked-user.entity';
import { Offer } from '../Offer/offer.entity';
import { OfferReview } from '../OfferReview/offer-review.entity';
import { Order } from '../Order/order.entity';
import { OrderReview } from '../OrderReview/order-review.entity';
import { UserAllergy } from '../UserAllergy/user-allergy.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  birthDate?: Date;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  houseApartmentNumber?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  joinDate?: Date;

  @Column({ nullable: true })
  avatarUrl?: string;

  @Column({ default: 0 })
  rate: number;

  @Column({ default: 0 })
  votesUp: number;

  @Column({ default: 0 })
  votesDown: number;

  @Column({ default: 0 })
  offersAmount: number;

  @Column({ default: 0 })
  finishedOffersAmount: number;

  @Column({ default: 0 })
  activeOffersAmount: number;

  @Column({ default: 0 })
  ordersAmount: number;

  @Column({ default: 0 })
  finishedOrdersAmount: number;

  @Column({ default: 0 })
  activeOrdersAmount: number;

  @Column({ nullable: true })
  resetPasswordHash?: string;

  @Column({ nullable: true })
  activationHash?: string;

  @Column({ default: false })
  isActive: boolean;

  @OneToMany(
    () => Order,
    order => order.principal
  )
  orders: Order[];

  @OneToMany(
    () => BlockedUser,
    blockedUser => blockedUser.blockingUser
  )
  public blockingUsers!: BlockedUser[];

  @OneToMany(
    () => BlockedUser,
    blockedUser => blockedUser.blockedUser
  )
  public blockedUsers!: BlockedUser[];

  @OneToMany(
    () => UserAllergy,
    userAllergy => userAllergy.user
  )
  allergies: UserAllergy[];

  @OneToMany(
    () => Offer,
    offer => offer.dishType
  )
  offers: Offer[];

  @OneToMany(
    () => OrderReview,
    orderReview => orderReview.reviewer
  )
  orderReviews: OrderReview[];

  @OneToMany(
    () => OfferReview,
    offerReview => offerReview.reviewer
  )
  offerReviews: OfferReview[];
}
