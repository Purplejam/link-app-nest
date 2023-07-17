import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'

@Entity()
export class Link {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	@IsNotEmpty()
	name: string

	@Column()
	@IsNotEmpty()
	url: string
}
