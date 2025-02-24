import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  is_active: boolean;

  @Column({ nullable: true })
  create_at?: Date;

  @Column({ nullable: true })
  update_at?: Date;
}
