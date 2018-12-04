import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatSidenavModule,
} from '@angular/material';

import { PreferencesRoutingModule } from './preferences-routing.module';

import { PreferencesComponent } from './preferences.component';
import { ShiftsComponent } from './pages/shifts/shifts.component';
import { SecondResidencyComponent } from './pages/second-residency/second-residency.component';

@NgModule({
  declarations: [
    PreferencesComponent,
     ShiftsComponent,
     SecondResidencyComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    PreferencesRoutingModule,
  ],
  exports: [
    PreferencesRoutingModule,
  ]
})
export class PreferencesModule { 
}
