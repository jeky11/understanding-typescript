export function validate(validatableInput) {
    const value = validatableInput.value;
    const isString = typeof value === 'string';
    const isNumber = typeof value === 'number';
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && value.toString().trim().length !== 0;
    }
    if (validatableInput.minLenght != null && isString) {
        isValid = isValid && value.length > validatableInput.minLenght;
    }
    if (validatableInput.maxLength != null && isString) {
        isValid = isValid && value.length < validatableInput.maxLength;
    }
    if (validatableInput.min != null && isNumber) {
        isValid = isValid && value > validatableInput.min;
    }
    if (validatableInput.max != null && isNumber) {
        isValid = isValid && value < validatableInput.max;
    }
    return isValid;
}
//# sourceMappingURL=validation.js.map