import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
    @IsNotEmpty({ message: 'Quiz title is required' })
    @Length(3, 255, { message: 'Quiz title must be between 3 and 255 characters' })
    title: string;

    @IsNotEmpty({ message: 'Quiz description is required' })
    @Length(3, 255, { message: 'Quiz description must be between 3 and 255 characters' })
    description: string;
}
