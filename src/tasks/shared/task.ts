import {
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class TaskDTO {
  @IsEmpty()
  codigo?: number;

  @IsNotEmpty()
  @MinLength(3, { message: 'Mínimo de 3 caracteres' })
  @MaxLength(10, { message: 'Máximo de 10 caracateres' })
  description: string;

  @IsOptional()
  completed: boolean;
}
