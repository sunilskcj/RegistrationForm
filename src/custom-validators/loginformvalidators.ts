import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms"

export class FormValidator {
    public static get Length(): ValidatorFn {

        const validateLength = (control: AbstractControl): ValidationErrors | null => {
            const inputData = <string>control.value
            if (inputData.length < 5 || inputData.length > 10)
                return {
                    lengtherror:
                    {
                        message: 'Length should be between 6 and 12',
                        status: true,
                        maximumength: 10,
                        minimumlength: 5,
                        currentlength: inputData.length
                    }
                }
            else
                return null
        }

        return validateLength;
    }

    public static get _isUpperC(): ValidatorFn {

        const validateoneUpC = (control: AbstractControl): ValidationErrors | null => {
            const inputData = <string>control.value
            let doesUppercaseExist = false
                        for (let i = 0; i < inputData.length; i++) {
                            const c = inputData[i];
                            if (c >= 'A' && c <= 'Z') {
                                doesUppercaseExist = true
                                break;
                            }
                        }

                        if (doesUppercaseExist)  return null
                                            
                        else return { noUpperCase: { message: 'No uppercase character is present, Enter atleast one Uppercase', status: true } }
        }      
                       

        return validateoneUpC;
    }
    public static get _isLowerC(): ValidatorFn {

        const validateoneLowC = (control: AbstractControl): ValidationErrors | null => {
            const inputData = <string>control.value
            let doesLowercaseExist = false
                        for (let i = 0; i < inputData.length; i++) {
                            const c = inputData[i];
                            if (c >= 'a' && c <= 'z') {
                                doesLowercaseExist = true
                                break;
                            }
                        }

                        if (doesLowercaseExist)  return null
                                            
                        else return { noLowerCase: { message: 'No lowercase character is present, Enter atleast one Lowercase', status: true } }
        }      
                       

        return validateoneLowC;
    }
    public static get _isdigit(): ValidatorFn {

        const validateoneDigit = (control: AbstractControl): ValidationErrors | null => {
            const inputData = <string>control.value
            let doesDigitExist = false
            let reg = /\d+/ //[^0-9]  [^A-Za-z0-9]
            if(inputData.match(reg)) doesDigitExist = true

            if (doesDigitExist)  return null
                                            
            else return { noDigit: { message: 'No Digits is present, Enter atleast one Digits', status: true } }
        }      
                       

        return validateoneDigit;
    }

    public static get _isSpecialC(): ValidatorFn {

        const validateoneSplC = (control: AbstractControl): ValidationErrors | null => {
            const inputData = <string>control.value
            let doesDigitExist = false
            let reg = "[^A-Za-z0-9]" //[^\p{L}\d\s_] [^A-Za-z0-9]  "^"" => Not
            if(inputData.match(reg)) doesDigitExist = true

            if (doesDigitExist)  return null
                                            
            else return { noSplC: { message: 'No Special character is present, Enter atleast one Special character', status: true } }
        }      
                       

        return validateoneSplC;
    }

    public static get _isC(): ValidatorFn {

        const validateoneSplC = (control: AbstractControl): ValidationErrors | null => {
            const inputData = <string>control.value
            let doesDigitExist = false
            let reg = /\d/ //[^\p{L}\d\s_] [^A-Za-z0-9]  "^"" => Not
            if(inputData.match(reg)) doesDigitExist = true

            if (doesDigitExist)  return null
                                            
            else return { isC: { message: 'No Special character is present, Enter atleast one Special character', status: true } }
        }      
                       

        return validateoneSplC;
    }
    // public static get _congirmPassword(): ValidatorFn {

    //     const validateoneSplC = (control: AbstractControl): ValidationErrors | null => {
    //         const password = control.get("psw")
    //         const re_password = control.get("rpsw")
    //         let isequal = false
    //         if(password && re_password && password.value != re_password.value) isequal = true

    //         if (isequal)  return null
                                            
    //         else return { misMatch: { message: 'No Special character is present, Enter atleast one Special character', status: true } }
    //     }      
                       

    //     return validateoneSplC;
    // }

    // public static  get _congirmPassword(): ValidatorFn {

    //     const validateoneSplC = (control: AbstractControl):{[key : string] : boolean} | null => {
    //         console.log(control);
            
            
    //         const re_password = control.value
    //         return password && re_password && password.value != re_password.value ? {'misMatch' : true} : null 

    //     }      
                       

    //     return validateoneSplC;
    // }

}