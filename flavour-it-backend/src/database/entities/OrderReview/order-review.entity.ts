import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Order } from '../Order/order.entity';
import { ReviewStatusEnum } from '../review-status.enum';
import { User } from '../User/user.entity';
import { VoteEnum } from '../vote.enum';

@Entity()
export class OrderReview extends BaseEntity {
  @Column()
  comment?: string;

  @Column()
  vote: VoteEnum;

  @Column()
  creationDate: Date;

  @Column()
  status: ReviewStatusEnum;

  @Column('decimal', { precision: 2, scale: 2 })
  asExcepted: number;

  @Column('decimal', { precision: 2, scale: 2 })
  cooperation: number;

  @Column('decimal', { precision: 2, scale: 2 })
  executionSpeed: number;

  @ManyToOne(
    () => User,
    user => user.orderReviews
  )
  reviewer: User;

  @ManyToOne(
    () => Order,
    order => order.reviews
  )
  order: Order;
}
