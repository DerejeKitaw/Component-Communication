import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'voltage-drop',
  templateUrl: './voltage-drop.component.html',
  styleUrls: ['./voltage-drop.component.css']
})
export class VoltageDropComponent implements OnInit {
@Input() wireData;
@Input() current;
@Input() distance;
@Input() voltage;
@Input() vd;
  constructor() { }

  ngOnInit() {
  }

}
