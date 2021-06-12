export interface Validator {
    fieldName: string
    validate(data: any, fieldName?: string): Error | void
}