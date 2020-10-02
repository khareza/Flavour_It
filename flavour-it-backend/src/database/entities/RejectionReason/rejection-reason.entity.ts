import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Offer } from '../Offer/offer.entity';
import { Reason } from '../Reason/reason.entity';

@Entity()
export class RejectionReason extends BaseEntity {
  @Column()
  comment?: string;

  @Column()
  rejectionDate: Date;

  @ManyToOne(
    () => Offer,
    offer => offer.rejectionReasons
  )
  offer: Offer;

  @ManyToOne(
    () => Reason,
    reason => reason.rejectionReasons
  )
  reason: Reason;
}
