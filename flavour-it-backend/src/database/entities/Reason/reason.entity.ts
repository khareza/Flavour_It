import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { RejectionReason } from '../RejectionReason/rejection-reason.entity';

@Entity()
export class Reason extends BaseEntity {
  @Column()
  reason: string;

  @OneToMany(
    () => RejectionReason,
    rejectionReason => rejectionReason.reason
  )
  rejectionReasons: RejectionReason[];
}
