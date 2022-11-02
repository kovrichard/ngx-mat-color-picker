import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatColorPickerComponent } from './ngx-mat-color-picker.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormControl, FormGroup } from '@angular/forms';

describe('NgxMatColorPickerComponent', () => {
  let component: NgxMatColorPickerComponent;
  let fixture: ComponentFixture<NgxMatColorPickerComponent>;
  let form: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayModule],
      declarations: [NgxMatColorPickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxMatColorPickerComponent);
    component = fixture.componentInstance;

    form = new FormGroup({
      color: new FormControl('#000000'),
    });
    component.formControlName = 'color';
    component.form = form;

    fixture.detectChanges();
  });

  it('default color should be white', () => {
    expect(component.color).toEqual('#FFFFFF');
  });

  it('color picker should be closed by default', () => {
    expect(component.pickerVisible).toBeFalse();
  });

  it('color should change when input color changes', () => {
    component.changeFormColor('#abcabc');

    expect(component.color).toEqual('#ABCABC');
  });

  it('color should not change when input color is invalid', () => {
    component.changeFormColor('#xxyyzz');

    expect(component.color).toEqual('#FFFFFF');
  });

  it('onChange should be changeable', () => {
    const a = () => {};
    component.registerOnChange(a);

    expect(component.onChange).toEqual(a);
  });

  it('onTouched should be changeable', () => {
    const a = () => {};
    component.registerOnTouched(a);

    expect(component.onTouched).toEqual(a);
  });

  it('changeFormColor should change form control color based on name', () => {
    const color = '#aabbcc';
    component.changeFormColor(color);

    expect(form.get(component.formControlName)?.value).toEqual(
      color.toUpperCase()
    );
  });

  it('onEscape should prevent default behavior', () => {
    const mockEvent: any = {
      preventDefault: () => {},
    };
    const preventMock = spyOn(mockEvent, 'preventDefault');

    component.onEscape(mockEvent);

    expect(preventMock).toHaveBeenCalledOnceWith();
  });

  it('onEscape should should close picker', () => {
    const mockEvent: any = {
      preventDefault: () => {},
    };
    component.pickerVisible = true;

    component.onEscape(mockEvent);

    expect(component.pickerVisible).toBeFalse();
  });
});
