import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatColorPickerComponent } from './ngx-mat-color-picker.component';

describe('NgxMatColorPickerComponent', () => {
  let component: NgxMatColorPickerComponent;
  let fixture: ComponentFixture<NgxMatColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMatColorPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMatColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
