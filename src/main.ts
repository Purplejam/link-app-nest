import 'reflect-metadata'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './validation-exception.filter'
import { NestFactory } from '@nestjs/core'
import { Request, Response } from 'express'
import { useContainer } from 'class-validator'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.enableCors()

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			whitelist: true,
			forbidNonWhitelisted: true,
		}),
	)

	useContainer(app.select(AppModule), { fallbackOnErrors: true })

	app.useGlobalFilters(new HttpExceptionFilter())

	await app.listen(5000)
	console.log('server is listening on port 5000')
}

bootstrap()
