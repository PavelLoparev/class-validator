import { ValidationOptions } from '../../ValidationOptions';
import { buildMessage, ValidateBy } from '../common/ValidateBy';

export const IS_DATE = 'isDate';

/**
 * Checks if a given value is a date.
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}

/**
 * Checks if a value is a date.
 */
export function IsDate(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_DATE,
      validator: {
        validate: (value, args): boolean => isDate(value),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + '$property must be a Date instance', validationOptions),
      },
    },
    validationOptions
  );
}
