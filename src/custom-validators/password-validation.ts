import { AbstractControl } from "@angular/forms"

export const ConPass = (control: AbstractControl):{[key : string] : boolean} | null => {
    const password = control.get("psw")
    const re_password = control.get("rpsw")
    return password && re_password && password.value != re_password.value ? {'misMatch' : true} : null 

}    