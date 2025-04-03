import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'fighter' })
export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'last_name', type: 'varchar', length: 255 })
  lastName: string;

  @Column({ name: 'first_name', type: 'varchar', length: 255 })
  firstName: string;

  @Column({ name: 'middle_name', type: 'varchar', length: 255 })
  middleName: string;
}
