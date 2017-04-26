import { Component, OnInit , Input} from '@angular/core';
import  {Hero} from '../hero';
@Component({
  selector: 'hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {
  //hero is property of hero-child and any parnet component 
  //should put [hero] property
  @Input() hero: Hero;
  @Input('dadPropertyOfChild') dadxyzName: string;

  constructor() { }

  ngOnInit() {
  }

}
