import { CompositeValidator } from "../../../validation/validators/composite-validator";
import { EmailValidator } from "../../../validation/validators/email-validator";
import { RequiredFieldValidator } from "../../../validation/validators/required-field-validator";

export const makeSignInValidation = (): CompositeValidator => {
    const requiredFields = ['email', 'password']
    let validators = []
    for (let requiredField of requiredFields) {
        validators.push(new RequiredFieldValidator(requiredField))
    }
    validators.push(new EmailValidator('email'))
    return new CompositeValidator(validators)
}