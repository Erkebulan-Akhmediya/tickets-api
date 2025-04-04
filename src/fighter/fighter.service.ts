import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Fighter } from './fighter.entity';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { WeightClass } from '../weight-class/weight-class.entity';
import { WeightClassService } from '../weight-class/weight-class.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FighterService {
  constructor(
    @InjectRepository(Fighter)
    private readonly fighterRepository: Repository<Fighter>,
    private readonly weightClassService: WeightClassService,
  ) {}

  async create(fighterDto: CreateFighterDto): Promise<void> {
    const weightClass: WeightClass = await this.weightClassService.getByWeight(
      fighterDto.weight,
    );
    const fighter = new Fighter(
      fighterDto.name,
      fighterDto.team,
      fighterDto.nationality,
      fighterDto.birthDate,
      fighterDto.birthPlace,
      fighterDto.weight,
      fighterDto.nickname,
      weightClass,
    );
    await this.fighterRepository.save(fighter);
  }
}
