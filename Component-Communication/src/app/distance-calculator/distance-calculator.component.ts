import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { OHMKFT } from '../wire-constants';

@Component({
  selector: 'distance-calculator',
  templateUrl: './distance-calculator.component.html',
  styleUrls: ['./distance-calculator.component.css']
})
export class DistanceCalculatorComponent implements OnInit {
private _ohmkft;
private _current=0;
private _distance=0;
private _voltage=0;
private _vd;
private voltageDrop ;
private voltageDropPercentage ;
distanceComment: string='<>';


  wireSizeCalForm: FormGroup;
  formval;
  voltage;
  WireSize;
  current;
  formValues;
  ohmkft = OHMKFT;
  submitted = false;
  formErrors = {
    WireSize: '',
    voltage: '',
    current: ''
  };
  validationMessages = {
    WireSize: {
      required: 'WireSize is required',
      pattern: 'WireSize need to be a number'
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
  /**    Build the initial form */
  buildForm() {

    this.wireSizeCalForm = this.fb.group({
      WireSize: '',
      voltage: ['2', [Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]],
      current: ['2', [Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]]


    });

    this.wireSizeCalForm.valueChanges.subscribe(data => { this.validateForm() });
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
      let input = this.wireSizeCalForm.get(field);

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
    console.log('Saved: ' + JSON.stringify(this.wireSizeCalForm.value));
    this.formValues = JSON.stringify(this.wireSizeCalForm.value);
    this.submitted = true;
    this.formval = this.wireSizeCalForm.value;
    this._ohmkft=JSON.stringify(this.formval.ohm_kft_al);
    this.update();
  }
  populateTestData(): void {
    this.wireSizeCalForm.patchValue({
      wiresize: '300',
      voltage: '240',
      current: '20'
    });
  }
  clearTestData(): void {
       this.wireSizeCalForm.patchValue({
      wiresize: '',
      voltage: '',
      current: ''
    });
    console.log('Data cleared');
  }
update(){
this.voltageDrop = this._current * 2 * this._distance * this._ohmkft / 1000;
console.log('voltageDrop: ' + this.voltageDrop);
console.log('current: ' + this._current);
console.log('distance: ' + this._distance);
console.log('ohmkft: ' + this._ohmkft);
this.voltageDropPercentage = this.voltageDrop * 100 / this._voltage;
}

}
