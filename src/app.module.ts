import { DatabaseModule } from './database.module'
import { Module } from '@nestjs/common'
import { LinkModule } from './link/link.module'


@Module({
  imports: [DatabaseModule, LinkModule],
  providers: []
})
export class AppModule {}
