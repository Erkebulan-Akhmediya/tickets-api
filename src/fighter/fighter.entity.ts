import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { WeightClass } from '../weight-class/weight-class.entity';

@Entity({ name: 'fighter' })
export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  team: string;

  @Column({ type: 'varchar', length: 255 })
  nationality: string;

  @Column({ name: 'birth_datae' })
  birthDate: Date;

  @Column({ name: 'birth_place', type: 'varchar', length: 255 })
  birthPlace: string;

  @Column({ name: 'weight' })
  weight: number;

  @Column({ name: 'nickname' })
  nickname: string;

  @ManyToOne(() => WeightClass, { nullable: false })
  weightClass: WeightClass;

  constructor(
    name: string,
    team: string,
    nationality: string,
    birthDate: Date,
    birthPlace: string,
    weight: number,
    nickname: string,
    weightClass: WeightClass,
  ) {
    this.name = name;
    this.team = team;
    this.nationality = nationality;
    this.birthDate = birthDate;
    this.birthPlace = birthPlace;
    this.weight = weight;
    this.nickname = nickname;
    this.weightClass = weightClass;
  }
}
