import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class TaskDTO {
  @ApiProperty({ required: false, description: 'Código da tarefa' })
  @IsEmpty()
  codigo?: number;

  @ApiProperty({
    description: 'Descrição da tarefa',
    minLength: 3,
    maxLength: 10,
    example: 'Estudar',
  })
  @IsNotEmpty()
  @MinLength(3, { message: 'Mínimo de 3 caracteres' })
  @MaxLength(10, { message: 'Máximo de 10 caracateres' })
  description: string;

  @ApiProperty({
    required: false,
    description: 'Status de conclusão da tarefa',
    default: false,
  })
  @IsOptional()
  completed: boolean;
}
