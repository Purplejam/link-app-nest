import {
	registerDecorator,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
	ValidationArguments,
} from 'class-validator'
import { Injectable } from '@nestjs/common'
import { LinkService } from '../link/link.service'

@ValidatorConstraint({ name: 'checkIfIdExists', async: true })
@Injectable()
export class IsIdExistsConstraint implements ValidatorConstraintInterface {
	constructor(private readonly linkService: LinkService) {}

	async validate(id: string, _validationArguments: ValidationArguments): Promise<boolean> {
		const linkId = +id
		const existingLink = await this.linkService.findOneById(linkId)
		if (existingLink === null) {
			return false
		}
		return true
	}

	defaultMessage(_validationArguments: ValidationArguments): string {
		return `There is no link with such id`
	}
}

export function CheckIfIdExists(validationOptions?: ValidationOptions) {
	return function (object: object, propertyName: string) {
		registerDecorator({
			target: object.constructor,
			propertyName,
			options: validationOptions,
			constraints: [],
			validator: IsIdExistsConstraint,
		})
	}
}
