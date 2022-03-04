import { Component, Input, OnInit } from '@angular/core';
import { RegFormData } from 'src/model/formdata';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor() { }

  @Input() fData : RegFormData | undefined
  ngOnInit(): void {
  }

}
