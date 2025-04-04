import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'weight_class' })
export class WeightClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lowerRange: number;

  @Column()
  upperRange: number;

  @Column()
  name: string;
}
