import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

const OHMKFT:any[]=[
              {
                "Wire_size": "14",
                "ohm_kft": 3.14
              },
              {
                "Wire_size": "12",
                "ohm_kft": 1.98
              },
              {
                "Wire_size": "10",
                "ohm_kft": 1.24
              },
              {
                "Wire_size": "8",
                "ohm_kft": 0.778
              },
              {
                "Wire_size": "6",
                "ohm_kft": 0.491
              },
              {
                "Wire_size": "4",
                "ohm_kft": 0.308
              },
              {
                "Wire_size": "3",
                "ohm_kft": 0.245
              },
              {
                "Wire_size": "2",
                "ohm_kft": 0.194
              },
              {
                "Wire_size": "1",
                "ohm_kft": 0.154
              },
              {
                "Wire_size": "1/0",
                "ohm_kft": 0.122
              },
              {
                "Wire_size": "2/0",
                "ohm_kft": 0.0967
              },
              {
                "Wire_size": "3/0",
                "ohm_kft": 0.0766
              },
              {
                "Wire_size": "4/0",
                "ohm_kft": 0.0608
              },
              {
                "Wire_size": "250",
                "ohm_kft": 0.0515
              },
              {
                "Wire_size": "300",
                "ohm_kft": 0.0429
              },
              {
                "Wire_size": "350",
                "ohm_kft": 0.0367
              },
              {
                "Wire_size": "400",
                "ohm_kft": 0.0321
              },
              {
                "Wire_size": "500",
                "ohm_kft": 0.0258
              },
              {
                "Wire_size": "600",
                "ohm_kft": 0.0214
              }
              ];


@Component({
  selector: 'parent-with-form',
  templateUrl: './parent-with-form.component.html',
  styleUrls: ['./parent-with-form.component.css']
})
export class ParentWithFormComponent implements OnInit {

  voltageDropCalForm:FormGroup;
    formval;
    voltage;
    distance;
    current;
    formValues;
    ohmkft =OHMKFT;
     submitted = false;
    constructor(private fb: FormBuilder){}
  ngOnInit() {
    this.voltageDropCalForm = this.fb.group({
       distance: ['', [Validators.required]],
       voltage: ['', [Validators.required]],
       current: ['', [Validators.required]],
            
    });
  }
//TODO implement save method
save(): void {
  console.log('Saved: '+ JSON.stringify(this.voltageDropCalForm.value));
  this.formValues = JSON.stringify(this.voltageDropCalForm.value);
  this.submitted = true;
  this.formval=this.voltageDropCalForm.value;
}
populateTestData(): void {
  this.voltageDropCalForm.patchValue({
            distance: '300',
            voltage: '240',
            current:'20'
           });
}
clearTestData(): void {
  console.log('Data cleared');
}

}
