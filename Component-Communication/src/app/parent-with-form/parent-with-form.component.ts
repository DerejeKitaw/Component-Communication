import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

const OHMKFT: any[] = [
  {
    "Wire_size": "14",
    "ohm_kft_cu": 3.14,
    "ohm_kft_al": 5.17
  },
  {
    "Wire_size": "12",
    "ohm_kft_cu": 1.98,
    "ohm_kft_al": 3.25
  },
  {
    "Wire_size": "10",
    "ohm_kft_cu": 1.24,
    "ohm_kft_al": 2.04
  },
  {
    "Wire_size": "8",
    "ohm_kft_cu": 0.778,
    "ohm_kft_al": 1.28
  },
  {
    "Wire_size": "6",
    "ohm_kft_cu": 0.491,
    "ohm_kft_al": 0.808
  },
  {
    "Wire_size": "4",
    "ohm_kft_cu": 0.308,
    "ohm_kft_al": 0.508
  },
  {
    "Wire_size": "3",
    "ohm_kft_cu": 0.245,
    "ohm_kft_al": 0.403
  },
  {
    "Wire_size": "2",
    "ohm_kft_cu": 0.194,
    "ohm_kft_al": 0.319
  },
  {
    "Wire_size": "1",
    "ohm_kft_cu": 0.154,
    "ohm_kft_al": 0.253
  },
  {
    "Wire_size": "1/0",
    "ohm_kft_cu": 0.122,
    "ohm_kft_al": 0.201
  },
  {
    "Wire_size": "2/0",
    "ohm_kft_cu": 0.0967,
    "ohm_kft_al": 0.159
  },
  {
    "Wire_size": "3/0",
    "ohm_kft_cu": 0.0766,
    "ohm_kft_al": 0.126
  },
  {
    "Wire_size": "4/0",
    "ohm_kft_cu": 0.0608,
    "ohm_kft_al": 0.10
  },
  {
    "Wire_size": "250",
    "ohm_kft_cu": 0.0515,
    "ohm_kft_al": 0.0847
  },
  {
    "Wire_size": "300",
    "ohm_kft_cu": 0.0429,
    "ohm_kft_al": 0.0707
  },
  {
    "Wire_size": "350",
    "ohm_kft_cu": 0.0367,
    "ohm_kft_al": 0.0605
  },
  {
    "Wire_size": "400",
    "ohm_kft_cu": 0.0321,
    "ohm_kft_al": 0.0529
  },
  {
    "Wire_size": "500",
    "ohm_kft_cu": 0.0258,
    "ohm_kft_al": 0.0424
  },
  {
    "Wire_size": "600",
    "ohm_kft_cu": 0.0214,
    "ohm_kft_al": 0.0353
  }
];


@Component({
  selector: 'parent-with-form',
  templateUrl: './parent-with-form.component.html',
  styleUrls: ['./parent-with-form.component.css']
})
export class ParentWithFormComponent implements OnInit {

  voltageDropCalForm: FormGroup;
  formval;
  voltage;
  distance;
  current;
  formValues;
  ohmkft = OHMKFT;
  submitted = false;
  formErrors = {
    distance: '',
    voltage: '',
    current: ''
  };
  validationMessages = {
    distance: {
      required: 'Distance is required',
      pattern: 'Distance need to be a number'
    },
    voltage: {
      required: 'Voltage is required',
      pattern: 'Voltage need to be a number'
    },
    current: {
      required: 'Current is required',
      pattern: 'Current need to be a number'
    }
  };
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.buildForm();

  }
  /**    Build the initial form 
   * ^                   # Start of string.
     [0-9]+              # Must have one or more numbers.
     (                   # Begin optional group.
         \.              # The decimal point, . must be escaped, 
                         # or it is treated as "any character".
         [0-9]{1,2}      # One or two numbers.
     )?                  # End group, signify it's optional with ?
     $                   # End of string.
  */
  buildForm() {

    this.voltageDropCalForm = this.fb.group({
      distance: ['', [Validators.compose([Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')])]],
      voltage: ['', [Validators.compose([Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')])]],
      current: ['', [Validators.compose([Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')])]]


    });

    this.voltageDropCalForm.valueChanges.subscribe(data => { this.validateForm() });
  }


  /**
   * Validate the entire form
   */
  validateForm() {

    //loop over the form erros field names
    for (let field in this.formErrors) {

      //clear that input field errors
      this.formErrors[field] = '';

      //grab an input field by name
      let input = this.voltageDropCalForm.get(field);

      if (input.invalid && input.dirty) {

        for (let error in input.errors) {

          //assign the type of error message to the variable
          this.formErrors[field] = this.validationMessages[field][error];

        }
      }
    }
    ;
  }
  //TODO implement save method
  save(): void {
    console.log('Saved: ' + JSON.stringify(this.voltageDropCalForm.value));
    this.formValues = JSON.stringify(this.voltageDropCalForm.value);
    this.submitted = true;
    this.formval = this.voltageDropCalForm.value;
  }
  populateTestData(): void {
    this.voltageDropCalForm.patchValue({
      distance: '300',
      voltage: '240',
      current: '20'
    });
  }
  clearTestData(): void {
       this.voltageDropCalForm.patchValue({
      distance: '',
      voltage: '',
      current: ''
    });
    console.log('Data cleared');
  }

}
