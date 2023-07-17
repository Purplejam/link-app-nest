import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConnectionOptions } from 'typeorm'

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'sql8.freemysqlhosting.net',
			port: 3306,
			username: 'sql8632793',
			password: 'DDfPjZa8Zm',
			database: 'sql8632793',
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
