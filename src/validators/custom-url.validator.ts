import {
	registerDecorator,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
	ValidationArguments,
} from 'class-validator'
import { Injectable, Inject } from '@nestjs/common'
import { LinkService } from '../link/link.service'
import { urlRegexValidator } from '../lib/is-url-regex'

@ValidatorConstraint({ name: 'urlIsCorrect', async: true })
@Injectable()
export class UrlCheckConstraint implements ValidatorConstraintInterface {
	constructor(private readonly linkService: LinkService) {}

	async validate(url: string, _validationArguments: ValidationArguments): Promise<boolean> {
		//Checks if a string is a url
		return urlRegexValidator(url)
	}

	defaultMessage(_validationArguments: ValidationArguments): string {
		return 'Link must contain http, https or www'
	}
}

export function UrlIsCorrect(validationOptions?: ValidationOptions) {
	return function (object: object, propertyName: string) {
		registerDecorator({
			target: object.constructor,
			propertyName,
			options: validationOptions,
			constraints: [],
			validator: UrlCheckConstraint,
		})
	}
}
