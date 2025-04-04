import { Body, Controller, Post } from '@nestjs/common';
import { FighterService } from './fighter.service';
import { CreateFighterDto } from './dto/create-fighter.dto';

@Controller('fighter')
export class FighterController {
  constructor(private readonly fighterService: FighterService) {}

  @Post()
  async create(@Body() fighter: CreateFighterDto): Promise<void> {
    await this.fighterService.create(fighter);
  }
}
