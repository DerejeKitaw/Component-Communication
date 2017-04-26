import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltageDropComponent } from './voltage-drop.component';

describe('VoltageDropComponent', () => {
  let component: VoltageDropComponent;
  let fixture: ComponentFixture<VoltageDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoltageDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltageDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
