import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatColorPickerComponent } from './ngx-mat-color-picker.component';
import { ColorPickerModule } from '@iplab/ngx-color-picker';

@NgModule({
  declarations: [NgxMatColorPickerComponent],
  imports: [
    OverlayModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
  ],
  exports: [NgxMatColorPickerComponent],
})
export class NgxMatColorPickerModule {}
