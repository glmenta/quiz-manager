import { DataSource } from 'typeorm';
import { Quiz } from './modules/quiz/quiz.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'quiz',
    entities: [Quiz],
    synchronize: true,
});
