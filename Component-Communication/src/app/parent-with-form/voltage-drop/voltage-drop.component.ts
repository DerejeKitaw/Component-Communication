import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'voltage-drop',
  templateUrl: './voltage-drop.component.html',
  styleUrls: ['./voltage-drop.component.css']
})
export class VoltageDropComponent implements OnInit {
private _ohmkft;
private _current=0;
private _distance=0;
private _voltage=0;
private _vd;
//For label purpose
//  ohmkft=this._ohmkft;
//  current=this._current;
//  distance=this._distance;
//  voltage=this._voltage;
//  vd=this._vd;

private voltageDrop ;
private voltageDropPercentage ;
private voltageDropAl ;
private voltageDropPercentageAl ;
distanceComment: string='<>';
@Input() 
set ohmkft (ohmkft: number) {
    this._ohmkft = ohmkft ;
    this.update();
  }
  get ohmkft(): number{return this._ohmkft;}

@Input() 
set current (current: number) {
    this._current = current ;
    this.update();
  }
  get current(): number{return this._current;}
@Input() 
  set distance (distance: number) {
    // if (distance > 100){
    //   this.update();
    //   this._distance =  10;
    //   this.distanceComment='too long'
    // }else{
    //   this.distanceComment='short'

    // }
    this._distance = distance ;
    this.update();
  }
  get distance(): number{return this._distance;}
@Input() 
set voltage (voltage: number) {
    this._voltage = voltage ;
    this.update();
  }
  get voltage(): number{return this._voltage;}
@Input() vd;
  constructor() { }

  ngOnInit() {
  }
update(){
this.voltageDrop = this._current * 2 * this._distance * this._ohmkft / 1000;
this.voltageDropPercentage = this.voltageDrop * 100 / this._voltage;
// this.voltageDropAl = this._current * 2 * this._distance * this._ohmkft_al / 1000;
// this.voltageDropPercentageAl = this.voltageDrop * 100 / this._voltage;
}
}
