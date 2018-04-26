import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidlayoutComponent } from './fluidlayout.component';

describe('FluidlayoutComponent', () => {
  let component: FluidlayoutComponent;
  let fixture: ComponentFixture<FluidlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluidlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
