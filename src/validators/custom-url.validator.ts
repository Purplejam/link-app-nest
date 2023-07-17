import {
	registerDecorator,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
	ValidationArguments,
} from 'class-validator'
import { Injectable, Inject } from '@nestjs/common'
import { getRepository } from 'typeorm'
import { Link } from '../link/link.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ModuleRef } from '@nestjs/core'
import { LinkModule } from '../link/link.module'
import { LinkService } from '../link/link.service'
import { urlRegexValidator } from '../lib/is-url-regex'

@ValidatorConstraint({ name: 'urlIsCorrect', async: true })
@Injectable()
export class UrlCheckConstraint implements ValidatorConstraintInterface {
	constructor(private readonly linkService: LinkService) {}

	async validate(url: string, _validationArguments: ValidationArguments): Promise<boolean> {
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
