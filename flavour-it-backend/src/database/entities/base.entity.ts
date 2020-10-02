import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdOn: Date;

  @Column({ nullable: true })
  modifiedOn?: Date;

  @BeforeUpdate()
  setUpdatedOn(): void {
    this.modifiedOn = new Date();
  }

  @BeforeInsert()
  setCreatedOn(): void {
    this.createdOn = new Date();
  }
}
