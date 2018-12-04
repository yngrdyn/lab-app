import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShiftsComponent } from './pages/shifts/shifts.component';
import { SecondResidencyComponent } from './pages/second-residency/second-residency.component';
import { PreferencesComponent } from './preferences.component';

const routes: Routes = [
    {
        path: 'preferences', 
        component: PreferencesComponent,
        children: [
            {
                path:'',
                component: ShiftsComponent
            },
            {
                path:'second-residency',
                component: SecondResidencyComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferencesRoutingModule { }
