import { Entity, ManyToOne } from 'typeorm';
import { Allergy } from '../Allergy/allergy.entity';
import { BaseEntity } from '../base.entity';
import { User } from '../User/user.entity';

@Entity()
export class UserAllergy extends BaseEntity {
  @ManyToOne(
    () => User,
    user => user.allergies
  )
  user: User;

  @ManyToOne(
    () => Allergy,
    user => user.users
  )
  allergy: Allergy;
}
