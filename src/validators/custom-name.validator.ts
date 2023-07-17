import {
	registerDecorator,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
	ValidationArguments,
} from 'class-validator'
import { Injectable } from '@nestjs/common'
import { Link } from '../link/link.entity'
import { LinkService } from '../link/link.service'

@ValidatorConstraint({ name: 'linkNameExists', async: true })
@Injectable()
export class LinkNameExistsConstraint implements ValidatorConstraintInterface {
	constructor(private readonly linkService: LinkService) {}

	async validate(name: string, _validationArguments: ValidationArguments): Promise<boolean> {
		const existingLink = await this.linkService.findOneByName(name)
		if (existingLink !== null) return false
		return true
	}

	defaultMessage(_validationArguments: ValidationArguments): string {
		return 'Link with this name already exists!'
	}
}

export function LinkNameExists(validationOptions?: ValidationOptions) {
	return function (object: object, propertyName: string) {
		registerDecorator({
			target: object.constructor,
			propertyName,
			options: validationOptions,
			constraints: [],
			validator: LinkNameExistsConstraint,
		})
	}
}
