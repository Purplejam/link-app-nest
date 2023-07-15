import { Entity, Column, PrimaryGeneratedColumn, getRepository } from 'typeorm'
import { IsNotEmpty, IsUrl, 
ValidatorConstraint, ValidationArguments, 
ValidationOptions, ValidatorConstraintInterface, registerDecorator, Validate } from 'class-validator'

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


