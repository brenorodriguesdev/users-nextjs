import { Validator } from "../contracts/validator";

export class RequiredFieldValidator implements Validator {
    fieldName: string = ''
    constructor(fieldName: string) { this.fieldName = fieldName }
    validate(data: any): Error | void {
        if (!data[this.fieldName]) {
            return new Error(`esse campo é obrigatório!`)
        }
    }
}