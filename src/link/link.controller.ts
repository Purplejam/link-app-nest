import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	NotFoundException,
	Query,
	Res,
} from '@nestjs/common'
import { LinkService } from './link.service'
import { CreateLinkDto, UpdateLinkParamsDto, UpdateLinkBodyDto } from './dto/link.dto'
import { Response } from 'express'

@Controller('links')
export class LinkController {
	constructor(private linkService: LinkService) {}

	@Post()
	async createLink(
		@Body() createLinkDto: CreateLinkDto,
		@Res() res: Response,
	): Promise<Response | void> {
		const { name, url } = createLinkDto
		const link = await this.linkService.createLink(name, url)
		return res.status(201).json({
			statusCode: 201,
			link,
		})
	}

	@Get()
	async getLinks(@Res() res: Response): Promise<Response | void> {
		const links = await this.linkService.getLinks()
		if (!links) {
			throw new NotFoundException('Links not found, try again later')
		}
		return res.status(200).json({
			statusCode: 200,
			links,
		})
	}

	@Get(':name')
	async findOneByName(@Param('name') name: string, @Res() res: Response): Promise<Response | void> {
		const link = await this.linkService.findOneByName(name)
		if (!link) {
			throw new NotFoundException('Link not found with this id')
		}
		return res.status(200).json({
			statusCode: 200,
			link,
		})
	}

	@Patch()
	async updateLink(
		@Query() params: UpdateLinkParamsDto,
		@Body() body: UpdateLinkBodyDto,
		@Res() res: Response,
	): Promise<Response | void> {
		const { url } = body
		const id = Number(params.id)
		const link = await this.linkService.updateLink(id, url)
		if (!link) {
			throw new NotFoundException('Link not found')
		}
		return res.status(201).json({
			statusCode: 201,
			link,
		})
	}

	@Delete()
	async deleteLink(
		@Res() res: Response,
		@Query() params: UpdateLinkParamsDto,
	): Promise<Response | void> {
		const id = Number(params.id)
		await this.linkService.deleteLink(id)

		return res.status(202).json({
			statusCode: 202,
		})
	}
}
