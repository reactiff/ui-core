export const isString = value => typeof value === 'string';
export const isNumber = value => typeof value === 'number';
export const isUndefined = value => value === undefined;
export const isNull = value => value === null;
export const isNullOrUndefined = value => isUndefined(value) || isNull(value);
export const isJsonPath = value => isString(value) ? value.substring(0, 7) === 'json://' : false;

