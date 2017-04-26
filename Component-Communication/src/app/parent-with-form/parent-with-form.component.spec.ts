import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentWithFormComponent } from './parent-with-form.component';

describe('ParentWithFormComponent', () => {
  let component: ParentWithFormComponent;
  let fixture: ComponentFixture<ParentWithFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentWithFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentWithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
