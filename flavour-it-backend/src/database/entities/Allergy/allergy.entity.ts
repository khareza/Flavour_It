import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { UserAllergy } from '../UserAllergy/user-allergy.entity';

@Entity()
export class Allergy extends BaseEntity {
  @Column()
  name: string;

  @Column()
  icon?: string;

  @OneToMany(
    () => UserAllergy,
    userAllergy => userAllergy.allergy
  )
  users: UserAllergy[];
}
