import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FighterModule } from './fighter/fighter.module';
import { DatabaseModule } from './config/database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    FighterModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
