import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, MinLength } from 'class-validator';
import { CreateProjectDto } from './create-project.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {

    @IsNotEmpty({ message: "O campo Título não pode estar vazio." })
    @MinLength(3, { message: "O campo Título precisa ter no mínimo 3 caracteres." })
    title: string;

    @IsNotEmpty({ message: "O campo Descrição não pode estar vazio." })
    description: string;

    @IsNotEmpty({ message: "A data não pode estar vazia." })
    created_at: Date = new Date();

}
