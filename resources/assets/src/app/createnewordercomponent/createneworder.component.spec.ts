import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateneworderComponent } from './createneworder.component';

describe('CreateneworderComponent', () => {
  let component: CreateneworderComponent;
  let fixture: ComponentFixture<CreateneworderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateneworderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateneworderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
