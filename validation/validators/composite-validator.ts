import { Validator } from "../contracts/validator";

export class CompositeValidator implements Validator {
    fieldName: string = ''
    constructor(private readonly validators: Validator[]) { }
    validate(data: any, fieldName: string): Error | void {
        for (let validator of this.validators) {
            if (validator.fieldName === fieldName) {
                const error = validator.validate(data, fieldName)
                if (error) {
                    return error
                }
            }
        }
    }
}