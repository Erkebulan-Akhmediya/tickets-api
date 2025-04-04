import { Injectable, NotFoundException } from '@nestjs/common';
import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { WeightClass } from './weight-class.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WeightClassService {
  constructor(
    @InjectRepository(WeightClass)
    private readonly weightClassRepository: Repository<WeightClass>,
  ) {}

  async getByWeight(weight: number): Promise<WeightClass> {
    const weightClass: WeightClass | null =
      await this.weightClassRepository.findOne({
        where: {
          lowerRange: LessThanOrEqual(weight),
          upperRange: MoreThanOrEqual(weight),
        },
      });
    if (!weightClass) throw new NotFoundException('Weight class not found');
    return weightClass;
  }
}
