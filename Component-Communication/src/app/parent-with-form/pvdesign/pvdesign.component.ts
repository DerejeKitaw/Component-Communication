import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { MODULE } from '../../module_specification';

@Component({
  selector: 'pvdesign',
  templateUrl: './pvdesign.component.html',
  styleUrls: ['./pvdesign.component.css']
})
export class PvdesignComponent implements OnInit {
  private _ModulesType; private _Power; private _Vmpp; private _Impp; private _Voc; private _Isc; private _VoctempCoef; private _VmptempCoef; private _ItempCoef; private _MaximumSysVoltage;
panel=MODULE;

  private _ohmkft;
  private _current = 0;
  private _distance = 0;
  private _voltage = 0;
  private _vd;
  private voltageDrop;
  private voltageDropPercentage;
  distanceComment: string = '<>';


  pvCalForm: FormGroup;
  formval;
  voltage;
  PanelType;
  current;
  formValues;
  ohmkft = MODULE;
  submitted = false;
  formErrors = {
    PanelType: '',
    voltage: '',
    current: ''
  };
  validationMessages = {
    PanelType: {
      required: 'PanelType is required',
      pattern: 'PanelType need to be a number'
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

    this.pvCalForm = this.fb.group({
      PanelType: '',
      voltage: ['2', [Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]],
      current: ['2', [Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]]


    });

    this.pvCalForm.valueChanges.subscribe(data => { this.validateForm() });
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
      let input = this.pvCalForm.get(field);

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
    console.log('Saved: ' + JSON.stringify(this.pvCalForm.value));
    this.formValues = JSON.stringify(this.pvCalForm.value);
    this.submitted = true;
    this.formval = this.pvCalForm.value;
    this._ohmkft = JSON.stringify(this.formval.ohm_kft_al);
    this.update();
  }
  populateTestData(): void {
    this.pvCalForm.patchValue({
      PanelType: 'HANWHA 280 Q.PLUS BFR G4.1',
      voltage: '240',
      current: '20'
    });
  }
  clearTestData(): void {
    this.pvCalForm.patchValue({
      PanelType: '',
      voltage: '',
      current: ''
    });
    console.log('Data cleared');
  }
  update() {
    this.voltageDrop = this._current * 2 * this._distance * this._ohmkft / 1000;
    console.log('voltageDrop: ' + this.voltageDrop);
    console.log('current: ' + this._current);
    console.log('distance: ' + this._distance);
    console.log('ohmkft: ' + this._ohmkft);
    this.voltageDropPercentage = this.voltageDrop * 100 / this._voltage;
  }

}
