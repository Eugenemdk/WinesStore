import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedcomponentComponent } from './nestedcomponent.component';

describe('NestedcomponentComponent', () => {
  let component: NestedcomponentComponent;
  let fixture: ComponentFixture<NestedcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
