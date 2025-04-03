import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
