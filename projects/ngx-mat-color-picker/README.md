# NGX Color Picker

[![downloads](https://img.shields.io/npm/dm/ngx-mat-color-picker.svg)](https://www.npmjs.com/package/ngx-mat-color-picker)
[![build](https://github.com/kovrichard/ngx-mat-color-picker/actions/workflows/stage.yml/badge.svg)](https://github.com/kovrichard/ngx-mat-color-picker/actions)

[![NPM](https://nodei.co/npm/ngx-mat-color-picker.png)](https://www.npmjs.com/package/ngx-mat-color-picker)


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

## Author

Richard Kovacs

- https://github.com/kovrichard
- https://twitter.com/rchardkovacs
