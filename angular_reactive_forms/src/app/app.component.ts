import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './Validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular_reactive_forms';
  formStatus:string = '';
  formData:any = {};

  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      // specify the controls you want here
      firstname:new FormControl(null,[Validators.required , CustomValidators.noSPaceAllowed]),
      lastname:new FormControl(null,[Validators.required , CustomValidators.noSPaceAllowed]),
      email:new FormControl(null,[Validators.required, Validators.email]),
      username:new FormControl(null,Validators.required,CustomValidators.checkUsername),
      dob:new FormControl(null),
      //default value male
      gender:new FormControl('male'),
      address:new FormGroup({
        street:new FormControl(null,Validators.required),
        country:new FormControl('India',Validators.required),
        city:new FormControl(null),
        region:new FormControl(null),
        postal:new FormControl(null,Validators.required),
      }),
      skills:new FormArray([
        new FormControl(null,Validators.required)
      ]),
      experience:new FormArray([
        
      ])
    })

    // this.reactiveForm.get('firstname').valueChanges.subscribe((value)=>{
    //   console.log(value);
    // })

    // this.reactiveForm.valueChanges.subscribe((data)=>{
    //   console.log(data);
    // })

    // this.reactiveForm.get('email').statusChanges.subscribe((status)=>{
    //   console.log(status);
    // })

    this.reactiveForm.statusChanges.subscribe((status)=>{
      console.log(status);
      this.formStatus = status;
    })
  }

  OnFormSubmitted(){
    console.log(this.reactiveForm.value);
    this.formData = this.reactiveForm.value;
    this.reactiveForm.reset({
      firstname:null,
      lastname:null,
      email:null,
      username:null,
      dob:null,
      gender:'male',
      address:({
        street:null,
        country:'India',
        city:null,
        region:null,
        postal:null,
      }),
      skills:([
        null
      ]),
      experience:([
        
      ])
    })
  }

  AddSkills(){
    (<FormArray>this.reactiveForm.get('skills'))
    .push(new FormControl(null, Validators.required))
  }

  DeleteSkill(index:number){
    const controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }

  AddExperience(){
    const frmgroup = new FormGroup({
        company:new FormControl(null),
        position:new FormControl(null),
        totalExp:new FormControl(null),
        start: new FormControl(null),
        end: new FormControl(null),
    });

    (<FormArray>this.reactiveForm.get('experience')).push(frmgroup);
  }

  DeleteExperience(index:number){
    const frmArray = <FormArray>this.reactiveForm.get('experience');
    frmArray.removeAt(index);
  }

  GenerateUsername(){
    let username = '';
    const fName: string= this.reactiveForm.get('firstname').value;
    const lName: string= this.reactiveForm.get('lastname').value;
    const dob: string= this.reactiveForm.get('dob').value;

    if(fName.length >= 3){
      username += fName.slice(0, 3);
    }
    else {
      username += fName;
    }

    if(lName.length >= 3){
      username += lName.slice(0, 3);
    }
    else {
      username += lName;
    }

    let datetime = new Date(dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    //console.log(username);

    // this.reactiveForm.setValue({
    //   firstname: this.reactiveForm.get('firstname').value,
    //   lastname: this.reactiveForm.get('lastname').value,
    //   email: this.reactiveForm.get('email').value,
    //   username: username,
    //   dob: this.reactiveForm.get('dob').value,
    //   gender: this.reactiveForm.get('gender').value,
    //   address: {
    //     street: this.reactiveForm.get('address.street').value,
    //     country: this.reactiveForm.get('address.country').value,
    //     city: this.reactiveForm.get('address.city').value,
    //     region: this.reactiveForm.get('address.region').value,
    //     postal: this.reactiveForm.get('address.postal').value
    //   },
    //   skills: this.reactiveForm.get('skills').value,
    //   experience: this.reactiveForm.get('experience').value
    // })

    // to update a single field no need to call setValue() on form group
    // just calling it on single control is okay
    //this.reactiveForm.get('username').setValue(username);

    this.reactiveForm.patchValue({
      username: username,
      address: {
        city: 'New Delhi'
      }
    })
}
}
