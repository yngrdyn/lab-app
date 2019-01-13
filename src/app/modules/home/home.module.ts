import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';

import { 
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { MessagesService } from '../../core/services/message.service'; 

import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';
import { StatusComponent } from './components/status/status.component';

@NgModule({
  declarations: [
    HomeComponent,
    DialogBodyComponent,
    StatusComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule
  ],
  exports: [
    HomeComponent
  ],
  entryComponents: [
    DialogBodyComponent,
  ],
  providers: [
    HttpClient,
    MessagesService
  ]
})
export class HomeModule { }
