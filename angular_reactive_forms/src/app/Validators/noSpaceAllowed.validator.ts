import { AbstractControl, FormControl } from "@angular/forms";



export class CustomValidators{
     static noSPaceAllowed = (control:FormControl)=>{
        if(control.value != null && control.value.indexOf(' ') != -1){
            return {noSPaceAllowed:true}
        }
        return null;
    }

    static checkUsername(control:AbstractControl):Promise<any>{
        return userNameAllowed(control.value)
    }
}

function userNameAllowed(username:string){
    const takenUserNAmes = ['jhonsmith','manojjha','sarahking'];

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(takenUserNAmes.includes(username)){
                resolve({checkUsername:true});
            }else{
                resolve(null);
            }
        },5000)
    })
}