import { Module } from '@nestjs/common';
import { FighterService } from './fighter.service';
import { FighterController } from './fighter.controller';
import { WeightClassModule } from '../weight-class/weight-class.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from './fighter.entity';

@Module({
  controllers: [FighterController],
  providers: [FighterService],
  imports: [WeightClassModule, TypeOrmModule.forFeature([Fighter])],
})
export class FighterModule {}
