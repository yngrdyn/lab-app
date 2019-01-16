import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

import { 
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatTableModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { MessagesService } from '../../core/services/message.service'; 

import { HomeComponent } from './pages/home/home.component';
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
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatTooltipModule,
    ReactiveFormsModule
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
