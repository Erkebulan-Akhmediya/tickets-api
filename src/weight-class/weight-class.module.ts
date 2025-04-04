import { Module } from '@nestjs/common';
import { WeightClassService } from './weight-class.service';
import { WeightClassController } from './weight-class.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeightClass } from './weight-class.entity';

@Module({
  controllers: [WeightClassController],
  providers: [WeightClassService],
  exports: [WeightClassService],
  imports: [TypeOrmModule.forFeature([WeightClass])],
})
export class WeightClassModule {}
