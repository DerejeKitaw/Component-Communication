import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvdesignComponent } from './pvdesign.component';

describe('PvdesignComponent', () => {
  let component: PvdesignComponent;
  let fixture: ComponentFixture<PvdesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvdesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
