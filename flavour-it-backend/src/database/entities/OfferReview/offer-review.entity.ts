import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Offer } from '../Offer/offer.entity';
import { ReviewStatusEnum } from '../review-status.enum';
import { User } from '../User/user.entity';
import { VoteEnum } from '../vote.enum';

@Entity()
export class OfferReview extends BaseEntity {
  @Column()
  comment?: string;

  @Column()
  vote: VoteEnum;

  @Column()
  creationDate: Date;

  @Column()
  status: ReviewStatusEnum;

  @Column('decimal', { precision: 2, scale: 2 })
  workingConditions: number;

  @Column('decimal', { precision: 2, scale: 2 })
  cooperation: number;

  @Column('decimal', { precision: 2, scale: 2 })
  asDescribed: number;

  @ManyToOne(
    () => User,
    user => user.offerReviews
  )
  reviewer: User;

  @ManyToOne(
    () => Offer,
    offer => offer.reviews
  )
  offer: Offer;
}
