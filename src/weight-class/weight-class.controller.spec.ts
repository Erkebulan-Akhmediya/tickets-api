import { Test, TestingModule } from '@nestjs/testing';
import { WeightClassController } from './weight-class.controller';
import { WeightClassService } from './weight-class.service';

describe('WeightClassController', () => {
  let controller: WeightClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeightClassController],
      providers: [WeightClassService],
    }).compile();

    controller = module.get<WeightClassController>(WeightClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
