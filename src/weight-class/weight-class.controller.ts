import { Controller } from '@nestjs/common';
import { WeightClassService } from './weight-class.service';

@Controller('weight-class')
export class WeightClassController {
  constructor(private readonly weightClassService: WeightClassService) {}
}
