# NGX Color Picker

Color picker for Angular reactive forms in Material Design.

## Install

Install with NPM:

```
npm install ngx-mat-color-picker --save
```

Install with Yarn

```
yarn add ngx-mat-color-picker
```

## Setup

Add `NgxMatColorPickerModule` to your corresponding module's imports. Usually, it will be in `app.module.ts`.

``` ts
...
import { NgxMatColorPickerModule } from 'ngx-mat-color-picker';
...


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    NgxMatColorPickerModule,
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

When you are ready, you can use the `ngx-mat-color-picker` component in your templates.

``` html
<ngx-mat-color-picker appearance="outline" label="Background color" placeholder="This will be the color of the background" formControlName="backgroundColor" [form]=form></ngx-mat-color-picker>
```
