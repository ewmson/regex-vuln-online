export interface Regex {
    value: string // the value of the regex which is also used as the key
    validationResults: ValidationResult[]
}

export interface ValidationResult{
    validatorName: string,
    secondsToDecide: number,
    validationStatus :ValidationStatus,
}

export interface Vulnerable{
    pumpString?: string,
    prefix?: string,
    suffix ?:string,
}

export type ValidationStatus = 'Not Run' | 'Not Vulnerable' | 'Running' | Vulnerable
