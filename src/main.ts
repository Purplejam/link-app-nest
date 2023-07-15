import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './validation-exception.filter'
import { ValidationPipe } from '@nestjs/common'
import { useContainer } from "class-validator"


async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true })

  app.useGlobalFilters(new HttpExceptionFilter())

 
  await app.listen(3000)
  console.log('server is listening on port 3000')
}

bootstrap()