import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Link } from './link.entity'

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(Link)
    private linkRepository: Repository<Link>,
  ) {}

  async createLink(name: string, url: string): Promise<Link> {
    const link = new Link()
    link.name = name
    link.url = url
    return this.linkRepository.save(link)
  }

  async getLinks(): Promise<Link[]> {
    return this.linkRepository.find()
  }

  async findOneByName(name: string): Promise<Link | null> {
    return this.linkRepository.findOne({ where: {name} })
  }

  async findOneById(id: number): Promise<Link | null> {
    return this.linkRepository.findOne({ where: {id} })
  }

  async updateLink(id: number, name: string, url: string): Promise<Link> {
    const link = await this.linkRepository.findOne({where: { id }})

    if (!link) {
      throw new NotFoundException('Link not found');
    }

    link.name = name
    link.url = url

    return this.linkRepository.save(link)
  }

  async deleteLink(id: number): Promise<void> {
    await this.linkRepository.delete(id)
  }
}