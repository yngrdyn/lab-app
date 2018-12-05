import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { 
  MatSidenavModule,
  MatSelectModule,
} from '@angular/material';

import { PreferencesRoutingModule } from './preferences-routing.module';

import { PreferencesComponent } from './preferences.component';
import { ShiftsComponent } from './pages/shifts/shifts.component';
import { SecondResidencyComponent } from './pages/second-residency/second-residency.component';

import { PreferencesService } from '../../core/services/preferences.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    PreferencesComponent,
     ShiftsComponent,
     SecondResidencyComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    PreferencesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule
  ],
  exports: [
    PreferencesRoutingModule,
  ],
  providers: [
    HttpClient,
    PreferencesService
  ]
})
export class PreferencesModule { 
}
