import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data-source';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot(typeOrmConfig)],
  // imports: [
  //   QuizModule,
  //   TypeOrmModule.forRoot(AppDataSource.options)
  // ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
