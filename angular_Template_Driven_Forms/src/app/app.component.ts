import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_Template_Driven_Forms';

  firstName:string = '';
  lastName:string = '';
  Email:string = '';

  @ViewChild('registrationForm') form!:NgForm;

  genders = [
    {id:'check-male',value:'male',display:'Male'},
    {id:'check-female',value:'female',display:'Female'},
    {id:'check-other',value:'other',display:'Prefer not to say'}
  ]

  defaultCountry: string = 'India';

  OnFormsSubmitted(){
    console.log(this.form);
    //accessing the values of form controls 
    // console.log(this.form.value.firstname);
    // console.log(this.form.value.lastname);
    // console.log(this.form.value.email);
    // console.log(this.form.value.country);

    console.log(this.form.controls['firstname'].value);
    console.log(this.form.controls['lastname'].value);
    console.log(this.form.controls['email'].value);
    console.log(this.form.controls['country'].value);
    console.log(this.form.value.address.city);


  }
}
