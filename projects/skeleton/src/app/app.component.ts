import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'skeleton';

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      color: new FormControl('#aabbcc', [Validators.required]),
    });
  }
}
