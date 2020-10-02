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
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  birthDate: Date;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  houseApartmentNumber: string;

  @Column()
  phone: string;

  @Column()
  joinDate: Date;

  @Column()
  avatarUrl: string;

  @Column()
  rate: number;

  @Column()
  votesUp: number;

  @Column()
  votesDown: number;

  @Column()
  offersAmount: number;

  @Column()
  finishedOffersAmount: number;

  @Column()
  activeOffersAmount: number;

  @Column()
  ordersAmount: number;

  @Column()
  finishedOrdersAmount: number;

  @Column()
  activeOrdersAmount: number;

  @Column()
  resetPasswordHash: string;

  @Column()
  activationHash: string;

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
