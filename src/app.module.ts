import { DatabaseModule } from './database.module'
import { Module } from '@nestjs/common'
import { LinkModule } from './link/link.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'


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
