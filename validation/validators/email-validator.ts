import validator from "validator";
import { Validator } from "../contracts/validator";

export class EmailValidator implements Validator {
    fieldName: string = ''
    constructor(fieldName: string) { this.fieldName = fieldName }
    validate(data: any): Error | void {
        const isValid = validator.isEmail(data[this.fieldName])
        if (!isValid) {
            return new Error(`esse campo é inválido!`)
        }
    }
}