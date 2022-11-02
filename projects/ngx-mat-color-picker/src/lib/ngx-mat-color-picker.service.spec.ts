import { TestBed } from '@angular/core/testing';

import { NgxMatColorPickerService } from './ngx-mat-color-picker.service';

describe('NgxMatColorPickerService', () => {
  let service: NgxMatColorPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatColorPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
