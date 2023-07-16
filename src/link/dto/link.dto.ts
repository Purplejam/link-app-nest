import { IsNotEmpty, Length } from 'class-validator'
import { LinkNameExists } from '../../validators/custom-name.validator'
import { UrlIsCorrect } from '../../validators/custom-url.validator'
import { CheckIfIdExists } from '../../validators/existing-id.validator'

export class CreateLinkDto {
  @LinkNameExists()
  @IsNotEmpty()
  @Length(3, 25)
  name: string

  @UrlIsCorrect()
  @IsNotEmpty()
  @Length(8, 50)
  url: string
}

export class UpdateLinkParamsDto {
  @CheckIfIdExists()
  @IsNotEmpty()
  id: string
}

export class UpdateLinkBodyDto {
  @LinkNameExists()
  @IsNotEmpty()
  @Length(3, 25)
  name: string

  @UrlIsCorrect()
  @IsNotEmpty()
  @Length(8, 50)
  url: string
}