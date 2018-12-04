import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { 
  MatSidenavModule,
  MatSelectModule,
} from '@angular/material';


import { PreferencesRoutingModule } from './preferences-routing.module';

import { PreferencesComponent } from './preferences.component';
import { ShiftsComponent } from './pages/shifts/shifts.component';
import { SecondResidencyComponent } from './pages/second-residency/second-residency.component';

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
    MatSelectModule,
  ],
  exports: [
    PreferencesRoutingModule,
  ]
})
export class PreferencesModule { 
}
