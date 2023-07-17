import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConnectionOptions } from 'typeorm'
import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.DB_HOST_NAME,
			port: 3306,
			username: process.env.DB_HOST_USER,
			password: process.env.DB_HOST_PASSWORD,
			database: process.env.DB_HOST_BASENAME,
			entities: [__dirname + '/**/*.entity{.ts,.js}'],
			synchronize: true,
		}),
	],
})

export class DatabaseModule {
	constructor() {
		console.log('Connected to the MySQL database')
		
	}
}
