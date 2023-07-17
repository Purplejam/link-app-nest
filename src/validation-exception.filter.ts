import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common'
import { Response } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp()
		const response = ctx.getResponse<Response>()
		const status = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR
		const errorMessage = exception.getResponse() || 'Internal Server Error'
		const errorResponse = {
			statusCode: status,
			errorMessage,
			errorType: exception.name,
		}

		response.status(status).json(errorResponse)
	}
}
