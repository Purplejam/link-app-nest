import { Body, Controller, Delete, Get, Param, Patch, Post, NotFoundException, Query } from '@nestjs/common'
import { LinkService } from './link.service'
import { Link } from './link.entity'
import { IsNotEmpty } from 'class-validator'
import { LinkNameExists } from '../validators/custom-name.validator'
import { UrlIsCorrect } from '../validators/custom-url.validator'
import { CheckIfIdExists } from '../validators/existing-id.validator'

class CreateLinkDto {
  @LinkNameExists()
  @IsNotEmpty()
  name: string

  @UrlIsCorrect()
  @IsNotEmpty()
  url: string
}

class UpdateLinkParamsDto {
  @CheckIfIdExists()
  @IsNotEmpty()
  id: string
}

class UpdateLinkBodyDto {
  @LinkNameExists()
  @IsNotEmpty()
  name: string

  @UrlIsCorrect()
  @IsNotEmpty()
  url: string
}


@Controller('links')
export class LinkController {
  constructor(private linkService: LinkService) {}

  @Post()
  createLink(@Body() createLinkDto: CreateLinkDto): Promise<Link> {
    const { name, url } = createLinkDto
    return this.linkService.createLink(name, url)
  }

  @Get()
  getLinks(): Promise<Link[]> {
    return this.linkService.getLinks()
  }

  @Get(':name')
  async findOneByName(@Param('name') name: string): Promise<Link | null> {
    const link = await this.linkService.findOneByName(name);
    console.log(link, name)
    return link;
  }

  @Patch()
  updateLink(
    @Query() params: UpdateLinkParamsDto,
    @Body() body: UpdateLinkBodyDto): Promise<Link> {
    const { name, url } = body
    let { id } = params
    return this.linkService.updateLink(+id, name, url)
  }

  @Delete()
  deleteLink(@Query() params: UpdateLinkParamsDto): Promise<void> {
    let { id } = params
    return this.linkService.deleteLink(+id)
  }
}
