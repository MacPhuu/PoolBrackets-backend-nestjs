import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("players")
export class Players {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nation: string;

  @Column({ nullable: true })
  portrait?: string;

  @Column()
  point: string;

  @Column()
  is_active: boolean;

  @Column({ nullable: true })
  create_at?: Date;

  @Column({ nullable: true })
  update_at?: Date;
}
