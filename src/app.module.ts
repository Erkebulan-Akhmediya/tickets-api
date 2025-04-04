import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FighterModule } from './fighter/fighter.module';
import { DatabaseModule } from './config/database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FightModule } from './fight/fight.module';
import { EventModule } from './event/event.module';
import { WeightClassModule } from './weight-class/weight-class.module';

@Module({
  imports: [
    FighterModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    FightModule,
    EventModule,
    WeightClassModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
