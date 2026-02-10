import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsDemoComponent } from './signals-demo.component';

describe('SignalsDemoComponent', () => {
  let component: SignalsDemoComponent;
  let fixture: ComponentFixture<SignalsDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalsDemoComponent]
    });
    fixture = TestBed.createComponent(SignalsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
