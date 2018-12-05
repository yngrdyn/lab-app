import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm  } from '@angular/forms';
import { PreferencesService } from '../../../../core/services/preferences.service';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/Operators';

interface UserModel {
  firstPreference: string;
  secondPreference: string;
}

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss'],
})
export class ShiftsComponent implements OnInit {

  @ViewChild('formDirective') private formDirective: NgForm;

  form: FormGroup;
  preferences: Observable<UserModel>;

  constructor(
    private formBuilder: FormBuilder,
    private preferencesService: PreferencesService,
  ) {

  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      firstPreference: ['', [ Validators.required]],
      secondPreference: '',
    });

    this.preferences = this.preferencesService.list().pipe(
      tap(user => this.form.patchValue(user))
    );    

  }

  resetForm() {
    this.formDirective.resetForm();
  }

  submit() {
    console.log(this.form);
  }

}
