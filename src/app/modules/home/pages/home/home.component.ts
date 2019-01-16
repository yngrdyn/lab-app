import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatDialog, MatDialogConfig, MatFormFieldControl } from '@angular/material';

import { Message } from '../../../../core/models/message';

import { MessagesService } from '../../../../core/services/message.service';

import { DialogBodyComponent } from '../../components/dialog-body/dialog-body.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messageList: Message[];
  displayedColumns = ['crewLogin', 'phoneNumber','base','sentDate', 'status'];
  emailFormControl = new FormControl('', []);

  constructor(
    private dialog: MatDialog,
    private messagesService: MessagesService
  ) {}

  ngOnInit() {
    this.messagesService.list().subscribe(
      res=>this.messageList = res
    );
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(DialogBodyComponent, dialogConfig);
  }

  resendMessage(message:any) {
    console.log('Resend message: ', message);
  }

}
