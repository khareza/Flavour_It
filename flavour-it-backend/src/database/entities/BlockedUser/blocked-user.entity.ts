import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from '../User/user.entity';

@Entity()
export class BlockedUser extends BaseEntity {
  @Column()
  blockDate: Date;

  @Column()
  isActive: boolean;

  @ManyToOne(
    () => User,
    user => user.blockingUsers
  )
  blockingUser: User;

  @ManyToOne(
    () => User,
    user => user.blockedUsers
  )
  blockedUser: User;
}
