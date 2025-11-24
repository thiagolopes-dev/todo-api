import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Todo API')
    .setDescription('API para gerenciamento de tarefas')
    .setVersion('1.0')
    .addTag('tasks')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors({
    origin: ['http://localhost:4200', 'https://your-frontend-domain.com'], // Allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow cookies or authentication tokens
    allowedHeaders: 'Content-Type, Accept, Authorization', // Allowed request headers
  });
  await app.listen(3000);
  console.log(`Aplicação rodando em: http://localhost:3000`);
  console.log(`Documentação Swagger disponível em: http://localhost:3000/api`);
}
bootstrap();
