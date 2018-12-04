import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { 
  MatButtonModule, 
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
