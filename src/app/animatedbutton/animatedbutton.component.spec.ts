import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedbuttonComponent } from './animatedbutton.component';

describe('AnimatedbuttonComponent', () => {
  let component: AnimatedbuttonComponent;
  let fixture: ComponentFixture<AnimatedbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
