import { Component } from '@angular/core';
import { IDeactivateComponent } from '../services/authgaurd.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements IDeactivateComponent {
  firstName:string ='';
  lastName:string='';
  nation:string='USA';
  message:string ='';

  isSubmitted:boolean = false;

  OnSubmit(){
    this.isSubmitted = true;
  }

  canExit(){
    if((this.firstName || this.lastName || this.message)&& !this.isSubmitted){
      return confirm('You have unsaved changes. Do you want to navigate away?')
    }else{
      return true;
    }
  }
}
