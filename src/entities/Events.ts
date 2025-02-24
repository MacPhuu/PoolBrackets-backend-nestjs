import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("events")
export class Events {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  venue: string;

  @Column()
  location: string;

  @Column()
  date: Date;

  @Column()
  is_happen: boolean;

  @Column({ nullable: true })
  create_at?: Date;

  @Column({ nullable: true })
  update_at?: Date;
}
