import {
  Component,
  HostListener,
  Input,
  OnInit,
  OnDestroy,
  forwardRef,
} from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-mat-color-picker',
  templateUrl: './ngx-mat-color-picker.component.html',
  styleUrls: ['./ngx-mat-color-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxMatColorPickerComponent),
      multi: true,
    },
  ],
})
export class NgxMatColorPickerComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  private formSubscription: Subscription | undefined;

  @Input() appearance: MatFormFieldAppearance;
  @Input() formColor: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() formControlName: string;
  @Input() form: FormGroup;

  positionPairs: ConnectionPositionPair[] = [
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'bottom',
      offsetX: -210,
      offsetY: 0,
    },
  ];

  chosenColor = '#FFFFFF';
  pickerVisible = false;

  constructor() {}

  ngOnInit(): void {
    this.formSubscription = this.form
      .get(this.formControlName)
      ?.valueChanges.subscribe((value: string) => {
        if (this.validColor(value)) {
          this.chosenColor = value.toUpperCase();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.formSubscription) this.formSubscription.unsubscribe();
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  writeValue(color: string) {
    this.chosenColor = color;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  changeFormColor($event: any) {
    this.form.get(this.formControlName)?.setValue($event.toUpperCase());
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape($event: KeyboardEvent) {
    $event.preventDefault();

    this.pickerVisible = false;
  }

  @HostListener('document:keydown.enter', ['$event'])
  onEnter($event: KeyboardEvent) {
    $event.preventDefault();
  }

  private validColor(color: string) {
    return /^#[0-9a-fA-F]{6}$/i.test(color);
  }
}
