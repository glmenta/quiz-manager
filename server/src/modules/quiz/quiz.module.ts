import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { QuizRepository } from './quiz.repository';

@Module({
    imports: [TypeOrmModule.forFeature([QuizRepository])],
    controllers: [QuizController],
    providers: [QuizService],
})
export class QuizModule {}
