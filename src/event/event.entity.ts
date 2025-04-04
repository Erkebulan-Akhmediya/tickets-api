import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'event' })
export class MmaEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  place: string;

  @Column()
  date: Date;
}
