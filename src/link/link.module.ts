import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Link } from './link.entity'
import { LinkController } from './link.controller'
import { LinkNameExistsConstraint } from '../validators/custom-name.validator'
import { LinkService } from './link.service'
import { UrlCheckConstraint } from '../validators/custom-url.validator'
import { IsIdExistsConstraint } from '../validators/existing-id.validator'

@Module({
  imports: [TypeOrmModule.forFeature([Link])],
  providers: [
    LinkService, 
    LinkNameExistsConstraint, 
    UrlCheckConstraint, 
    IsIdExistsConstraint],
  controllers: [LinkController]
})
export class LinkModule {}
