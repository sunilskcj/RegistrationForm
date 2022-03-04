import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidator } from 'src/custom-validators/loginformvalidators';
import { ConPass } from 'src/custom-validators/password-validation';
import { RegFormData } from 'src/model/formdata';





@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  @Output() credentials = new EventEmitter<RegFormData>();

  RegistrationForm: FormGroup = this._rg.group({
    name: [
      "",
      [Validators.required]
    ],
    uname: ["", [Validators.required]],
    psw: ["",
      [Validators.required,
      FormValidator.Length,
      FormValidator._isLowerC,
      FormValidator._isUpperC,
      FormValidator._isdigit,
      FormValidator._isSpecialC
      
    ]
    ],
    rpsw: ["",
    [Validators.required,
      FormValidator.Length,
      FormValidator._isLowerC,
      FormValidator._isUpperC,
      FormValidator._isdigit,
      FormValidator._isSpecialC
      
    ]
  ],
    num: ["", [Validators.required,FormValidator._isC]]
  })


  ngOnInit(): void {
  }

  constructor(private _rg: FormBuilder) { }

  submit(){
   console.log(this.RegistrationForm.value);
   
    this.credentials.emit( this.RegistrationForm.value);
  }

}
