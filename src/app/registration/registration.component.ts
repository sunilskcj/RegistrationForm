import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegFormData } from 'src/model/formdata';
import { EventEmitter } from 'stream';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {



  @Output () formdata : EventEmitter<RegFormData> = new EventEmitter<RegFormData>() ;


  RegistrationForm: FormGroup = this._rg.group({
    name: [
      "",
      [Validators.required]
    ],
    uname: ["", [Validators.required]],
    psw: ["",
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12)
    ]
    ],
    rpsw: ["",
    [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(12)]
  ],
    num: ["", [Validators.required]]
  })


  ngOnInit(): void {
  }

  constructor(private _rg: FormBuilder) { }

  submit(){
    console.log(this.RegistrationForm);
    
  }

}
