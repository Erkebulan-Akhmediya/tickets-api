import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Fighter } from '../fighter/fighter.entity';
import { MmaEvent } from '../event/event.entity';

@Entity({ name: 'fight' })
export class Fight {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Fighter, { nullable: false })
  fighter1: Fighter;

  @ManyToOne(() => Fighter, { nullable: false })
  fighter2: Fighter;

  @ManyToOne(() => Fighter, { nullable: true })
  winner: Fighter;

  @Column({ name: 'with_fighter', nullable: false })
  withKnockout: boolean;

  @ManyToOne(() => MmaEvent, { nullable: false })
  event: MmaEvent;
}
