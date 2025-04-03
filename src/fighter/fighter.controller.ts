import { Controller } from '@nestjs/common';
import { FighterService } from './fighter.service';

@Controller('fighter')
export class FighterController {
  constructor(private readonly fighterService: FighterService) {}
}
