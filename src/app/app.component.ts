import { Component } from '@angular/core';
import { RegFormData } from 'src/model/formdata';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task3';
  
  
  currentData : RegFormData | undefined

  logCredentials(credentials:RegFormData) {
   this.currentData = credentials
    console.log(credentials);
    
  }
}
