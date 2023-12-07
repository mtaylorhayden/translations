import { PartialType } from '@nestjs/mapped-types';
import { CreateTranslationDto } from './create-translation.dto';

export class UpdateTranslationDto extends PartialType(CreateTranslationDto) {
  englishWord: string;
  turkishInfinitive: string;
  turkishConjugated: string;
}
