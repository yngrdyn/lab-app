import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})
export class ShiftsComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstPreference: ['', [ Validators.required]],
      secondPreference: '',
    });
  }

  resetForm() {
    this.form.reset();
  }

  submit() {
    console.log(this.form);
  }

}
