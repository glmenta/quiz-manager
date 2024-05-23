import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';
import { CreateQuizDto } from './dto/CreateQuiz.dto';

@Injectable()
export class QuizService {
    private readonly logger = new Logger(QuizService.name);

    constructor(@InjectRepository(QuizRepository) private quizRepository: QuizRepository) {}

    getAllQuiz() {
        this.logger.log('Fetching all quizzes');
        return [1, 2, 3, 4, 'test'];
    }

    async createNewQuiz(quiz: CreateQuizDto) {
        this.logger.log('Creating a new quiz');
        try {
        const result = await this.quizRepository.save(quiz);
        this.logger.log('New quiz created successfully');
        return result;
        } catch (error) {
        this.logger.error('Error creating a new quiz', error.stack);
        throw error;
        }
    }
}
