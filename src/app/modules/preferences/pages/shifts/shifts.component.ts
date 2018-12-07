import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm  } from '@angular/forms';
import { PreferencesService } from '../../../../core/services/preferences.service';

import {Observable, timer} from 'rxjs';
import {tap} from 'rxjs/Operators';

interface UserModel {
  id: number;
  value: string;
}

interface CrewUserModel {
  firstPreference: number;
  secondPreference: number;
}


@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss'],
})
export class ShiftsComponent implements OnInit {

  preferencesList: UserModel[];
  form: FormGroup;
  preferences: Observable<UserModel[]>;
  successMessage : any;

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

    this.preferencesService.list().subscribe(
      res=>this.preferencesList = res
    );

    this.preferences = this.preferencesService.getCrewPreferences().pipe(
      tap(preferences => this.form.patchValue(preferences))
    );

  }

  submit() {
    let preference : CrewUserModel =  {
      firstPreference: this.form.controls['firstPreference'].value,
      secondPreference: this.form.controls['secondPreference'].value
    };

    console.log(preference);

    this.preferencesService.setCrewPreference(preference).subscribe((resp) => { 
      this.successMessage = resp.status == 'success' ? "Las preferencias han sido actualizadas correctamente" : "Error";
      timer(3000).subscribe(() => {
        this.successMessage = null;
      });
     }); 

  }

}
