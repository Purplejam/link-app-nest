import { DatabaseModule } from './database.module'
import { join } from 'path'
import { LinkModule } from './link/link.module'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '../dist', '/client', '/build'),
		}),
		DatabaseModule,
		LinkModule,
	],
	providers: [],
})
export class AppModule {}
